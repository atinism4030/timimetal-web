import React from "react";

const RequestQuote = () => {
  return (
    <div className="bg-white border w-full max-w-2xl rounded-3xl p-6 md:p-8 shadow-sm">
      <div className="text-black text-2xl md:text-3xl font-bold mb-6">
        <h2>Request a Quote</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-700">First Name</label>
          <input type="text" className="border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500 transition-colors" placeholder="John" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-700">Last Name</label>
          <input type="text" className="border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500 transition-colors" placeholder="Doe" />
        </div>
      </div>

      <div className="flex flex-col gap-1 mb-4">
        <label className="text-sm font-semibold text-gray-700">Email</label>
        <input type="email" className="border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
      </div>

      <div className="flex flex-col gap-1 mb-4">
        <label className="text-sm font-semibold text-gray-700">Phone</label>
        <input type="tel" className="border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500 transition-colors" placeholder="+1 (555) 000-0000" />
      </div>

      <div className="flex flex-col gap-1 mb-4">
        <label className="text-sm font-semibold text-gray-700">Project Type</label>
        <select className="border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500 transition-colors bg-white">
          <option>Industrial</option>
          <option>Commercial</option>
          <option>Residential</option>
        </select>
      </div>

      <div className="flex flex-col gap-1 mb-6">
        <label className="text-sm font-semibold text-gray-700">Project Details</label>
        <textarea className="border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500 transition-colors min-h-[120px]" placeholder="Tell us about your project..."></textarea>
      </div>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors">
        Send Quote Request
      </button>
    </div>
  );
};

export default RequestQuote;
