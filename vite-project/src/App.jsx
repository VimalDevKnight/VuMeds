import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar"; 
import Home from "./pages/Home"; 
import Shop from "./pages/Shop"; 
import ListingPage from "./pages/ListingPage"; // Import the ListingPage
import UploadPrescription from "./pages/UploadPrescription"; 
import ContactUs from "./pages/Contact"; 
import AboutUs from "./pages/About"; 
import WhatsAppCTA from './components/WhatsAppCTA';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <NavigationBar /> {/* Navbar on all pages */}
      <WhatsAppCTA /> {/* WhatsApp CTA on all pages */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/products" element={<ListingPage />} /> {/* Added ListingPage route */}
        <Route path="/upload-prescription" element={<UploadPrescription />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer /> {/* Footer on all pages */}
    </Router>
  );
};

export default App;
