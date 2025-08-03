import ThemeDropdown from "./ThemeDropdown";
interface HamburgerIconProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}
export default function HamburgerIcon({ isMenuOpen, setIsMenuOpen }: HamburgerIconProps) {
    return (
        <div className="flex items-center space-x-2 sm:space-x-3">
            <ThemeDropdown />
            {/* Mobile Menu Hamburger Icon */}
            <button
                className="md:hidden text-white p-1 sm:p-2 hover:bg-gray-700 rounded transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                <div className="w-5 h-4 sm:w-6 sm:h-5 flex flex-col justify-between">
                    <span className={`block h-0.5 sm:h-1 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5 sm:translate-y-2' : ''}`}></span>
                    <span className={`block h-0.5 sm:h-1 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block h-0.5 sm:h-1 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5 sm:-translate-y-2' : ''}`}></span>
                </div>
            </button>
        </div>
    );
}