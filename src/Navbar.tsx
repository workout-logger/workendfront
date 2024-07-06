
import { Button } from "./components/ui/button"
import { AiOutlineHome, AiOutlineFileText, AiOutlineUser } from 'react-icons/ai';


function Navbar() {

    return (
        <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <Button variant="ghost" className="text-white mr-4">
                <AiOutlineHome className="mr-2" /> Home
            </Button>
            <div>

                <Button variant="ghost" className="text-white mr-4">
                    <AiOutlineFileText className="mr-2" /> Logs
                </Button>
                <Button variant="ghost" className="text-white">
                    <AiOutlineUser className="mr-2" /> User
                </Button>
            </div>
        </div>
    );
}

export default Navbar
