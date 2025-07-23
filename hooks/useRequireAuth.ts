import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export const useRequireAuth = () => {
  const router = useRouter();
  useEffect(() => {
    let isMounted = true;
    supabase.auth.getUser().then(({ data }) => {
      if (isMounted && !data?.user) {
        router.replace('/auth');
      }
    });
    return () => {
      isMounted = false;
    };
  }, [router]);
}; 