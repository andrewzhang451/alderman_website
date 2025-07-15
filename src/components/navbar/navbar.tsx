function Navbar() {
    return (
        <nav className="flex justify-evenly items-center gap-4">
            <div>
                <a href="#">Home</a>
            </div>
            <div>
                <a href="#">Service</a>
            </div>
            <div>
                <ul className="flex gap-4">
                    <li className="relative group">
                        <a href="#" className="hover:underline">Our Mission</a>
                            <ul className="absolute hidden group-hover:block bg-white shadow-md p-2 top-full">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">endorsement</a>
                                </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="flex gap-4">
                    <li className="relative group">
                        <a href="#" className="hover:underline">About</a>
                        <ul className="absolute hidden group-hover:block bg-white shadow-md p-2 top-full">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Nicole Lee</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">staff</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Our Accomplishment</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="flex gap-4">
                    <li className="relative group">
                        <a href="#" className="hover:underline">Connect</a>
                        <ul className="absolute hidden group-hover:block bg-white shadow-md p-2 top-full">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Email Nicole</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Resources</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <a href="#">Ward Map</a>
            </div>
            <div>
                <a href="#">Gallery</a>
            </div>
        </nav>
    );
}

export default Navbar;
