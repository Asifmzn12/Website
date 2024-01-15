import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { inject } from '@vercel/analytics';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { UserProvider } from './config/Usercontext';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Contactus from './Component/Contactus';
import Signup from './Component/Signup';
import LoginForm from './Component/Login';
import Home from './Component/Home';
import Aboutus from './Component/Aboutus';
import ScrollToTop from './Component/ScrollToTop';
import Portfolio from './Component/Portfolio'
import AOS from 'aos';
// ..
AOS.init();
function App() {
  inject();

  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
