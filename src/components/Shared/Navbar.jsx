import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-4 bg-gray-100">
            <div className="w-10/12 mx-auto flex justify-between items-center">
                <div className="inline-flex items-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-md text-heading-6 font-semibold text-2xl bg-black text-white">
                        T
                    </span>
                </div>
                <ul className="flex font-medium justify-center space-x-4">
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/profile'>Profile</Link>
                    </li>
                </ul>
                <Button>Button</Button>
            </div>
        </nav>
    );
};

export default Navbar;