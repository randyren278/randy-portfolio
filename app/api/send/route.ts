import { EmailTemplate } from '@/app/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, subject, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Randy <onboarding@resend.dev>',
      to: ['randyren278@gmail.com'],
      subject: subject,
      react: EmailTemplate({ firstName: email, message: message }),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data));
  } catch (error) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
    return new Response(JSON.stringify({ error: 'Unknown error occurred' }), { status: 500 });
  }
}
