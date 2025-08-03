import { Link } from "react-router-dom";
interface DesktopNavBarProps {
    selectedPage: string;
    handlePageChange: (page: string) => void;
}
export default function DesktopNavBar({ selectedPage, handlePageChange }: DesktopNavBarProps) {
    return (
        <nav className="hidden md:flex space-x-4 lg:space-x-6">
            <Link to="/" className={`text-sm lg:text-base ${selectedPage === 'home' ? 'underline' : ''}`} onClick={() => handlePageChange('home')}>Home</Link>
            <Link to="/about" className={`text-sm lg:text-base ${selectedPage === 'about' ? 'underline' : ''}`} onClick={() => handlePageChange('about')}>About</Link>
            <Link to="/contact" className={`text-sm lg:text-base ${selectedPage === 'contact' ? 'underline' : ''}`} onClick={() => handlePageChange('contact')}>Contact</Link>
        </nav>
    );
}