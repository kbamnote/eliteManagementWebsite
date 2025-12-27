/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HomeIcon,
  BookOpenIcon,
  UserIcon,
  PhoneIcon,
  BriefcaseIcon,
  NewspaperIcon,
  ChartBarIcon,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
  InstagramIcon,
} from 'lucide-react';
import webPlacement from '../assets/WebPlacement.webp';

const navItems = [
  { name: 'Home', path: '/', icon: HomeIcon },
  { name: 'About', path: '/about', icon: UserIcon },
  { name: 'Courses', path: '/courses', icon: BookOpenIcon },
  { name: 'Career', path: '/career-counseling', icon: BriefcaseIcon },
  { name: 'Placement', path: '/placements', icon: ChartBarIcon },
  { name: 'Blogs', path: '/blogs', icon: NewspaperIcon },
  { name: 'Contact', path: '/contact', icon: PhoneIcon },
];

export default function Footer() {
  return (
    <footer className=" bg-[#E6F3EF]" style={{ minHeight: '300px', backgroundImage: `url(${webPlacement})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          <div className="col-span-1 md:col-span-2">
            <motion.h3
              className="text-2xl font-black pb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{color:'white'}}
            >
              Elite Management
            </motion.h3>
<<<<<<< HEAD
            <p className="text-secondary font-bold" style={{ margin: 0 }}>Test Footer Content</p>
=======
            <p className="text-white" style={{ margin: 0 }}>Providing quality education since 2025</p>
>>>>>>> 24bf2690d7f9860f225356e17d4899ef7b144a3d
            <motion.p
              className="mt-4 text-white max-w-md font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ margin: 0 }}
            >
              Empowering students with quality education and career guidance. Join thousands of successful learners today.
            </motion.p>

            {/* Social Media Links */}
            <motion.div
              className="flex space-x-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {[
                { name: 'twitter', icon: TwitterIcon },
                { name: 'facebook', icon: FacebookIcon },
                { name: 'linkedin', icon: LinkedinIcon },
                { name: 'instagram', icon: InstagramIcon },
              ].map(({ name, icon: Icon }, index) => (
                <motion.a
                  key={name}
                  href="#"
                  className="w-11 h-11 rounded-full bg-[#F2F8F6] backdrop-blur-sm border-2 border-white/30 flex items-center justify-center
                 text-white hover:bg-accent hover:text-white hover:border-accent transition-all duration-300
                 shadow-subtle hover:shadow-hover"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ duration: 0.25 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-1">
              Quick Links
            </h4>
            <div className="w-12 h-1 bg-white rounded-full mb-4"></div>
            <ul className="mt-4 space-y-3" style={{ padding: 0 }}>
              {navItems.slice(0, 4).map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className="text-white hover:text-accent transition-colors duration-300 flex items-center font-medium group"
                  >
                    {/* <span className="w-2 h-2 bg-accent rounded-full mr-2 group-hover:scale-125 transition-transform duration-300">-</span> */}
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-1">
              More
            </h4>
            <div className="w-12 h-1 bg-white rounded-full mb-4"></div>
            <ul className="mt-4 space-y-3" style={{ padding: 0 }}>
              {navItems.slice(4).map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className="text-white hover:text-accent transition-colors duration-300 flex items-center font-medium group"
                  >
                    {/* <span className="w-2 h-2 bg-accent rounded-full mr-2 group-hover:scale-125 transition-transform duration-300"></span> */}
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          className="mt-8 border-t-2 border-white/30 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.p
            className="text-white text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            © {new Date().getFullYear()} Elite Management. All rights reserved.
          </motion.p>
          <motion.div
            className="mt-4 md:mt-0 flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <motion.a
              href="#"
              className="text-white hover:text-accent transition-colors duration-300 font-bold"
              whileHover={{ x: 5 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="text-white hover:text-accent transition-colors duration-300 font-bold"
              whileHover={{ x: 5 }}
            >
              Terms of Service
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}