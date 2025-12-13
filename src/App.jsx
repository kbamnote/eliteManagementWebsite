import React from 'react';
import { Clock, Mail, Phone, Sparkles, Building2 } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-zinc-800 text-white px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Logo / Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur shadow-lg">
            <Building2 className="w-10 h-10 text-red-400" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Elite <span className="text-red-400">Management</span>
        </h1>

        <p className="text-lg text-zinc-300 mb-8">
          We’re building something powerful to manage talent, jobs, and growth — all in one place.
        </p>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-400/10 text-red-400 mb-10">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium">Coming Soon</span>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <Sparkles className="w-6 h-6 text-red-400 mb-3 mx-auto" />
            <h3 className="font-semibold mb-2">Smart Management</h3>
            <p className="text-sm text-zinc-400">Streamline operations with modern tools.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <Building2 className="w-6 h-6 text-red-400 mb-3 mx-auto" />
            <h3 className="font-semibold mb-2">Enterprise Ready</h3>
            <p className="text-sm text-zinc-400">Built for scalability and performance.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <Mail className="w-6 h-6 text-red-400 mb-3 mx-auto" />
            <h3 className="font-semibold mb-2">Stay Connected</h3>
            <p className="text-sm text-zinc-400">Get updates as soon as we launch.</p>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-zinc-300">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-red-400" />
            <span>contact@elitemanagement.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-red-400" />
            <span>+91 90000 00000</span>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-10 text-xs text-zinc-500">© {new Date().getFullYear()} Elite Management. All rights reserved.</p>
      </div>
    </div>
  );
}
