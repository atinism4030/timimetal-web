"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseAuth } from "@/lib/supabase-auth";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
  <div className="min-h-screen flex items-center justify-center bg-[#DADBDD] px-6 relative overflow-hidden">

    {/* Soft Glow */}
    <div className="absolute top-[-250px] left-[-200px] w-[500px] h-[500px] bg-white/60 blur-3xl rounded-full pointer-events-none" />

    <div className="absolute bottom-[-250px] right-[-200px] w-[500px] h-[500px] bg-black/[0.03] blur-3xl rounded-full pointer-events-none" />

    {/* Back Button */}
    <div className="absolute top-8 left-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 text-gray-700 hover:text-black hover:bg-white transition-all duration-300 text-sm font-medium shadow-lg"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>
    </div>

    {/* Login Card */}
    <form
      onSubmit={handleLogin}
      className="w-full max-w-md bg-white/70 backdrop-blur-2xl p-10 rounded-[32px] border border-white/60 shadow-[0_20px_80px_-25px_rgba(0,0,0,0.15)] relative z-10"
    >

      {/* Top */}
      <div className="mb-10 text-center">

        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-black text-white mb-5 shadow-xl">
          <span className="text-xl font-bold">T</span>
        </div>

        <h1 className="text-4xl font-semibold tracking-tight text-[#111111] mb-3">
          Welcome Back
        </h1>

        <p className="text-gray-500 text-[15px] leading-relaxed">
          Sign in to access the Timimetal admin dashboard.
        </p>
      </div>

      {/* Inputs */}
      <div className="space-y-5">

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">
            Email Address
          </label>

          <input
            type="email"
            placeholder="you@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[58px] px-5 rounded-2xl border border-black/5 bg-[#F4F4F5] outline-none focus:border-[#3BA9FF] focus:bg-white transition-all text-[#111111] placeholder:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">
            Password
          </label>

          <input
            type="password"
            placeholder="••••••••"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[58px] px-5 rounded-2xl border border-black/5 bg-[#F4F4F5] outline-none focus:border-[#3BA9FF] focus:bg-white transition-all text-[#111111] placeholder:text-gray-400"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full h-[58px] rounded-2xl bg-[#111111] text-white font-semibold tracking-wide hover:bg-black hover:scale-[1.01] transition-all duration-300 shadow-xl disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </div>
    </form>
  </div>
);
}