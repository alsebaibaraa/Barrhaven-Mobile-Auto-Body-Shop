import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send the data here
  };

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
            Get a Free Quote
          </motion.h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Ready to restore your vehicle? Contact us today for a fast, free estimate.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl text-brand-dark mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-brand-dark mb-1">Call or Text</h4>
                      <a href="tel:3439993672" className="text-2xl font-bold text-brand-red hover:underline">
                        (343) 999-3672
                      </a>
                      <p className="text-slate-500 mt-1">Available Mon-Sat, 8am - 6pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-brand-dark mb-1">Our Location</h4>
                      <p className="text-slate-600 leading-relaxed">
                        1427 Meadow Drive,<br />
                        Ottawa, Ontario, Canada
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-brand-dark mb-1">Email Us</h4>
                      <a href="mailto:info@barrhavenmobile.ca" className="text-slate-600 hover:text-brand-red transition-colors">
                        info@barrhavenmobile.ca
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-xl font-bold text-brand-dark mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand-red" />
                  Service Areas
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Barrhaven', 'Nepean', 'Kanata', 'Stittsville', 'Manotick', 'Riverside South', 'Orleans', 'Downtown Ottawa'].map((area) => (
                    <div key={area} className="flex items-center gap-2 text-slate-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand-red" />
                      {area}
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-xs text-slate-400 italic">
                  *We serve all of the Greater Ottawa Area. If you're unsure if we cover your location, just give us a call!
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200 border border-slate-100">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-brand-dark mb-4">Thank You!</h3>
                  <p className="text-slate-600 text-lg mb-8">
                    Your request has been received. One of our technicians will contact you shortly to discuss your repair.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-brand-red font-bold hover:underline"
                  >
                    Send another request
                  </button>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-3xl text-brand-dark mb-8">Request a Quote</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Doe"
                          className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                        <input 
                          required
                          type="tel" 
                          placeholder="(613) 000-0000"
                          className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Service Needed</label>
                      <select className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all appearance-none">
                        <option>Scratch & Paint Repair</option>
                        <option>Bumper Repair</option>
                        <option>Paint Touch-ups</option>
                        <option>Minor Collision Repair</option>
                        <option>Other / Not Sure</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Message / Details</label>
                      <textarea 
                        rows={4}
                        placeholder="Please describe the damage and your vehicle's make/model..."
                        className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-brand-red text-white py-5 rounded-xl font-bold text-lg hover:bg-brand-red/90 transition-all shadow-xl shadow-brand-red/20 flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Submit Quote Request
                    </button>
                    <p className="text-center text-slate-400 text-xs mt-4">
                      By submitting, you agree to be contacted via phone or email regarding your request.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
