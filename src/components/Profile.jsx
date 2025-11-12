const Profile = () => {
    return (
        <div className="absolute top-10 right-0 w-60 bg-zinc-800 border border-zinc-700/50 rounded-lg shadow-xl p-4 z-50">
            <div className="flex items-center gap-4">

                <div className="w-10 h-10 rounded-full bg-zinc-300 "></div>
                <div>
                    <p className="font-semibold text-zinc-300">User Name</p>
                    <p className="text-sm text-zinc-600 ">user@example.com</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;