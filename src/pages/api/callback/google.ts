// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { APIServer } from '@/config/axios';
import dayjs from 'dayjs';
import type { NextApiHandler } from 'next';

const googleLoginHandler: NextApiHandler = async (req, res) => {
  const tokens = {
    access_token: req.query.access_token,
    expires_at: req.query.expires_at,
    expires_in: req.query.expires_in,
    provider_token: req.query.provider_token,
    refresh_token: req.query.refresh_token,
    token_type: req.query.token_type,
  };

  if (!tokens.access_token || !tokens.refresh_token) throw new Error('Token Undefined');

  const { data } = await APIServer.post('/auth/google/callback', tokens);

  const expires = dayjs().utc(true).endOf('day').toDate().toUTCString();

  res.setHeader('Set-Cookie', [
    `access_token=${data.access_token}; path=/; secure=ture; expires=${expires}`,
    `refresh_token=${data.refresh_token}; path=/; secure=true`,
  ]);

  res.redirect('/');
};

export default googleLoginHandler;
