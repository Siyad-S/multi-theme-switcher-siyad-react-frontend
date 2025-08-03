interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}
export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center z-50 success_modal_wrap">
            <div className="p-4 sm:p-6 md:p-8 rounded-lg shadow-2xl max-w-xs sm:max-w-sm md:max-w-md mx-2 sm:mx-4 success_modal fade-in-out">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Success!</h2>
                <p className="text-center mb-6 text-sm sm:text-base">Your message has been sent successfully.</p>
                <button className="contact_us_btn px-4 py-2 rounded-md w-full text-sm text-white sm:text-base" onClick={(): void => {
                    onClose();
                }}>Close</button>
            </div>
        </div>
    );
}