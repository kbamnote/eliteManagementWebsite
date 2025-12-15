import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import CareerCounseling from './pages/CareerCounseling';
import Blogs from './pages/Blogs';
import Placements from './pages/Placements';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/career-counseling" element={<CareerCounseling />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/placements" element={<Placements />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
