import * as React from "react";
import { X } from "lucide-react";

import { Badge } from "./components/ui/badge";
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
} from "./components/ui/command";
import { Command as CommandPrimitive } from "cmdk";

type Framework = Record<"value" | "label", string>;

const FRAMEWORKS = [
    {
        value: "bicep",
        label: "bicep",
    },
    {
        value: "workout",
        label: "workout",
    },
    {
        value: "abs",
        label: "abs",
    },
    {
        value: "tricep",
        label: "tricep",
    }
] satisfies Framework[];

export function FancyMultiSelect() {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState<Framework[]>([FRAMEWORKS[1]]);
    const [inputValue, setInputValue] = React.useState("");

    const handleUnselect = React.useCallback((framework: Framework) => {
        setSelected((prev) => prev.filter((s) => s.value !== framework.value));
    }, []);

    const handleKeyDown = React.useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
            const input = inputRef.current;
            if (input) {
                if (e.key === "Delete" || e.key === "Backspace") {
                    if (input.value === "") {
                        setSelected((prev) => {
                            const newSelected = [...prev];
                            newSelected.pop();
                            return newSelected;
                        });
                    }
                }
                if (e.key === "Escape") {
                    input.blur();
                }
            }
        },
        []
    );

    const selectables = FRAMEWORKS.filter(
        (framework) => !selected.includes(framework)
    );

    return (
        <Command
            onKeyDown={handleKeyDown}
            className="overflow-visible bg-transparent"
        >
            <div className="group border border-gray-600 rounded-md px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-muted focus-within:ring-opacity-50 focus-within:ring-offset-2">
                <div className="flex flex-wrap gap-1">
                    {selected.map((framework) => {
                        return (
                            <Badge key={framework.value}>
                                {framework.label}
                                <button
                                    className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-muted focus:ring-opacity-50 focus:ring-offset-2"
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleUnselect(framework);
                                        }
                                    }}
                                    onMouseDown={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                    }}
                                    onClick={() => handleUnselect(framework)}
                                >
                                    <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                                </button>
                            </Badge>
                        );
                    })}
                    <CommandPrimitive.Input
                        ref={inputRef}
                        value={inputValue}
                        onValueChange={setInputValue}
                        onBlur={() => setOpen(false)}
                        onFocus={() => setOpen(true)}
                        placeholder="Select Muscle Groups..."
                        className="ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
                    />
                </div>
            </div>
            <div className="relative mt-2">
                <CommandList>
                    {open && selectables.length > 0 ? (
                        <div className="absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
                            <CommandGroup className="h-full overflow-auto">
                                {selectables.map((framework) => {
                                    return (
                                        <CommandItem
                                            key={framework.value}
                                            onMouseDown={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                            }}
                                            onSelect={(value) => {
                                                setInputValue("");
                                                setSelected((prev) => [...prev, framework]);
                                            }}
                                            className={"cursor-pointer"}
                                        >
                                            {framework.label}
                                        </CommandItem>
                                    );
                                })}
                            </CommandGroup>
                        </div>
                    ) : null}
                </CommandList>
            </div>
        </Command>
    );
}

export default FancyMultiSelect;
