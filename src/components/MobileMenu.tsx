import { Link } from "react-router-dom";
interface MobileMenuProps {
    selectedPage: string;
    handlePageChange: (page: string) => void;
}
export default function MobileMenu(props: MobileMenuProps) {
    const { selectedPage, handlePageChange } = props;
    return (
        <nav className="hamburger_menu absolute top-full left-0 right-0 md:hidden border-t">
            <div className="flex flex-col py-2">
                <Link to="/"
                    className={`px-4 py-3 transition-colors ${selectedPage === 'home' ? 'selected' : ''}`}
                    onClick={() => handlePageChange('home')}
                >
                    Home
                </Link>
                <Link to="/about"
                    className={`px-4 py-3 transition-colors ${selectedPage === 'about' ? 'selected' : ''}`}
                    onClick={() => handlePageChange('about')}
                >
                    About
                </Link>
                <Link to="/contact"
                    className={`px-4 py-3 transition-colors ${selectedPage === 'contact' ? 'selected' : ''}`}
                    onClick={() => handlePageChange('contact')}
                >
                    Contact
                </Link>
            </div>
        </nav>
    )
}