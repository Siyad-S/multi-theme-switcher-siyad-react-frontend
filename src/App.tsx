import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from './app/store';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './themes/theme1.css';
import './themes/theme2.css';
import './themes/theme3.css';

export default function App() {
  const theme = useSelector((state: RootState) => state.theme.currentTheme);

  return (
    <div className={`${theme} min-h-screen`}>
      <BrowserRouter>
        <Header />
        <main
          className={`w-[90%] mx-auto p-4 ${theme === 'theme2' ? 'pt-16 sm:pt-0' : 'pt-16'
            }`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}