import emailjs from 'emailjs-com';

interface ContactFormPayload {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail({ name, email, message }: ContactFormPayload) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return {
      success: false,
      error: 'Email service is not configured yet.',
    };
  }

  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        name,
        email,
        message,
      },
      publicKey,
    );

    return { success: true };
  } catch (error) {
    console.error('EmailJS submission failed:', error);
    return {
      success: false,
      error: 'Something went wrong. Please try again later.',
    };
  }
}
