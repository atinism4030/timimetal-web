import React from "react";

const RequestQuote = () => {
  return (
    <div className="bg-white border w-170 rounded-3xl">
      <div className="text-black text-3xl font-bold p-5 px-7">
        <h2>Request a Quote</h2>
      </div>
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-1">
          <label>First Name</label>
          <input type="text" className="border" />
        </div>
        <div className="grid grid-cols-1">
          <label>Last Name</label>
          <input type="text" className="border" />
        </div>
      </div>
      <div className="grid grid-cols-1">
        <label>Email</label>
        <input type="text" className="border" />
      </div>
      <div className="grid grid-cols-1">
        <label>Phone</label>
        <input type="text" className="border" />
      </div>
      <div className="grid grid-cols-1">
        <label>Email</label>
        <input type="text" className="border" />
      </div>
      <div className="grid grid-cols-1">
        <label>Project Type</label>
        <input type="text" className="border" />
      </div>
      <div className="grid grid-cols-1">
        <label>Project Details</label>
        <input type="text" className="border" />
      </div>
      <button>Send Quote</button>
    </div>
  );
};

export default RequestQuote;
