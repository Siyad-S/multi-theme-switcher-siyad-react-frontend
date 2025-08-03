import { Link } from "react-router-dom";
import ThemeDropdown from "./ThemeDropdown";

interface SideBarProps {
    isSidebarOpen: boolean;
    selectedPage: string;
    handlePageChange: (page: string) => void;
    setIsSidebarOpen: (isOpen: boolean) => void;
}
export default function SideBar({ isSidebarOpen, selectedPage, handlePageChange, setIsSidebarOpen }: SideBarProps) {

    return (
        <aside className={`fixed left-0 top-0 h-full bg-gray-800 text-white transition-all duration-300 z-40 hidden lg:block md:block ${isSidebarOpen ? 'w-64' : 'w-16'
            }`}>
            <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    {isSidebarOpen && (
                        <div className="flex items-center space-x-2">
                            <img src="/src/assets/logo.jpg" alt="logo" className="w-8 h-8 rounded-full" />
                            <h1 className="font-bold text-sm">Multi-Theme Switcher</h1>
                        </div>
                    )}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-1 hover:bg-gray-700 rounded"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                                isSidebarOpen ? "M11 19l-7-7 7-7m8 14l-7-7 7-7" : "M13 5l7 7-7 7M5 5l7 7-7 7"
                            } />
                        </svg>
                    </button>
                </div>

                <nav className="flex-1 py-4">
                    <Link
                        to="/"
                        className={`flex items-center px-4 py-3 hover:bg-gray-700 transition-colors ${selectedPage === 'home' ? 'bg-gray-700 border-r-2 border-blue-500' : ''
                            }`}
                        onClick={() => handlePageChange('home')}
                    >
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        {isSidebarOpen && <span className="ml-3">Home</span>}
                    </Link>

                    <Link
                        to="/about"
                        className={`flex items-center px-4 py-3 hover:bg-gray-700 transition-colors ${selectedPage === 'about' ? 'bg-gray-700 border-r-2 border-blue-500' : ''
                            }`}
                        onClick={() => handlePageChange('about')}
                    >
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {isSidebarOpen && <span className="ml-3">About</span>}
                    </Link>

                    <Link
                        to="/contact"
                        className={`flex items-center px-4 py-3 hover:bg-gray-700 transition-colors ${selectedPage === 'contact' ? 'bg-gray-700 border-r-2 border-blue-500' : ''
                            }`}
                        onClick={() => handlePageChange('contact')}
                    >
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {isSidebarOpen && <span className="ml-3">Contact</span>}
                    </Link>
                </nav>

                {isSidebarOpen && (
                    <div className="p-4 border-t border-gray-700">
                        <ThemeDropdown />
                    </div>
                )}
            </div>
        </aside>
    )
}