"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseAuth } from "@/lib/supabase-auth";

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
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFB] px-6">

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl border border-[#E8F3FF]"
      >

        <h1 className="text-3xl font-bold mb-8 text-center text-[#0a0e1a]">
          Admin Login
        </h1>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-4 rounded-xl border border-[#E8F3FF] bg-[#F8FAFB] outline-none focus:border-[#3BA9FF]"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-4 rounded-xl border border-[#E8F3FF] bg-[#F8FAFB] outline-none focus:border-[#3BA9FF]"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#3BA9FF] to-[#6FB7FF] text-white font-semibold"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </div>
      </form>
    </div>
  );
}