import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { useEffect, useState } from 'react';
import SideBar from './SideBar';
import DesktopNavBar from './DesktopNavBar';
import HamburgerIcon from './HamburgerIcon';
import MobileMenu from './MobileMenu';

export default function Header() {
    const [selectedPage, setSelectedPage] = useState(localStorage.getItem('selectedPage') || 'home');
    const theme = useSelector((state: RootState) => state.theme.currentTheme);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const path = window.location.pathname
        if (path === '/') {
            setSelectedPage('home');
        } else if (path === '/about') {
            setSelectedPage('about');
        } else if (path === '/contact') {
            setSelectedPage('contact');
        }
    }, []);

    const handlePageChange = (page: string) => {
        localStorage.setItem('selectedPage', page);
        setSelectedPage(page);
        setIsMenuOpen(false);
    };

    // Sidebar navigation for theme2
    if (theme === 'theme2') {
        return (
            <>

                <SideBar isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                    selectedPage={selectedPage}
                    handlePageChange={handlePageChange} />

                <header className="md:hidden fixed top-0 left-0 right-0 w-full flex justify-between items-center px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 shadow z-50">
                    <div className="flex items-center space-x-2">
                        <img src="/src/assets/logo.jpg" alt="logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
                        <h1 className="font-bold text-sm sm:text-base">Multi-Theme Switcher</h1>
                    </div>

                    <HamburgerIcon isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

                    {isMenuOpen && (
                        <MobileMenu selectedPage={selectedPage} handlePageChange={handlePageChange} />
                    )}
                </header>

            </>
        );
    }

    return (
        <header data-theme={theme} className="fixed top-0 left-0 right-0 w-full flex justify-between items-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-gray-800 shadow z-50">
            <div className="flex items-center space-x-2 sm:space-x-3">
                <img src="/src/assets/logo.jpg" alt="logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
                <h1 className="font-bold text-sm sm:text-base md:text-lg hidden sm:block">Multi-Theme Switcher</h1>
            </div>

            <DesktopNavBar selectedPage={selectedPage} handlePageChange={handlePageChange} />
            <HamburgerIcon isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && (
                <MobileMenu selectedPage={selectedPage} handlePageChange={handlePageChange} />
            )}
        </header>
    );
}