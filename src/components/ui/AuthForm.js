'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import api from '@/lib/api';
import { Button } from './Button';

export default function AuthForm({ mode = 'login' }) {
  const [formData, setFormData] = useState({ 
    email: '', 
    password: '', 
    name: '', 
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const endpoint = mode === 'forgot' ? 'forgot-password' : mode;
      const body = mode === 'login' 
        ? { email: formData.email, password: formData.password }
        : mode === 'register'
        ? { name: formData.name, email: formData.email, password: formData.password }
        : { email: formData.email };
console.log(endpoint,"end")
      const response = await api.post(`/api/auth/${endpoint}`, body);

      setMessage(response.data.message || 'Success!');
      if (mode === 'login' || mode === 'register') {
        setTimeout(() => router.push('/catalog'), 1500);
      }
    } catch (err) {
      console.log(err)
      const errorMessage = err.response?.data?.message || err.message || 'Something went wrong';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-wood border border-wood-light space-y-6">
      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-text-primary mb-2">
          Email Address
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 bg-white border border-wood-light rounded-2xl focus:ring-2 focus:ring-wood-DEFAULT focus:border-transparent transition-all"
          placeholder="you@printkeyz.com"
        />
      </div>

      {/* Name (Register only) */}
      {mode === 'register' && (
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-2">
            Full Name
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-wood-light rounded-2xl focus:ring-2 focus:ring-wood-DEFAULT focus:border-transparent transition-all"
            placeholder="John Doe"
          />
        </div>
      )}

      {/* Password */}
      {(mode === 'login' || mode === 'register') && (
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-2">
            Password
          </label>
          <input
            type="password"
            required
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-wood-light rounded-2xl focus:ring-2 focus:ring-wood-DEFAULT focus:border-transparent transition-all"
            placeholder="••••••••"
          />
        </div>
      )}

      {/* Submit Button - PROPER BUTTON WITH LOADING */}
      <button
        type="submit" 
        loading={loading} 
        size="lg" 
        className="w-full shadow-wood"
        disabled={loading}
      >
        {loading ? 'Processing...' : 
         mode === 'login' ? 'Sign In' : 
         mode === 'register' ? 'Create Account' : 'Send Reset Link'}
      </button>

      {/* Error/Success Messages */}
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-sm">
          {error}
        </div>
      )}
      {message && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-2xl text-green-700 text-sm">
          {message}
        </div>
      )}
    </form>
  );
}
