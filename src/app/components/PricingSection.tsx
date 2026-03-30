import { HiCheckCircle } from "react-icons/hi";

const PricingSection = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-6xl font-black text-primary mb-6">PLANS THAT SCALE</h2>
                    <div className="inline-flex bg-white p-1 rounded-full border border-slate-200 shadow-sm">
                        <button className="px-6 py-2 rounded-full bg-primary text-white font-bold text-sm">MONTHLY</button>
                        <button className="px-6 py-2 rounded-full text-slate-400 font-bold text-sm">YEARLY (Save 30%)</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Free Plan */}
                    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col">
                        <h3 className="text-xl font-bold mb-2">Free</h3>
                        <p className="text-slate-500 text-sm mb-6">Basic automation for beginners.</p>
                        <div className="text-4xl font-black mb-8">$0<span className="text-sm text-slate-400">/mo</span></div>
                        <ul className="space-y-4 mb-10 flex-1">
                            <li className="text-sm flex items-center gap-2 font-medium"><HiCheckCircle className="text-primary" /> 1,000 Contacts</li>
                            <li className="text-sm flex items-center gap-2 font-medium"><HiCheckCircle className="text-primary" /> Instagram & FB</li>
                        </ul>
                        <button className="w-full py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all">START FOR FREE</button>
                    </div>

                    {/* Pro Plan (Highlighted) */}
                    <div className="bg-white p-8 rounded-[2rem] border-4 border-primary shadow-2xl relative flex flex-col scale-105 z-10">
                        <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold">MOST POPULAR</div>
                        <h3 className="text-xl font-bold mb-2">Pro</h3>
                        <p className="text-slate-500 text-sm mb-6">For scaling brands and creators.</p>
                        <div className="text-4xl font-black mb-8">$39<span className="text-sm text-slate-400">/mo</span></div>
                        <ul className="space-y-4 mb-10 flex-1 font-bold">
                            <li className="text-sm flex items-center gap-2"><HiCheckCircle className="text-primary" /> Unlimited Automation</li>
                            <li className="text-sm flex items-center gap-2"><HiCheckCircle className="text-primary" /> Predictive Analytics</li>
                            <li className="text-sm flex items-center gap-2"><HiCheckCircle className="text-primary" /> Custom Integrations</li>
                        </ul>
                        <button className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:shadow-primary/30 transition-all">START TRIAL</button>
                    </div>

                    {/* Advanced */}
                    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col">
                        <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                        <p className="text-slate-500 text-sm mb-6">Full power for large teams.</p>
                        <div className="text-4xl font-black mb-8">Custom</div>
                        <ul className="space-y-4 mb-10 flex-1">
                            <li className="text-sm flex items-center gap-2 font-medium"><HiCheckCircle className="text-primary" /> 24/7 Dedicated Support</li>
                            <li className="text-sm flex items-center gap-2 font-medium"><HiCheckCircle className="text-primary" /> Training & Whiteglove</li>
                        </ul>
                        <button className="w-full py-4 border-2 border-primary text-primary font-bold rounded-xl">CONTACT SALES</button>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default PricingSection;