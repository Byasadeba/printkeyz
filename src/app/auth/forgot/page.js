'use client';
import { useState } from 'react';
import AuthForm from '@/components/ui/AuthForm';

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-page-bg flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-text-primary mb-4">Forgot Password</h1>
          <p className="text-text-muted">Enter your email to reset password</p>
        </div>
        <AuthForm mode="forgot" />
      </div>
    </div>
  );
}
