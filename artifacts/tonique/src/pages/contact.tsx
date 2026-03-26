import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "wouter";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl text-white font-display mb-6">Get in Touch</h1>
          <p className="text-white/60 text-lg font-light max-w-2xl mx-auto">
            We are here to assist with reservations, private events, and any inquiries you may have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel p-8 text-center md:text-left flex flex-col items-center md:items-start">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl text-white font-display mb-2">Location</h3>
              <p className="text-white/60 font-light">123 Luxury Avenue<br/>New York, NY 10012</p>
            </div>
            
            <div className="glass-panel p-8 text-center md:text-left flex flex-col items-center md:items-start">
              <Phone className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl text-white font-display mb-2">Phone</h3>
              <p className="text-white/60 font-light">+1 (555) 123-4567<br/>Available after 2PM</p>
            </div>

            <div className="glass-panel p-8 text-center md:text-left flex flex-col items-center md:items-start">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl text-white font-display mb-2">Email</h3>
              <p className="text-white/60 font-light">info@tonique.com<br/>events@tonique.com</p>
            </div>

            <div className="glass-panel p-8 text-center md:text-left flex flex-col items-center md:items-start">
              <Clock className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl text-white font-display mb-2">Hours</h3>
              <p className="text-white/60 font-light">Mon-Wed: 5PM - 1AM<br/>Thu-Sat: 5PM - 3AM<br/>Sun: 4PM - 12AM</p>
            </div>
          </div>

          {/* Map Area */}
          <div className="h-full min-h-[400px] border border-white/10 rounded-sm overflow-hidden relative group">
            <PlaceholderImage label="Interactive Map View" className="w-full h-full" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute bottom-6 left-6 right-6">
              <a 
                href="#" 
                className="block w-full py-4 bg-white text-black font-display text-center tracking-widest uppercase text-sm hover:bg-primary transition-colors duration-300"
              >
                Get Directions
              </a>
            </div>
          </div>

        </div>

        {/* Private Events Banner */}
        <div className="border border-primary/30 bg-primary/5 p-12 text-center rounded-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.1)_0%,transparent_100%)]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl text-white font-display mb-4">Host A Private Event</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8 font-light">
              Elevate your next corporate gathering, birthday, or celebration with Tonique's exclusive VIP lounges and custom catering packages.
            </p>
            <Link 
              href="/reservation" 
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-display tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 box-glow"
            >
              Inquire Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
