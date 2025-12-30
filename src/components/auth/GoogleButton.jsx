'use client';

import { googleAuthUrl } from '@/features/auth/auth.api';

export default function GoogleButton() {
  return (
    <button
      type="button"
      onClick={() => (window.location.href = googleAuthUrl())}
      className="w-full flex items-center justify-center gap-3
                 border border-wood-accent rounded-2xl py-3
                 bg-white hover:bg-page-section transition shadow-soft"
    >
      <img src="/google.png" alt="Google" className="w-5 h-5" />
      <span className="font-semibold text-text-primary">
        Continue with Google
      </span>
    </button>
  );
}
