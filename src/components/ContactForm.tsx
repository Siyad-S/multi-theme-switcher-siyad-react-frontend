import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from '../assets/logo.jpg'

const contactSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name must be less than 50 characters')
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    message: Yup.string()
        .min(10, 'Message must be at least 10 characters')
        .max(500, 'Message must be less than 500 characters')
        .required('Message is required'),
});

interface ContactFormProps {
    setIsModalOpen: (isOpen: boolean) => void;
}

export default function ContactForm({ setIsModalOpen }: ContactFormProps) {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: contactSchema,
        onSubmit: () => {
            formik.resetForm();
            setIsModalOpen(true);
        },
    });

    return (
        <div className='flex flex-col md:flex-row items-center justify-center max-w-6xl w-full mx-auto p-4 md:p-8 gap-6 md:gap-8 about_page fade-in-out'>
            <div className='w-full md:w-1/2 lg:w-2/5 flex-shrink-0 relative hidden md:block'>
                <img
                    src={logo}
                    alt="Multi-Theme Switcher Logo"
                    className='w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg'
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="contact_image_text text-3xl md:text-4xl font-bold shadow-lg bg-opacity-50 px-4 py-2 rounded-lg">
                        Multi-Theme Switcher
                    </h2>
                </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-3/5 flex flex-col justify-center'>
                <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-6 page_caption">
                    Contact Us
                </h2>
                <form onSubmit={formik.handleSubmit} className="rounded-lg w-full px-4 sm:px-6 md:px-8 py-4 sm:py-6 pb-6 sm:pb-8 mb-4">
                    <div className="mb-3 sm:mb-4">
                        <label htmlFor="name" className="block text-xs sm:text-sm font-bold mb-1 sm:mb-2">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-sm sm:text-base leading-tight focus:outline-none focus:shadow-outline ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'
                                }`}
                            placeholder="Your name"
                        />
                        {formik.touched.name && formik.errors.name && (
                            <p className="text-red-500 text-xs italic mt-1">{formik.errors.name}</p>
                        )}
                    </div>

                    <div className="mb-3 sm:mb-4">
                        <label htmlFor="email" className="block text-xs sm:text-sm font-bold mb-1 sm:mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-sm sm:text-base leading-tight focus:outline-none focus:shadow-outline ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
                                }`}
                            placeholder="your.email@example.com"
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-red-500 text-xs italic mt-1">{formik.errors.email}</p>
                        )}
                    </div>

                    <div className="mb-4 sm:mb-6">
                        <label htmlFor="message" className="block text-xs sm:text-sm font-bold mb-1 sm:mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={3}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message}
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-sm sm:text-base leading-tight focus:outline-none focus:shadow-outline ${formik.touched.message && formik.errors.message ? 'border-red-500' : 'border-gray-300'
                                }`}
                            placeholder="Your message here..."
                        />
                        {formik.touched.message && formik.errors.message && (
                            <p className="text-red-500 text-xs italic mt-1">{formik.errors.message}</p>
                        )}
                    </div>

                    <div className="flex items-center justify-end w-[100%]">
                        <button
                            type="submit"
                            disabled={formik.isSubmitting}
                            className="text-white font-bold py-2 px-4 sm:px-6 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 text-sm sm:text-base w-full sm:w-auto transition-colors contact_us_btn"
                        >
                            {formik.isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}