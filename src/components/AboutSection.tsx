export default function AboutSection() {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center max-w-6xl w-full mx-auto p-4 md:p-8 gap-6 md:gap-8 about_page fade-in-out'>
            <div className='w-full md:w-1/2 lg:w-2/5 flex-shrink-0 hidden md:block'>
                <img
                    src="/src/assets/logo.jpg"
                    alt="Multi-Theme Switcher Logo"
                    className='w-full h-64 md:h-80 object-cover rounded-lg shadow-lg'
                />
            </div>
            <div className='w-full md:w-1/2 lg:w-3/5 flex flex-col justify-center gap-4 text-center md:text-left'>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Multi-Theme Switcher</h2>
                <p className="text-base md:text-lg leading-relaxed">
                    Multi-Theme Switcher is a React application that allows users to switch between different color themes.
                    It provides a simple and intuitive interface for users to customize their experience.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 about_grid">
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">Multiple Themes</h3>
                        <p className="text-sm text-gray-600">Choose from various pre-built themes</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">Easy Switching</h3>
                        <p className="text-sm text-gray-600">One-click theme switching</p>
                    </div>
                </div>
            </div>
        </div>
    )
}