import { motion } from "motion/react";
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Send } from "lucide-react";

export function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote request submitted:", formData);
    // Handle form submission
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Premium gradient border */}
      <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-[#00008B]/50 via-[#3BA9FF]/40 to-[#00008B]/30 shadow-xl">
        {/* Form container */}
        <div className="relative bg-white rounded-2xl p-8 backdrop-blur-xl">
          {/* Decorative corner frames */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#00008B]/25 rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#00008B]/25 rounded-br-2xl" />

          {/* Subtle metallic shine */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00008B]/5 via-transparent to-transparent rounded-2xl pointer-events-none" />

          <h3 className="mb-6 text-[#0a0e1a] relative z-10">Request a Quote</h3>

          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-[#5A6675]">
                  Full Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[#F8FAFB] border-[#00008B]/20 focus:border-[#00008B] focus:bg-white text-[#0a0e1a] placeholder:text-[#9CA3AF] transition-all duration-300 hover:border-[#00008B]/40 shadow-sm focus:shadow-md"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-[#5A6675]">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[#F8FAFB] border-[#00008B]/20 focus:border-[#00008B] focus:bg-white text-[#0a0e1a] placeholder:text-[#9CA3AF] transition-all duration-300 hover:border-[#00008B]/40 shadow-sm focus:shadow-md"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            {/* Company */}
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm text-[#5A6675]">
                Company Name
              </label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="bg-[#F8FAFB] border-[#00008B]/20 focus:border-[#00008B] focus:bg-white text-[#0a0e1a] placeholder:text-[#9CA3AF] transition-all duration-300 hover:border-[#00008B]/40 shadow-sm focus:shadow-md"
                placeholder="Your Company Inc."
              />
            </div>

            {/* Service Selection */}
            <div className="space-y-2">
              <label htmlFor="service" className="text-sm text-[#5A6675]">
                Service Required
              </label>
              <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                <SelectTrigger className="bg-[#F8FAFB] border-[#00008B]/20 focus:border-[#00008B] focus:bg-white text-[#0a0e1a] hover:border-[#00008B]/40 transition-all duration-300 shadow-sm">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-white border-[#00008B]/20 text-[#0a0e1a]">
                  <SelectItem value="metal-fabrication">Metal Fabrication</SelectItem>
                  <SelectItem value="cnc-machining">CNC Machining</SelectItem>
                  <SelectItem value="laser-cutting">Laser Cutting</SelectItem>
                  <SelectItem value="welding">Welding Services</SelectItem>
                  <SelectItem value="lgs-structures">LGS Structures</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-[#5A6675]">
                Project Details
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-[#F8FAFB] border-[#00008B]/20 focus:border-[#00008B] focus:bg-white text-[#0a0e1a] placeholder:text-[#9CA3AF] min-h-32 transition-all duration-300 hover:border-[#00008B]/40 shadow-sm focus:shadow-md resize-none"
                placeholder="Tell us about your project requirements..."
              />
            </div>

            {/* Submit Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00008B] via-[#3BA9FF] to-[#00008B] hover:from-[#00007B] hover:via-[#2E8FE5] hover:to-[#00007B] text-white shadow-lg hover:shadow-xl hover:shadow-[#00008B]/40 transition-all duration-300 border-0 gap-2 h-12"
              >
                <Send className="w-5 h-5" />
                Send Quote Request
              </Button>
            </motion.div>
          </form>
        </div>
      </div>

      {/* Ambient glow effect */}
      <div className="absolute -inset-2 bg-gradient-to-br from-[#3BA9FF]/10 via-[#6FB7FF]/5 to-transparent blur-2xl -z-10 rounded-3xl opacity-60" />
    </motion.div>
  );
}
