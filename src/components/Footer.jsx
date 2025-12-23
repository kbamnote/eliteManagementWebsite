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
    <footer className="bg-secondary border-t-2 border-subtle mt-12" style={{ minHeight: '300px' }}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <motion.h3
              className="text-2xl font-black text-accent pb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Elite Management
            </motion.h3>
            <p className="text-secondary" style={{ margin: 0 }}>Test Footer Content</p>
            <motion.p
              className="mt-4 text-secondary max-w-md font-medium"
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
                  className="w-11 h-11 rounded-full bg-secondary border-2 border-subtle flex items-center justify-center
                 text-accent hover:bg-accent hover:text-white hover:border-accent transition-all duration-300
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
            <h4 className="text-sm font-black uppercase tracking-wider text-primary mb-1">
              Navigation
            </h4>
            <div className="w-12 h-1 bg-accent rounded-full mb-4"></div>
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
                    className="text-secondary hover:text-accent transition-colors duration-300 flex items-center font-medium group"
                  >
                    {/* <span className="w-2 h-2 bg-accent rounded-full mr-2 group-hover:scale-125 transition-transform duration-300">-</span> */}
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-primary mb-1">
              Resources
            </h4>
            <div className="w-12 h-1 bg-accent rounded-full mb-4"></div>
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
                    className="text-secondary hover:text-accent transition-colors duration-300 flex items-center font-medium group"
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
          className="mt-8 border-t-2 borderTop pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.p
            className="text-secondary text-sm font-medium"
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
              className="text-secondary hover:text-accent transition-colors duration-300 font-bold"
              whileHover={{ x: 5 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="text-secondary hover:text-accent transition-colors duration-300 font-bold"
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