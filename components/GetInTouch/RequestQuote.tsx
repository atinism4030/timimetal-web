import React from "react";

const RequestQuote = () => {
  return (
    <div className="w-full bg-white p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 relative group overflow-hidden">
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-[#050505] opacity-5 pointer-events-none transition-all duration-700 group-hover:opacity-20" />
      
      <div className="mb-12">
        <p className="text-xs tracking-[0.2em] font-semibold text-gray-400 uppercase mb-3">Project Inquiry</p>
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">Request a Quote</h2>
      </div>

      <form className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2 relative">
            <label className="text-xs font-semibold tracking-[0.15em] text-gray-400 uppercase">First Name</label>
            <input type="text" className="w-full border-b border-gray-200 bg-transparent py-2 outline-none focus:border-black transition-colors rounded-none placeholder:text-gray-300 font-light text-gray-900" placeholder="John" />
          </div>
          <div className="flex flex-col gap-2 relative">
            <label className="text-xs font-semibold tracking-[0.15em] text-gray-400 uppercase">Last Name</label>
            <input type="text" className="w-full border-b border-gray-200 bg-transparent py-2 outline-none focus:border-black transition-colors rounded-none placeholder:text-gray-300 font-light text-gray-900" placeholder="Doe" />
          </div>
        </div>

        <div className="flex flex-col gap-2 relative">
          <label className="text-xs font-semibold tracking-[0.15em] text-gray-400 uppercase">Email Address</label>
          <input type="email" className="w-full border-b border-gray-200 bg-transparent py-2 outline-none focus:border-black transition-colors rounded-none placeholder:text-gray-300 font-light text-gray-900" placeholder="john@example.com" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2 relative">
            <label className="text-xs font-semibold tracking-[0.15em] text-gray-400 uppercase">Phone</label>
            <input type="tel" className="w-full border-b border-gray-200 bg-transparent py-2 outline-none focus:border-black transition-colors rounded-none placeholder:text-gray-300 font-light text-gray-900" placeholder="+389 70 000 000" />
          </div>

          <div className="flex flex-col gap-2 relative">
            <label className="text-xs font-semibold tracking-[0.15em] text-gray-400 uppercase">Project Type</label>
            <select className="w-full border-b border-gray-200 bg-transparent py-2 outline-none focus:border-black transition-colors rounded-none text-gray-900 font-light cursor-pointer appearance-none">
              <option>Industrial</option>
              <option>Commercial</option>
              <option>Residential</option>
            </select>
            {/* Custom dropdown arrow */}
            <div className="absolute right-0 bottom-4 pointer-events-none text-gray-400 text-[10px]">▼</div>
          </div>
        </div>

        <div className="flex flex-col gap-2 relative">
          <label className="text-xs font-semibold tracking-[0.15em] text-gray-400 uppercase">Project Details</label>
          <textarea className="w-full border-b border-gray-200 bg-transparent py-2 outline-none focus:border-black transition-colors rounded-none placeholder:text-gray-300 font-light min-h-[100px] resize-y text-gray-900" placeholder="Tell us about your project scale and requirements..."></textarea>
        </div>

        <button type="button" className="w-full bg-[#050505] hover:bg-black text-white px-8 py-5 text-sm uppercase tracking-widest font-semibold transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-4 group mt-8 rounded-none">
           Submit Inquiry
           <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
        </button>
      </form>
    </div>
  );
};

export default RequestQuote;
