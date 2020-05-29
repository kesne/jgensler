import Title from './Title';
import { FaLinkedin, FaBars } from 'react-icons/fa';

export default function Header() {
    return (
        <header className="bg-gray-700 shadow">
            <div className="h-12 container flex items-center mx-auto">
                <Title />
                <div className="hidden sm:flex flex-1 h-full items-center">
                    <nav className="ml-6 space-x-6 text-white font-bold flex-1">
                        <a className="transition duration-150 hover:bg-gray-600 rounded py-2 px-4" href="/about">About</a>
                        <a className="transition duration-150 hover:bg-gray-600 rounded py-2 px-4" href="/blog">Blog</a>
                    </nav>
                    <div className="text-white">
                        <FaLinkedin />
                    </div>
                </div>
                <div className="block sm:hidden flex justify-end text-white flex-1 mr-6">
                    <FaBars />
                </div>
            </div>
        </header>
    );
}
