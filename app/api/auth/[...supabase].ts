import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // This endpoint is required for SSR with Supabase Auth Helpers
  // It does not need to do anything special
  res.status(200).json({ ok: true });
} 