'use client';
import Link from 'next/link';
import AuthForm from '@/components/ui/AuthForm';
import { Button } from '@/components/ui/Button';

export default function ClientAuthPage({ mode }) {
  return (
    <div className="min-h-screen bg-liner-to-br from-page-bg via-wood-light to-page-section flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-md space-y-8">
        {/* Logo/Branding */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-liner-to-r from-text-primary via-wood-DEFAULT to-text-secondary bg-clip-text text-transparent mb-4 drop-shadow-wood">
            PrintKeyz
          </h1>
          <p className="text-xl text-text-muted leading-relaxed max-w-sm mx-auto">
            Welcome to premium printing
          </p>
        </div>

        {/* Auth Form */}
        <AuthForm mode={mode} />

        {/* Google Sign In */}
        <div className="pt-6">
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full gap-3 border-wood-accent hover:bg-wood-light/50"
            onClick={() => window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/google`}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              {/* Google SVG icon */}
            </svg>
            Continue with Google
          </Button>
        </div>

        {/* Toggle Links */}
        <div className="text-center space-y-2 pt-8 border-t border-wood-light/50">
          <Link 
            href={mode === 'login' ? '/auth?mode=register' : '/auth'}
            className="block text-text-secondary hover:text-wood-DEFAULT font-semibold text-lg transition-colors"
          >
            {mode === 'login' ? 'Create account' : 'Back to login'}
          </Link>
          <Link href="/auth/forgot" className="text-sm text-text-muted hover:text-text-secondary">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
}
