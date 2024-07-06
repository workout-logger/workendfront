import FancyMultiSelect from './fancy_multi_select.tsx';
import FancyTimePicker from './time_picker.tsx'
import { Button } from "./components/ui/button"
import DatePickerDemo from './date_picker.tsx'

const WorkoutLogger = () => {

    return (
        <div className="bg-gray-700 text-white h-screen p-8">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-xl">
                <div className="flex space-x-4 justify-between">
                    <div className="mb-6">
                        <h1 className="text-xl font-bold text-nowrap">Workout #27</h1>
                        <DatePickerDemo/>
                    </div>
                    <div className="flex space-x-4 justify-between items-center mb-3">
                        <div className="max-w-28 mb-4 mt-2">
                            <FancyTimePicker/>
                        </div>
                        <div className="min-w-40">
                            <FancyMultiSelect/>
                        </div>

                    </div>
                </div>
                <Button>
                    + Add Exercise
                </Button>
            </div>
        </div>
    );
};

export default WorkoutLogger;