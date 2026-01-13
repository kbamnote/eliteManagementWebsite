import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
<footer className="bg-gradient-to-b from-[#0F172A] to-[#020617] text-white pt-20 pb-8">
  <div className="max-w-7xl mx-auto px-4">

    {/* ================= TOP GRID ================= */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">

      {/* BRAND */}
      <div>
        <div className="flex items-center mb-6">
          <div className="bg-gradient-to-br from-primary to-accent rounded-full w-11 h-11 flex items-center justify-center mr-3 shadow-lg">
            <span className="text-white text-xl font-bold">EM</span>
          </div>
          <h3 className="text-xl font-bold tracking-wide text-white">
            Elite Managements
          </h3>
        </div>

        <p className="text-white/70 leading-relaxed mb-6">
          Empowering learners with industry-driven education and career-focused
          skills since 2011.
        </p>

        <div className="flex items-center gap-4">
          {[{icon: Linkedin, url: "https://www.linkedin.com/company/elitemanagement"}, {icon: Instagram, url: "https://www.instagram.com/elitemanagement"}, {icon: Facebook, url: "https://www.facebook.com/elitemanagement"}].map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center
                         hover:bg-primary hover:text-white transition-all duration-300"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* QUICK LINKS */}
      <div>
        <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
        <ul className="space-y-3">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Courses", path: "/courses" },
            { name: "Placements", path: "/placements" },
            { name: "Blogs", path: "/blogs" },
            { name: "Contact Us", path: "/contact" },
          ].map((link, i) => (
            <li key={i}>
              <Link
                to={link.path}
                onClick={handleLinkClick}
                className="text-white/70 hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* COURSES */}
      <div>
        <h4 className="text-lg font-semibold mb-6 text-white">Courses</h4>
        <ul className="space-y-3">
          {[
            { name: "Management", path: "/courses#management" },
            { name: "Leadership", path: "/courses#leadership" },
            { name: "Marketing", path: "/courses#marketing" },
            { name: "Finance", path: "/courses#finance" },
            { name: "HR Management", path: "/courses#hr" },
          ].map((course, i) => (
            <li key={i}>
              <Link
                to={course.path}
                onClick={handleLinkClick}
                className="text-white/70 hover:text-primary transition-colors duration-300"
              >
                {course.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* CONTACT */}
      <div>
        <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
        <div className="space-y-4 text-white/70">
          <div className="flex items-center gap-3">
            <Phone size={18} className="text-primary" />
            <span>+91 97308 93320</span>
          </div>

          <div className="flex items-center gap-3">
            <Mail size={18} className="text-primary" />
            <span>support@elitemanagement.in</span>
          </div>

          <div className="flex items-start gap-3">
            <MapPin size={18} className="text-primary mt-1" />
            <span>Sadar chaoni , Nagpur , Maharashtra , India </span>
          </div>
        </div>
      </div>
    </div>

    {/* ================= BOTTOM BAR ================= */}
    <div className="border-t border-white/10 pt-6 text-center">
      <p className="text-sm text-white/60">
        © {new Date().getFullYear()} Elite Management. All rights reserved.
      </p>
    </div>

  </div>
</footer>

  );
};

export default Footer;
