function Navbar() {
    return (
        <nav className=" bg-blue-100">
            <div className="relative z-10 flex justify-end items-start px-8 pt-4">
                <div className="flex gap-4">
                    <div>
                        <a href="#" className="block px-4 py-2 hover:bg-white rounded">Home</a>
                    </div>
                    <div>
                        <a href="#" className="block px-4 py-2 hover:bg-white rounded">Service</a>
                    </div>
                    <div>
                        <ul className="flex gap-4">
                            <li className="relative group">
                                <a href="#" className="block px-4 py-2 hover:bg-white group-hover:bg-white">Our Mission</a>
                                    <ul className="absolute hidden group-hover:block bg-white shadow-md p-2 top-full">
                                        <li className="relative group group-hover:bg-white rounded">
                                            <a href="#" className="block px-4 py-2 hover:bg-slate-700 hover:text-white">Endorsement</a>
                                        </li>
                                </ul>
                            </li>
                        </ul>
                    </div>  
                    <div>
                        <ul className="flex gap-4">
                            <li className="relative group group-hover:bg-white rounded">
                                <a href="#" className="block px-4 py-2 hover:bg-white group-hover:bg-white">About</a>
                                <ul className="absolute hidden group-hover:block bg-white shadow-md p-2 top-full">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-slate-700 hover:text-white">Nicole Lee</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-slate-700 hover:text-white">Staff</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-slate-700 hover:text-white">Our Accomplishments</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex gap-4">
                            <li className="relative group">
                                <a href="#" className="block px-4 py-2 hover:bg-white group-hover:bg-white">Connect</a>
                                <ul className="absolute hidden group-hover:block bg-white shadow-md p-2 top-full">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-slate-700 hover:text-white">Email Nicole</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-slate-700 hover:text-white">Resources</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <a href="#" className="block px-4 py-2 hover:bg-white">Ward Map</a>
                    </div>
                    <div>
                        <a href="#" className="block px-4 py-2 hover:bg-white">Gallery</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
