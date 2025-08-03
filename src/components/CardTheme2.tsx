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

const CardTheme2 = ({ product, handleOpenDrawer }: CardProps) => {
    const { title, price, image, description, category, rating } = product;

    const titleTrimmer = (text: string) =>
        text && text.length > 40 ? text.substring(0, 40) + "..." : text;

    const descriptionTrimmer = (text: string) =>
        text && text.length > 80 ? text.substring(0, 80) + "..." : text;

    return (
        <div onClick={handleOpenDrawer}
            className="flex flex-col sm:flex-row items-center sm:items-start bg-gray-800 text-white p-3 sm:p-4 rounded-md shadow-md hover:shadow-lg transition cursor-pointer fade-in-out gap-3"
        >
            <div className="w-full sm:w-28 h-40 sm:h-28 flex-shrink-0">
                <img src={image} alt={title} className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="flex-1 text-center sm:text-left">
                <h3 className="text-base font-semibold">{titleTrimmer(title)}</h3>
                <p className="text-xs sm:text-sm mt-1">{descriptionTrimmer(description)}</p>
                <p className="text-xs mt-2">Category: {category}</p>
                <p className="text-xs">Rating: {rating.rate} ({rating.count} reviews)</p>
            </div>
            <div className="flex flex-col items-center sm:items-end mt-2 sm:mt-0">
                <p className="font-bold text-sm sm:text-lg mb-1">${price}</p>
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs sm:text-sm hover:bg-blue-700 cursor-not-allowed">
                    Add to Cart
                </button>
            </div>
        </div>

    );
};

export default CardTheme2;
