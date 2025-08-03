import { Link } from "react-router-dom";
interface MobileMenuProps {
    selectedPage: string;
    handlePageChange: (page: string) => void;
}
export default function MobileMenu(props: MobileMenuProps) {
    const { selectedPage, handlePageChange } = props;
    return (
        <nav className="absolute top-full left-0 right-0 bg-gray-800 md:hidden border-t border-gray-700">
            <div className="flex flex-col py-2">
                <Link to="/"
                    className={`px-4 py-3 hover:bg-gray-700 transition-colors ${selectedPage === 'home' ? 'bg-gray-700' : ''}`}
                    onClick={() => handlePageChange('home')}
                >
                    Home
                </Link>
                <Link to="/about"
                    className={`px-4 py-3 hover:bg-gray-700 transition-colors ${selectedPage === 'about' ? 'bg-gray-700' : ''}`}
                    onClick={() => handlePageChange('about')}
                >
                    About
                </Link>
                <Link to="/contact"
                    className={`px-4 py-3 hover:bg-gray-700 transition-colors ${selectedPage === 'contact' ? 'bg-gray-700' : ''}`}
                    onClick={() => handlePageChange('contact')}
                >
                    Contact
                </Link>
            </div>
        </nav>
    )
}