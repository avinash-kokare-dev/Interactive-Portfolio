import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';


export async function POST() {
  try {

    const resend = new Resend('re_4x8Lac8V_65D8cKtnoTNZgocrKQLQTMUP');

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
    // const { data, error } = await resend.emails.send({
    //   from: 'Avinash avi1999kokare@gmail.com',
    //   to: ['avinash.kokare@fitcircl.in'],
    //   subject: 'Hello world',
    //   react: EmailTemplate({ firstName: 'Avinash' }),
    // });

    // if (error) {
    //   return Response.json({ error }, { status: 500 });
    // }

    return Response.json({ message: 'Aviansh' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}