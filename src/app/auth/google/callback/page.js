'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function GoogleCallback() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/catalog');
  }, []);

  return <p>Signing you in...</p>;
}
