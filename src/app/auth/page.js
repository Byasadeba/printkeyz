// /auth/page.js (Server Component)
import { Suspense } from 'react';
import ClientAuthPage from './ClientAuthPage';

export default function AuthPage({ searchParams }) {
  const mode = searchParams?.mode || 'login';
  
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ClientAuthPage mode={mode} />
    </Suspense>
  );
}
