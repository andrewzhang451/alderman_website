function Navbar() {
    return (
        <nav className="relative bg-[url('/Nicole_Lee_Ping_Tom.png')] bg-cover bg-center h-80 text-white before:absolute before:inset-0 before:bg-black/40 before:z-0">
            <div className="relative z-10 flex justify-end items-start px-8 pt-4">
                <div className="flex gap-4">
                    <div>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-800 rounded">Home</a>
                    </div>
                    <div>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-800 rounded">Service</a>
                    </div>
                    <div>
                        <ul className="flex gap-4">
                            <li className="relative group">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-800 rounded">Our Mission</a>
                                    <ul className="absolute hidden group-hover:block bg-black shadow-md p-2 top-full">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-800">endorsement</a>
                                        </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex gap-4">
                            <li className="relative group">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-800 rounded">About</a>
                                <ul className="absolute hidden group-hover:block bg-black shadow-md p-2 top-full">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-800">Nicole Lee</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-800">staff</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-800">Our Accomplishment</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex gap-4">
                            <li className="relative group">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-800 rounded">Connect</a>
                                <ul className="absolute hidden group-hover:block bg-black shadow-md p-2 top-full">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-800">Email Nicole</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-800">Resources</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-800 rounded">Ward Map</a>
                    </div>
                    <div>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-800 rounded">Gallery</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
