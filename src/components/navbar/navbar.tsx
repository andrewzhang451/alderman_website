import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-[#003366] border-b border-blue-800 text-white">
            <div className="relative z-10 px-4 pt-4">
                <div className="flex flex-wrap justify-end items-start gap-x-2 gap-y-2">
                    <div>
                        <Link to="/" className="block px-4 py-2 rounded hover:bg-white hover:text-blue-700 font-semibold transition-colors duration-200">Home</Link>
                    </div>
                    <div className="border-l border-blue-300 pl-2">
                        <Link to="/Service" className="block px-4 py-2 rounded hover:bg-white hover:text-blue-700 font-semibold transition-colors duration-200">Service</Link>
                    </div>
                    <div className="border-l border-blue-300 pl-2">
                        <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                            <li className="relative group">
                                <a href="#" className="block px-4 py-2 rounded hover:bg-white hover:text-blue-700 font-semibold transition-colors duration-200">
                                  Our Mission <span className="ml-1">▼</span>
                                </a>
                                    <ul className="absolute hidden group-hover:block bg-white shadow-md p-2 top-full rounded-md">
                                        <li className="relative group rounded-md">
                                            <Link to="/Our_Mission/Endorsement" className="block px-4 py-2 rounded text-black hover:bg-white hover:text-blue-700 hover:border hover:border-blue-300 hover:border-solid font-semibold transition-colors duration-200">Endorsement</Link>
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
                                        <Link to="/About/Nicole" className="block px-4 py-2 rounded text-black hover:bg-white hover:text-blue-700 hover:border hover:border-blue-300 hover:border-solid font-semibold transition-colors duration-200">Nicole Lee</Link>
                                    </li>
                                    <li>
                                        <Link to="/About/Staff" className="block px-4 py-2 rounded text-black hover:bg-white hover:text-blue-700 hover:border hover:border-blue-300 hover:border-solid font-semibold transition-colors duration-200">Staff</Link>
                                    </li>
                                    <li>
                                        <Link to="/About/Accomplishments" className="block px-4 py-2 rounded text-black hover:bg-white hover:text-blue-700 hover:border hover:border-blue-300 hover:border-solid font-semibold transition-colors duration-200">Our Accomplishments</Link>
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
                                        <Link to="/Connect/Email" className="block px-4 py-2 rounded text-black hover:bg-white hover:text-blue-700 hover:border hover:border-blue-300 hover:border-solid font-semibold transition-colors duration-200">Email Nicole</Link>
                                    </li>
                                    <li>
                                        <Link to="/Connect/Resources" className="block px-4 py-2 rounded text-black hover:bg-white hover:text-blue-700 hover:border hover:border-blue-300 hover:border-solid font-semibold transition-colors duration-200">Resources</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="pl-1 ml-1 border-l border-blue-300">
                        <Link to="/ward_map" className="block px-4 py-2 rounded hover:bg-white hover:text-blue-700 font-semibold transition-colors duration-200">Ward Map</Link>
                    </div>
                    <div className="pl-1 ml-1 border-l border-blue-300">
                        <Link to="/Gallery" className="block px-4 py-2 rounded hover:bg-white hover:text-blue-700 font-semibold transition-colors duration-200">Gallery</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
