interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface DetailsDrawerProps {
  open: boolean;
  onClose: () => void;
  product: Product;
}

export default function DetailsDrawer({
  open,
  onClose,
  product,
}: DetailsDrawerProps) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4 details_drawer_wrap">
          <div
            className="bg-white rounded-lg shadow-2xl w-full max-h-[95vh] sm:max-h-[90vh] md:max-h-[85vh] overflow-hidden flex flex-col mx-2 sm:mx-4 relative mt-25 lg:mt-22 scrollbar-hidden details_drawer fade-in-out
            max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
          >
            <div className="flex justify-between items-center p-2 sm:p-3 border-b border-gray-200 flex-shrink-0">
              <h2 className="text-sm sm:text-xl md:text-2xl font-bold">
                Product Details
              </h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-xl sm:text-2xl font-bold leading-none p-1 rounded-full hover:bg-gray-500 transition-colors w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center details_drawer_text"
                aria-label="Close drawer"
              >
                ×
              </button>
            </div>
            <div className="overflow-y-auto scrollbar-hidden flex-1 p-3 sm:p-4">
              <div className="mb-3 sm:mb-4">
                <img
                  src={product?.image}
                  alt={product.title}
                  className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-contain rounded-lg"
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-2 sm:mb-3 details_drawer_text">
                Category: {product.category}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-2 sm:mb-3 details_drawer_text">
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 mb-2 sm:mb-3">
                ${product.price}
              </p>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed details_drawer_text">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
