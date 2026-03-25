import { motion } from 'motion/react';
import { Phone, ArrowRight, ShieldCheck, Clock, Zap, Star, MapPin, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Scratch & Paint Repair",
    desc: "Professional color matching and seamless scratch removal at your location.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Bumper Repair",
    desc: "Fixed scuffs, cracks, and dents on your plastic bumpers in just a few hours.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Paint Touch-ups",
    desc: "Precision touch-ups for stone chips and minor imperfections to prevent rust.",
    icon: <CheckCircle2 className="w-6 h-6" />,
  },
];

const testimonials = [
  {
    name: "Michael R.",
    location: "Barrhaven",
    text: "Saved me so much time! They came to my driveway while I was working and fixed a nasty bumper scuff. Looks brand new.",
    rating: 5
  },
  {
    name: "Sarah L.",
    location: "Nepean",
    text: "Affordable and professional. The paint match on my door scratch is perfect. Highly recommend their mobile service.",
    rating: 5
  },
  {
    name: "David W.",
    location: "Ottawa",
    text: "Better than any shop I've been to. No need to leave my car for days. Done in 3 hours. Great communication too.",
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-sm font-bold mb-6 border border-brand-red/20">
                Serving Barrhaven, Nepean & Ottawa
              </span>
              <h1 className="text-5xl md:text-7xl text-white mb-6 leading-[1.1]">
                Mobile Auto Body <br />
                <span className="text-brand-red">Repair in Ottawa</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
                Fast, affordable repairs without the hassle of a body shop. We come to you for professional results at your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:3439993672" 
                  className="flex items-center justify-center gap-3 bg-brand-red text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-red/90 transition-all shadow-xl shadow-brand-red/20"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <Link 
                  to="/contact" 
                  className="flex items-center justify-center gap-3 bg-white text-brand-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all"
                >
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl text-brand-dark mb-6">The Convenience You Deserve</h2>
            <p className="text-slate-600 text-lg">
              Forget about leaving your car at a shop for days. We've revolutionized auto body repair by bringing the expertise directly to your driveway.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-2xl hover:shadow-slate-200 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-red text-white flex items-center justify-center mb-6 shadow-lg shadow-brand-red/20">
                  {service.icon}
                </div>
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link to="/services" className="text-brand-red font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Damage Types Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl text-brand-dark mb-6">Expert Damage Repair</h2>
              <p className="text-slate-600 text-lg">
                We specialize in a wide range of cosmetic vehicle repairs. From minor scratches to bumper cracks, we bring the solution to you.
              </p>
            </div>
            <Link to="/damage-repairs" className="bg-brand-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-red transition-all">
              View All Repair Types
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Key Scratches", "Bumper Scuffs", "Stone Chips", "Door Dings", 
              "Plastic Cracks", "Paint Fading", "Minor Dents", "Vandalism Repair"
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-red" />
                <span className="font-bold text-brand-dark">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-brand-dark mb-6">What Our Clients Say</h2>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-brand-red text-brand-red" />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 italic relative">
                <div className="absolute -top-4 -left-4 text-6xl text-brand-red/10 font-serif">"</div>
                <p className="text-slate-700 mb-6 relative z-10">{t.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-brand-dark">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.location}, ON</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-red relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl text-white mb-8">Ready to get your car fixed?</h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Get a professional estimate in minutes. Just send us a photo of the damage and we'll handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="tel:3439993672" 
              className="bg-white text-brand-red px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-100 transition-all shadow-2xl"
            >
              Call (343) 999-3672
            </a>
            <Link 
              to="/contact" 
              className="bg-brand-dark text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-black transition-all shadow-2xl"
            >
              Request a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
