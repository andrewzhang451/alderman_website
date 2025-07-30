function Navbar() {
    return (
        <nav className="bg-[#003366] border-b border-blue-800 text-white">
            <div className="relative z-10 flex justify-end items-start px-8 pt-4">
                <div className="flex gap-1">
                    <div>
                        <a href="#" className="block px-4 py-2 rounded hover:bg-white hover:text-blue-700 font-semibold transition-colors duration-200">Home</a>
                    </div>
                    <div className="pl-1 ml-1 border-l border-blue-300">
                        <a href="#" className="block px-4 py-2 rounded hover:bg-white hover:text-blue-700 font-semibold transition-colors duration-200">Service</a>
                    </div>
                    <div className="pl-1 ml-1 border-l border-blue-300">
                        <ul className="flex gap-4">
                            <li className="relative group">
                                <a href="#" className="block px-4 py-2 rounded hover:bg-white hover:text-blue-700 font-semibold transition-colors duration-200">
                                  Our Mission <span className="ml-1">▼</span>
                                </a>
                                    <ul className="absolute hidden group-hover:block bg-white shadow-md p-2 top-full rounded-md">
                                        <li className="relative group rounded-md">
                                            <a href="#" className="block px-4 py-2 rounded text-black hover:bg-white hover:text-blue-700 hover:border hover:border-blue-300 hover:border-solid font-semibold transition-colors duration-200">Endorsement</a>
                                        </li>
                                </ul>
                            </li>
                        </ul>
                    </div>  
                    <div className="pl-1 ml-1 border-l border-blue-300">
                        <ul className="flex gap-4">
                            <li className="relative group rounded-md">
                                <a href="#" className="block px-4 py-2 rounded hover:bg-white hover:text-blue-700 font-semibold transition-colors duration-200">
                                  About <span className="ml-1">▼</span>
                                </a>
                                <ul className="absolute hidden group-hover:block bg-white shadow-md p-2 top-full rounded-md">
                                    <li>
                                        <a href="#" className="block px-4 py-2 rounded text-black hover:bg-white hover:text-blue-700 hover:border hover:border-blue-300 hover:border-solid font-semibold transition-colors duration-200">Nicole Lee</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 rounded text-black hover:bg-white hover:text-blue-700 hover:border hover:border-blue-300 hover:border-solid font-semibold transition-colors duration-200">Staff</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 rounded text-black hover:bg-white hover:text-blue-700 hover:border hover:border-blue-300 hover:border-solid font-semibold transition-colors duration-200">Our Accomplishments</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="pl-1 ml-1 border-l border-blue-300">
                        <ul className="flex gap-4">
                            <li className="relative group">
                                <a href="#" className="block px-4 py-2 rounded hover:bg-white hover:text-blue-700 font-semibold transition-colors duration-200">
                                  Connect <span className="ml-1">▼</span>
                                </a>
                                <ul className="absolute hidden group-hover:block bg-white shadow-md p-2 top-full rounded-md">
                                    <li>
                                        <a href="#" className="block px-4 py-2 rounded text-black hover:bg-white hover:text-blue-700 hover:border hover:border-blue-300 hover:border-solid font-semibold transition-colors duration-200">Email Nicole</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 rounded text-black hover:bg-white hover:text-blue-700 hover:border hover:border-blue-300 hover:border-solid font-semibold transition-colors duration-200">Resources</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="pl-1 ml-1 border-l border-blue-300">
                        <a href="#" className="block px-4 py-2 rounded hover:bg-white hover:text-blue-700 font-semibold transition-colors duration-200">Ward Map</a>
                    </div>
                    <div className="pl-1 ml-1 border-l border-blue-300">
                        <a href="#" className="block px-4 py-2 rounded hover:bg-white hover:text-blue-700 font-semibold transition-colors duration-200">Gallery</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
