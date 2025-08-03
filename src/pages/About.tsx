import { useSelector } from 'react-redux';
import { type RootState } from '../app/store';
import AboutSection from '../components/AboutSection';

export default function About() {
    const theme = useSelector((state: RootState) => state.theme.currentTheme);
    return (
        <div className={`${theme} flex items-center justify-center p-4 sm:p-6 md:p-8 min-h-screen w-full`}>
            <div className="w-full max-w-7xl mx-auto">
                <AboutSection />
            </div>
        </div>
    )
}