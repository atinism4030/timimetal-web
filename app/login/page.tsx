"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseAuth } from "@/lib/supabase-auth";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabaseAuth.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }

    router.push("/admin");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F7F8FA] flex items-center justify-center px-6">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* GLOW */}
      <div className="absolute top-[-250px] left-[-200px] w-[650px] h-[650px] bg-[#3BA9FF]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="absolute bottom-[-250px] right-[-200px] w-[650px] h-[650px] bg-black/[0.04] blur-3xl rounded-full pointer-events-none" />

      {/* BACK BUTTON */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-8 left-8 z-20"
      >

        <Link
          href="/"
          className="group inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-black/5 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] transition-all duration-500"
        >

          <ArrowLeft className="w-4 h-4 text-[#3BA9FF] group-hover:-translate-x-1 transition-transform duration-300" />

          <span className="text-sm text-[#5A6675] group-hover:text-[#111111] transition-colors duration-300">
            Back to Home
          </span>
        </Link>
      </motion.div>

      {/* LOGIN CARD */}
      <motion.form
        onSubmit={handleLogin}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden w-full max-w-md bg-white border border-black/5 rounded-[36px] shadow-[0_30px_90px_-30px_rgba(0,0,0,0.12)] p-10 md:p-12 z-10"
      >

        {/* INNER GRID */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#3BA9FF_1px,transparent_1px),linear-gradient(to_bottom,#3BA9FF_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* GLOW */}
        <div className="absolute top-[-120px] right-[-120px] w-[250px] h-[250px] bg-[#3BA9FF]/10 blur-3xl rounded-full" />

        <div className="relative z-10">

          {/* HEADER */}
          <div className="mb-12 text-center">

            {/* LOGO */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-[28px] bg-gradient-to-br from-[#111111] to-[#3BA9FF] shadow-2xl mb-6"
            >

              <span className="text-2xl font-semibold text-white tracking-tight">
                T
              </span>
            </motion.div>

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-100 mb-6">

              <div className="w-2 h-2 rounded-full bg-[#3BA9FF]" />

              <span className="text-[11px] uppercase tracking-[0.22em] text-[#3BA9FF] font-semibold">
                Admin Access
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-5xl font-semibold tracking-[-0.05em] text-[#111111] mb-4">
              Welcome Back
            </h1>

            {/* TEXT */}
            <p className="text-gray-500 leading-relaxed text-lg">
              Sign in to access the Timimetal admin dashboard.
            </p>
          </div>

          {/* INPUTS */}
          <div className="space-y-6">

            {/* EMAIL */}
            <div className="space-y-3">

              <label className="text-sm uppercase tracking-[0.18em] text-gray-500 font-semibold">
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[62px] px-6 rounded-2xl bg-[#F7F8FA] border border-black/5 outline-none focus:border-[#3BA9FF] focus:bg-white transition-all duration-300 text-[#111111] placeholder:text-gray-400 shadow-sm"
              />
            </div>

            {/* PASSWORD */}
            <div className="space-y-3">

              <label className="text-sm uppercase tracking-[0.18em] text-gray-500 font-semibold">
                Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[62px] px-6 rounded-2xl bg-[#F7F8FA] border border-black/5 outline-none focus:border-[#3BA9FF] focus:bg-white transition-all duration-300 text-[#111111] placeholder:text-gray-400 shadow-sm"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="group relative overflow-hidden w-full h-[62px] rounded-2xl bg-[#111111] text-white font-semibold tracking-[0.18em] uppercase hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.4)] transition-all duration-500 disabled:opacity-50"
            >

              {/* HOVER */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#3BA9FF] to-[#111111] opacity-0 group-hover:opacity-100 transition duration-500" />

              <span className="relative z-10">
                {loading ? "Logging in..." : "Login"}
              </span>
            </button>
          </div>
        </div>
      </motion.form>
    </div>
  );
}