import { NextApiRequest, NextApiResponse } from 'next';
import { signup } from '../../../(login)/actions';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      await signup({ email, password });
      res.status(200).json({ message: 'Signup successful' });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
