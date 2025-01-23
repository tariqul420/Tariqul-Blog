import Link from "next/link";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import getUser from "@/lib/getUser";

const Navbar = async () => {
    const { email } = await getUser() || {};

    return (
        <nav className="flex justify-between items-center py-4 bg-gray-100 sticky top-0 z-50">
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

                <div className="flex items-center space-x-4">
                    {
                        email ? (
                            <LogoutLink className="btn btn-neutral" postloginredirecturl={`/`}>Log out</LogoutLink>
                        ) : (<>
                            <LoginLink className="btn btn-neutral" postloginredirecturl={`/`}>Sign in</LoginLink>
                            <RegisterLink className="btn btn-neutral" postloginredirecturl={`/`}>Sign up</RegisterLink>
                        </>)
                    }
                </div>
            </div >
        </nav >
    );
};

export default Navbar;