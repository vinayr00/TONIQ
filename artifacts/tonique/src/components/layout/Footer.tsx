import { Link } from "wouter";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-display text-3xl font-bold tracking-[0.2em] text-white mb-6">
              TONIQUE
            </span>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-xs">
              Where luxury meets nightlife. Experience craft cocktails and unforgettable moments in the heart of the city.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-display text-lg tracking-widest text-white mb-6 uppercase">Explore</h4>
            <nav className="flex flex-col gap-4 text-center md:text-left">
              <Link href="/menu" className="text-white/60 hover:text-primary transition-colors">Our Menu</Link>
              <Link href="/reservation" className="text-white/60 hover:text-primary transition-colors">Reservations</Link>
              <Link href="/gallery" className="text-white/60 hover:text-primary transition-colors">Gallery</Link>
              <Link href="/about" className="text-white/60 hover:text-primary transition-colors">Our Story</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-display text-lg tracking-widest text-white mb-6 uppercase">Contact</h4>
            <div className="flex flex-col gap-4 text-center md:text-left">
              <p className="text-white/60 flex items-center justify-center md:justify-start gap-3">
                <MapPin size={18} className="text-primary" />
                123 Luxury Ave, NY 10012
              </p>
              <p className="text-white/60 flex items-center justify-center md:justify-start gap-3">
                <Phone size={18} className="text-primary" />
                +1 (555) 123-4567
              </p>
              <p className="text-white/60 flex items-center justify-center md:justify-start gap-3">
                <Mail size={18} className="text-primary" />
                reservations@tonique.com
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-display text-lg tracking-widest text-white mb-6 uppercase">Hours</h4>
            <ul className="text-white/60 space-y-2">
              <li className="flex justify-between w-full max-w-[200px]">
                <span>Mon - Wed</span>
                <span className="text-white">5PM - 1AM</span>
              </li>
              <li className="flex justify-between w-full max-w-[200px]">
                <span>Thu - Sat</span>
                <span className="text-primary">5PM - 3AM</span>
              </li>
              <li className="flex justify-between w-full max-w-[200px]">
                <span>Sunday</span>
                <span className="text-white">4PM - 12AM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Tonique Restaurant & Bar. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
