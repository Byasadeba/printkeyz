// RegisterForm.jsx - Updated with Direct Hex Colors
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { registerApi } from '@/features/auth/auth.api';
import GoogleButton from './GoogleButton';

export default function RegisterForm() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await registerApi({ name, email, password });
      router.push('/');
    } catch (err) {
      setError(
        err?.response?.data?.message || 'Registration failed'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F3E9DC] via-[#E6D3B1]/20 to-white flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-2xl">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 xs:p-8 sm:p-10 lg:p-12 shadow-2xl border border-[#E6D3B1]/60 relative overflow-hidden">
          
          <div className="absolute inset-0 bg-gradient-to-br from-[#B08968]/5 via-transparent to-[#9C6644]/5 rounded-3xl" />
          
          <form onSubmit={submit} className="relative z-10 space-y-6">
            
            <div className="text-center space-y-3 pt-4 pb-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#B08968] via-[#9C6644] to-[#7F5539] text-[#FFF8F1] px-6 py-3 rounded-2xl font-semibold shadow-wood mb-6 mx-auto">
                ✨ Welcome to PrintKeyz
              </div>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold 
                             bg-gradient-to-r from-[#3E2723] via-[#5D4037] to-[#7F5539] 
                             bg-clip-text text-transparent leading-tight">
                Create Account
              </h2>
              <p className="text-sm sm:text-base text-[#7B5E57] max-w-xs mx-auto leading-relaxed">
                Join thousands customizing their perfect prints
              </p>
            </div>

            <div className="space-y-5">
              <div className="group">
                <label className="block text-sm font-semibold text-[#3E2723] mb-3 tracking-wide">
                  👤 Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-5 py-4 bg-white/80 border-2 border-[#E6D3B1]/50 rounded-2xl text-lg placeholder:text-[#7B5E57]/70
                             focus:ring-4 focus:ring-[#B08968]/30 focus:border-[#B08968] hover:border-[#B08968]/60
                             transition-all duration-300 shadow-lg hover:shadow-wood
                             group-focus-within:shadow-wood group-hover:shadow-wood/50"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-[#3E2723] mb-3 tracking-wide">
                  📧 Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@printkeyz.com"
                  className="w-full px-5 py-4 bg-white/80 border-2 border-[#E6D3B1]/50 rounded-2xl text-lg placeholder:text-[#7B5E57]/70
                             focus:ring-4 focus:ring-[#B08968]/30 focus:border-[#B08968] hover:border-[#B08968]/60
                             transition-all duration-300 shadow-lg hover:shadow-wood
                             group-focus-within:shadow-wood group-hover:shadow-wood/50"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-[#3E2723] mb-3 tracking-wide">
                  🔒 Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-5 py-4 bg-white/80 border-2 border-[#E6D3B1]/50 rounded-2xl text-lg placeholder:text-[#7B5E57]/70
                             focus:ring-4 focus:ring-[#B08968]/30 focus:border-[#B08968] hover:border-[#B08968]/60
                             transition-all duration-300 shadow-lg hover:shadow-wood
                             group-focus-within:shadow-wood group-hover:shadow-wood/50"
                />
              </div>
            </div>

            {error && (
              <div className="p-5 bg-gradient-to-r from-red-50/90 to-red-100/90 border-2 border-red-200/70 rounded-2xl text-red-800 text-sm font-medium backdrop-blur-sm shadow-lg animate-pulse">
                ⚠️ {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="group relative w-full py-5 sm:py-6 rounded-3xl font-bold text-xl text-[#FFF8F1]
                         bg-gradient-to-r from-[#B08968] via-[#9C6644] to-[#7F5539] 
                         hover:from-[#7F5539] hover:via-[#5A3E2B] hover:to-[#5A3E2B]
                         hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]
                         focus:ring-4 focus:ring-[#B08968]/40 focus:outline-none
                         disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-wood
                         transition-all duration-300 overflow-hidden shadow-2xl"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <>🎨 Creating account...</>
                ) : (
                  <>🚀 Create Account</>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#9C6644]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <div className="pt-6">
              <GoogleButton />
            </div>

            <div className="relative flex items-center my-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E6D3B1]/60 to-transparent" />
              <span className="px-4 py-2 text-xs font-semibold text-[#7B5E57]/80 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm">
                or continue with
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E6D3B1]/60 to-transparent" />
            </div>

            <div className="text-center space-y-4 pt-6 pb-4">
              <p className="text-sm text-[#7B5E57]/80">
                Already have an account?
              </p>
              <Link
                href="/auth/login"
                className="group block w-full py-4 px-8 rounded-2xl font-semibold text-lg bg-gradient-to-r from-[#E6D3B1]/50 via-white to-[#E6D3B1]/30
                           text-[#3E2723] hover:from-[#B08968] hover:to-[#7F5539] hover:text-[#FFF8F1]
                           border-2 border-[#E6D3B1]/50 hover:border-[#B08968]/70 hover:shadow-wood-lg
                           hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  👉 Sign in instead
                </span>
              </Link>
            </div>
          </form>

          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#9C6644]/20 to-transparent rounded-3xl blur-xl" />
          <div className="absolute -bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-green-400/20 to-transparent rounded-2xl blur-xl" />
        </div>
      </div>
    </div>
  );
}
