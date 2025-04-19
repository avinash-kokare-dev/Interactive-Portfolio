import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend('re_123456789');

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("Inside send")
  const { data, error } = await resend.emails.send({
    from: 'avi1999kokare@gmail.com',
    to: ['avinash.kokare@fitcircle.in'],
    subject: 'Hello world',
    react: EmailTemplate({ firstName: 'Avinash' }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};