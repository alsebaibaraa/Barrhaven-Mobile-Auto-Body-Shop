import { motion } from 'motion/react';
import { AlertTriangle, ShieldAlert, Hammer, Paintbrush, Zap, CheckCircle2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const damageTypes = [
  {
    title: "Key Scratches & Vandalism",
    desc: "Deep scratches caused by keys or other sharp objects. We use precision paint matching to fill and blend the scratch, making it invisible.",
    icon: <AlertTriangle className="w-6 h-6" />,
    details: ["Deep paint gouges", "Surface clear coat scratches", "Vandalism damage"]
  },
  {
    title: "Bumper Scuffs & Dents",
    desc: "Corner scuffs from parking mishaps or low-speed impacts. We can reshape plastic bumpers and refinish them to factory standards.",
    icon: <Hammer className="w-6 h-6" />,
    details: ["Plastic bumper reshaping", "Corner scuff removal", "Textured plastic restoration"]
  },
  {
    title: "Stone Chips & Road Debris",
    desc: "Small chips on the hood and front bumper caused by road salt and stones. Essential for preventing rust on metal panels.",
    icon: <Zap className="w-6 h-6" />,
    details: ["Hood stone chips", "Mirror cap nicks", "A-pillar touch-ups"]
  },
  {
    title: "Door Dings & Minor Dents",
    desc: "Small dents from shopping carts or other car doors. We assess if the paint is intact and provide the best mobile repair solution.",
    icon: <ShieldAlert className="w-6 h-6" />,
    details: ["Parking lot dings", "Minor panel creases", "Soft body line dents"]
  },
  {
    title: "Plastic Crack Repair",
    desc: "Cracked bumper covers or plastic trim. We use plastic welding techniques to restore structural integrity before refinishing.",
    icon: <CheckCircle2 className="w-6 h-6" />,
    details: ["Bumper splits", "Lower valance cracks", "Trim piece restoration"]
  },
  {
    title: "Paint Oxidation & Fading",
    desc: "Localized paint fading or clear coat failure. We can often restore the shine without a full panel respray.",
    icon: <Paintbrush className="w-6 h-6" />,
    details: ["Clear coat peeling", "Sun-faded panels", "Bird dropping stains"]
  }
];

export default function DamageRepairs() {
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
            Damage We Repair
          </motion.h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            From minor scratches to bumper cracks, we handle a wide range of cosmetic vehicle damage at your location.
          </p>
        </div>
      </section>

      {/* Damage Types Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {damageTypes.map((damage, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-red text-white flex items-center justify-center mb-6 shadow-lg shadow-brand-red/20">
                  {damage.icon}
                </div>
                <h3 className="text-2xl text-brand-dark mb-4">{damage.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {damage.desc}
                </p>
                <ul className="space-y-2">
                  {damage.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">Our Mobile Repair Process</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">How we deliver shop-quality results in your driveway.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", desc: "We inspect the damage and confirm the best repair method." },
              { step: "02", title: "Preparation", desc: "The area is cleaned, sanded, and masked to protect the rest of the car." },
              { step: "03", title: "Repair", desc: "We fill, prime, and apply paint using professional HVLP systems." },
              { step: "04", title: "Finishing", desc: "The repair is clear-coated, polished, and blended for a perfect finish." }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-bold text-white/5 absolute -top-4 -left-4">{item.step}</div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4 text-brand-red">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-red rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl mb-8">Not sure if it can be fixed?</h2>
              <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
                Send us a clear photo of the damage via text or our contact form, and we'll let you know immediately.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a href="tel:3439993672" className="bg-brand-dark text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-black transition-all">
                  <Phone className="w-6 h-6 inline mr-2" />
                  (343) 999-3672
                </a>
                <Link to="/contact" className="bg-white text-brand-red px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-100 transition-all">
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
