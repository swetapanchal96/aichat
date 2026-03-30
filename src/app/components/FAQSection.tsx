const FAQSection = () => {
    return (
        <section className="bg-black py-24 px-6 text-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl font-black uppercase mb-12 text-center">Frequently Asked Questions</h2>
                <div className="divide-y divide-white/10">
                    {['What is Salexo?', 'Do I need a credit card?', 'How many channels can I connect?'].map((q, i) => (
                        <div key={i} className="py-6 group cursor-pointer flex justify-between items-center">
                            <span className="text-xl font-bold group-hover:text-accent transition-colors">{q}</span>
                            <span className="text-2xl text-slate-500">+</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;