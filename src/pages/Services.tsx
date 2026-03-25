import { motion } from 'motion/react';
import { Zap, ShieldCheck, CheckCircle2, Car, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Scratch & Paint Repair",
    desc: "We specialize in removing surface scratches, key marks, and deep paint gouges. Using advanced color-matching technology, we ensure a seamless finish that matches your vehicle's original factory paint perfectly.",
    features: ["Color Matching Technology", "Seamless Blending", "Rust Prevention", "UV-Resistant Clear Coat"],
    icon: <Zap className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1590674852885-8c645e0960f4?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Bumper Repair",
    desc: "Don't replace your bumper when it can be repaired for a fraction of the cost. We fix scuffs, cracks, and dents on plastic bumpers. Our mobile setup allows us to heat-reshape and refinish bumpers right in your driveway.",
    features: ["Plastic Reshaping", "Texture Matching", "Crack Repair", "Cost-Effective Alternative"],
    icon: <ShieldCheck className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Paint Touch-ups",
    desc: "Stone chips and minor nicks might seem small, but they can lead to rust and costly repairs later. Our precision touch-up service seals the damage and restores the aesthetic appeal of your vehicle.",
    features: ["Stone Chip Repair", "Edge Protection", "Rust Inhibition", "Quick Turnaround"],
    icon: <CheckCircle2 className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Minor Collision Repair",
    desc: "For those small fender benders and parking lot mishaps, we offer a convenient mobile solution. We handle minor panel damage and refinishing without the need for a traditional body shop stay.",
    features: ["Panel Realignment", "Dent Removal", "Expert Refinishing", "Mobile Convenience"],
    icon: <Car className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1599256621730-535171e28e50?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-brand-dark py-20 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl text-white mb-6"
          >
            Our Professional Services
          </motion.h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Shop-quality results delivered to your doorstep. We specialize in fast, high-quality mobile repairs.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 space-y-8">
                  <div className="w-16 h-16 rounded-2xl bg-brand-red text-white flex items-center justify-center shadow-xl shadow-brand-red/20">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl text-brand-dark">{service.title}</h2>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-slate-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-brand-red" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center gap-2 bg-brand-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-red transition-all"
                    >
                      Get a Quote for this Service <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-brand-red/5 rounded-[2rem] -rotate-2" />
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="relative z-10 w-full h-[400px] object-cover rounded-[2rem] shadow-2xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/20 rounded-full blur-3xl" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl mb-8">Why Choose Mobile Repair?</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-brand-red font-bold">01</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Save Time</h4>
                      <p className="text-slate-400">No need to drop off your car and find a ride home. We work while you're at home or the office.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-brand-red font-bold">02</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Save Money</h4>
                      <p className="text-slate-400">Lower overhead costs mean we can offer professional results at a fraction of traditional body shop prices.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-brand-red font-bold">03</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Expert Quality</h4>
                      <p className="text-slate-400">Our technicians are specialists in localized repair, ensuring a higher level of detail on every job.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-left bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-bold mb-6">Ready to start?</h3>
                <p className="text-slate-300 mb-8">Call us today for a free, no-obligation estimate. Most repairs can be scheduled within 48 hours.</p>
                <a href="tel:3439993672" className="inline-flex items-center gap-3 bg-brand-red text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-brand-red/90 transition-all">
                  <Phone className="w-6 h-6" />
                  (343) 999-3672
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
