import { Resend } from 'resend';

export async function POST() {
  try {

    const resend = new Resend(process.env.RESEND_API_KEY);

    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'avi1999kokare@gmail.com',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    });

    return Response.json({message: 'Email send successfully'}, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function GET() {
  try {
    return Response.json({ message: 'Aviansh' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}