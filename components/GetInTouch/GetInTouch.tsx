"use client";
import React from "react";
import { ContactInfo } from "./ContactInfo";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Na Vizitoni",
    value: "E65 Tetovo MK, 1200",
  },
  {
    icon: Phone,
    title: "Na Telefononi",
    value: "+389 70 209 553",
  },
  {
    icon: Mail,
    title: "Na Kontaktoni me Email",
    value: "info@timimetal.com",
  },
  {
    icon: Clock,
    title: "Orari i Punës",
    value: "E Hënë – E Premte: 08:00 – 17:00",
  },
];

const GetInTouch = () => {
  return (
    <div
      id="GetInTouch"
      className=" scroll-mt-24 bg-[#fafafa] py-24 md:py-32 px-6 lg:px-20 top-border"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="pb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-gray-900 text-4xl md:text-5xl lg:text-7xl font-light tracking-tight mb-6">
            Na{" "}
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-black">
              Kontaktoni
            </span>
          </h2>
          <div className="h-[1px] w-24 bg-gray-300 mx-auto mb-8" />
          <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed">
            Gati për të nisur projektin tuaj? Kontaktoni ekipin tonë për
            konsultë dhe ofertë profesionale. Ekspertët tanë janë të gatshëm të
            realizojnë vizionin tuaj me cilësi, siguri dhe përkushtim maksimal.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 items-start w-full relative">
          {/* Decorative Divider */}
          <div className="hidden lg:block absolute left-[50%] top-0 bottom-0 w-[1px] bg-gray-200 -translate-x-[50%]" />

          <div className="flex flex-col gap-10 w-full lg:w-1/2 lg:pr-12">
            <div>
              <h3 className="text-2xl font-medium mb-10 text-gray-900">
                Informacioni i Kontaktit
              </h3>
              <div className="flex flex-col gap-8">
                {contactDetails.map((details, index) => (
                  <ContactInfo
                    key={index}
                    icon={details.icon}
                    title={details.title}
                    value={details.value}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:pl-12 flex justify-center lg:justify-start">
            <div className="w-full bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
              <div className="p-8 border-b border-gray-100">
                <p className="text-xs tracking-[0.2em] font-semibold text-gray-400 uppercase mb-3">
                  Lokacioni
                </p>

                <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
                  Vizitoni Timimetal
                </h2>
              </div>

              <div className="w-full h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.2220458140087!2d20.95112197627505!3d41.97404217123135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1353fbe42793fa5b%3A0x94867af64a7470e5!2sTimimetal!5e0!3m2!1sen!2smk!4v1778153651471!5m2!1sen!2smk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
