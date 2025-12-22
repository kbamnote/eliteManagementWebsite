import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SmoothCursor from './components/SmoothCursor';
import Layout from './components/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import CareerCounseling from './pages/CareerCounseling';
import Blogs from './pages/Blogs';
import Placements from './pages/Placements';
import NotFound from './pages/NotFound';

export default function App() {
  const location = useLocation();
  
  return (
    <div className="cursor-none">
      <SmoothCursor />
      <Layout>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career-counseling" element={<CareerCounseling />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </div>
  );
}
