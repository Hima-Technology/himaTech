import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const CONTACT_TO_EMAIL = "info@himatech.co.tz";

const ContactSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email(),
  subject: z.string().min(1).max(200),
  message: z.string().min(1).max(5000),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = ContactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const { name, email, subject, message } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn(
      "[contact] RESEND_API_KEY not set — logging submission instead of sending email.",
      { name, email, subject, message }
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: "HimaTech Website <onboarding@resend.dev>",
    to: CONTACT_TO_EMAIL,
    replyTo: email,
    subject: `[Website] ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    console.error("[contact] Resend delivery failed:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivered: true });
}
