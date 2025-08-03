import { useSelector } from 'react-redux';
import { type RootState } from '../app/store';
import ContactForm from '../components/ContactForm';
import SuccessModal from '../components/SuccessModal';
import { useState } from 'react';

export default function Contact() {
    const theme = useSelector((state: RootState) => state.theme.currentTheme);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleCloseSuccess = () => {
        setIsModalOpen(false);
    }
    return (
        <div className={`${theme} min-h-screen flex flex-col items-center justify-center px-2 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16`}>
            <div className="w-full max-w-7xl mx-auto">
                <ContactForm setIsModalOpen={setIsModalOpen} />
            </div>
            <SuccessModal isOpen={isModalOpen} onClose={handleCloseSuccess} />
        </div>
    );
}