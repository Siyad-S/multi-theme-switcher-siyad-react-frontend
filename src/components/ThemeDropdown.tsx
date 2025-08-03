import { useDispatch, useSelector } from 'react-redux';
import { type RootState, type AppDispatch } from '../app/store';
import { setTheme } from '../features/theme/themeSlice';
import { type ThemeType } from '../features/theme/themeTypes';

export default function ThemeDropdown() {
    const dispatch = useDispatch<AppDispatch>();
    const theme = useSelector((state: RootState) => state.theme.currentTheme);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setTheme(e.target.value as ThemeType));
    };

    return (
        <select
            value={theme}
            onChange={handleChange}
            className="dropdown border px-3 sm:px-4 py-2 rounded-lg shadow-lg text-sm sm:text-base w-32 sm:w-30 cursor-pointer hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        >
            <option className="dropdown_option dropdown-option" value="theme1">Default</option>
            <option className="dropdown_option dropdown-option" value="theme2">Dark</option>
            <option className="dropdown_option dropdown-option" value="theme3">Warm</option>
        </select>
    );
}