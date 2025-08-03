export default function EmptyProducts() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px] p-4 sm:p-6 md:p-8 fade-in-out">
            <div className="text-gray-400 text-5xl sm:text-6xl md:text-7xl mb-3 sm:mb-4">📦</div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 mb-1 sm:mb-2 text-center">
                No Products Found
            </h3>
            <p className="text-gray-500 text-sm sm:text-base text-center max-w-xs sm:max-w-sm md:max-w-md">
                There are no products available at the moment.
            </p>
        </div>
    )
}