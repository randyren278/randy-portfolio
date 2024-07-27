
import { Resend } from 'resend';
import { EmailTemplate } from '@/app/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Randy <randyren278@gmail.com',
      to: ['randyren278@gmail.com'],
      subject: 'Portfolio Query',
      react: EmailTemplate({ firstName: 'Randy' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
