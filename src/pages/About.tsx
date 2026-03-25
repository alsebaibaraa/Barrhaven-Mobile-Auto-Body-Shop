import { motion } from 'motion/react';
import { ShieldCheck, Award, Users, MapPin, Heart } from 'lucide-react';

export default function About() {
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
            About Barrhaven Mobile
          </motion.h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            A local business built on quality, convenience, and community trust.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl text-brand-dark">Your Local Mobile Repair Specialists</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Based right here in Barrhaven, we started with a simple mission: to provide high-quality auto body repairs without the traditional body shop headache. We realized that for most minor damage, customers were tired of losing their vehicles for days and paying premium shop rates.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Today, Barrhaven Mobile Body Shop is proud to serve the entire Ottawa region. We've invested in the best mobile repair technology and training to ensure that every job we do meets or exceeds shop standards.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <div className="text-4xl font-bold text-brand-red mb-2">10+</div>
                  <div className="text-slate-500 font-medium">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-red mb-2">1000+</div>
                  <div className="text-slate-500 font-medium">Cars Restored</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1530046339160-ce3e5b0c7a2f?q=80&w=1000&auto=format&fit=crop" 
                alt="Our Team" 
                className="rounded-[3rem] shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-brand-red rounded-[3rem] -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-brand-dark mb-4">Our Core Values</h2>
            <p className="text-slate-500 max-w-xl mx-auto">The principles that guide every repair we perform.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl mb-4">Quality First</h3>
              <p className="text-slate-600">We never cut corners. We use premium paints and materials to ensure a long-lasting, invisible repair.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl mb-4">Integrity</h3>
              <p className="text-slate-600">Honest pricing and realistic expectations. If we can't fix it to our standards, we'll tell you upfront.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl mb-4">Community</h3>
              <p className="text-slate-600">We're your neighbors. We take pride in keeping the vehicles of Ottawa looking their absolute best.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Focus */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark rounded-[3rem] p-12 md:p-20 text-white text-center">
            <MapPin className="w-12 h-12 text-brand-red mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl mb-8">Proudly Based in Barrhaven</h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto mb-12">
              Our headquarters is located at 1427 Meadow Drive, Ottawa. While we are a mobile service, we are deeply rooted in the Barrhaven community and committed to providing the best service to our local area.
            </p>
            <div className="flex justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full text-sm font-bold">
                <Heart className="w-4 h-4 text-brand-red" />
                Local Business
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full text-sm font-bold">
                <ShieldCheck className="w-4 h-4 text-brand-red" />
                Fully Insured
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
