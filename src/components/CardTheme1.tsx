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

const Card = (props: CardProps) => {
    const { product, handleOpenDrawer } = props;
    const { title, price, image, description, category, rating } = product;

    const titleTrimmer = (title: string) => {
        if (title && title.length > 20) {
            return title.substring(0, 20) + '...';
        }
        return title || '';
    }

    const descriptionTrimmer = (description: string) => {
        if (description && description.length > 100) {
            return description.substring(0, 100) + '...';
        }
        return description || '';
    }

    return (
        <div className="p-3 sm:p-4 h-auto min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[500px] card cursor-pointer fade-in-out border border-blue-200 rounded-md" onClick={handleOpenDrawer}>
            <div className="flex justify-between items-center mb-2">
                <div className="">
                    <h3 className="text-base sm:text-lg font-bold p-1 sm:p-2 leading-tight text-gray-800">
                        {titleTrimmer(title)}
                    </h3>
                </div>
            </div>
            <div className="w-full h-32 sm:h-40 md:h-48 lg:h-52 p-1 sm:p-2 mb-2">
                <img src={image} alt={title} className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="min-h-[50px] sm:min-h-[70px] p-1 sm:p-2 mb-2">
                <p className="text-xs sm:text-sm leading-relaxed line-clamp-3 text-gray-800">{descriptionTrimmer(description)}</p>
            </div>
            <div className="p-1 sm:p-2 pt-0 mb-2">
                <p className="text-xs sm:text-sm mb-1 text-gray-800">Category: {category}</p>
                <p className="text-xs sm:text-sm text-gray-800">Rating: {rating.rate} ({rating.count} reviews)</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 p-1 sm:p-2">
                <p className="font-bold text-sm sm:text-base text-blue-700">${price}</p>
                <button className="bg-blue-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm hover:bg-blue-600 transition-colors w-full sm:w-auto cursor-not-allowed" onClick={(e) => { e.stopPropagation(); }}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Card