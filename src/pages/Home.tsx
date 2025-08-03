import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../app/store';
import axios from 'axios';
import CardTheme1 from '../components/CardTheme1';
import DetailsDrawer from '../components/DetailsDrawer';
import Loading from '../components/Loading';
import EmptyProducts from '../components/EmptyProducts';
import CardTheme2 from '../components/CardTheme2';
import CardTheme3 from '../components/CardTheme3';

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

export default function Home() {
    const theme = useSelector((state: RootState) => state.theme.currentTheme);
    const [fakeProducts, setFakeProducts] = useState<Product[]>([]);
    const [productsLoading, setProductsLoading] = useState(true);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setProductsLoading(true);
            const fakeData = await axios.get('https://fakestoreapi.com/products');
            setFakeProducts(fakeData.data);
            setProductsLoading(false);
        };
        fetchProducts();
    }, []);

    const handleCloseDrawer = (): void => {
        setOpenDrawer(false);
    };

    const handleOpenDrawer = (product: Product): void => {
        setSelectedProduct(product);
        setOpenDrawer(true);
    };

    return (
        <div className={`${theme} w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8`}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 sm:mt-4 md:mt-5 mb-2 sm:mb-3 md:mb-4 page_caption">
                Our Products
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-500 mb-4 sm:mb-5 md:mb-6 page_caption">
                Welcome to our product catalog. We offer a wide range of products to suit your needs.
            </p>

            {productsLoading ? (
                <Loading />
            ) : fakeProducts.length === 0 ? (
                <EmptyProducts />
            ) : (
                <>
                    {theme === 'theme1' && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                            {fakeProducts.map((product) => (
                                <CardTheme1
                                    key={product.id}
                                    product={product}
                                    handleOpenDrawer={() => handleOpenDrawer(product)}
                                />
                            ))}
                        </div>
                    )}

                    {theme === 'theme2' && (
                        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                            {fakeProducts.map((product) => (
                                <CardTheme2
                                    key={product.id}
                                    product={product}
                                    handleOpenDrawer={() => handleOpenDrawer(product)}
                                />
                            ))}
                        </div>
                    )}

                    {theme === 'theme3' && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                            {fakeProducts.map((product) => (
                                <CardTheme3
                                    key={product.id}
                                    product={product}
                                    handleOpenDrawer={() => handleOpenDrawer(product)}
                                />
                            ))}
                        </div>
                    )}
                </>
            )}

            {selectedProduct && openDrawer && (
                <DetailsDrawer open={openDrawer} onClose={handleCloseDrawer} product={selectedProduct} />
            )}
        </div>
    );
}
