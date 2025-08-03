interface CardProps {
    product: {
        id: number;
        title: string;
        price: number;
        image: string;
        description: string;
        category: string;
        rating: {
            rate: number;
            count: number;
        },
    };
    handleOpenDrawer: () => void;
}

const CardTheme3 = ({ product, handleOpenDrawer }: CardProps) => {
    const { title, price, image, category, rating } = product;

    const titleTrimmer = (text: string) =>
        text && text.length > 25 ? text.substring(0, 25) + "..." : text;

    return (
        <div
            className="bg-red-50 border border-red-200 rounded-lg shadow hover:shadow-md transition overflow-hidden relative cursor-pointer fade-in-out"
            onClick={handleOpenDrawer}
        >
            <div className="w-full h-56">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="p-3">
                <h3 className="text-sm font-bold text-gray-800">{titleTrimmer(title)}</h3>
                <p className="text-xs text-gray-600 mt-1">Category: {category}</p>
                <p className="text-xs text-gray-600">Rating: {rating.rate} ({rating.count})</p>
                <p className="text-lg font-semibold text-red-700 mt-2">${price}</p>
            </div>
            <button
                className="absolute bottom-3 right-3 bg-red-500 text-white px-3 py-1 rounded shadow hover:bg-red-600 text-sm cursor-not-allowed"
                onClick={(e) => e.stopPropagation()}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default CardTheme3;
