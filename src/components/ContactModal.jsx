/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { X, Mail, User, MessageSquare } from "lucide-react";

const ContactModal = ({ open, onClose, onSubmit }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    if (open) setForm({ name: "", email: "", message: "" });
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-scaleIn">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-accent px-6 py-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">
            Get in Touch
          </h3>
          <button
            aria-label="Close contact form"
            onClick={onClose}
            className="text-white/80 hover:text-white transition"
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 text-gray-800">
          <p className="text-sm text-gray-600 mb-6">
            Fill in your details and our team will reach out to you shortly.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit?.(form);
              onClose();
            }}
            className="space-y-4"
          >
            {/* Name */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Full Name"
                className="w-full rounded-xl border border-gray-300 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-300 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 text-gray-400" size={18} />
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Your Message"
                className="w-full rounded-xl border border-gray-300 pl-10 pr-4 py-3 min-h-[110px] focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-accent hover:bg-accent/90 text-white font-bold transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
