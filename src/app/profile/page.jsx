import getUser from "@/lib/getUser";
import Image from "next/image";

const Profile = () => {
    const user = getUser();

    return (
        <section>
            <h2 className="text-4xl font-semibold">
                Welcome to <span className="font-bold uppercase">{user?.given_name}</span>'s profile!
            </h2>

            <div className="space-y-1 mt-8">
                <h3 className="text-2xl font-semibold">User Information</h3>
                <p className="text-lg">Email: {user?.email}</p>
                <p className="text-lg">Given Name: {user?.given_name}</p>
                <Image
                    referrerPolicy="no-referrer"
                    src={user?.picture}
                    alt="Profile Picture"
                    width={150}
                    height={150}
                />
            </div>
        </section>
    );
};

export default Profile;
