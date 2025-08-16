"use server";

import { TFormSchema } from "@/app/contact/page";
import { Resend } from "resend";
import { z } from "zod";

export async function sendEmail(values: TFormSchema) {
  const resend = new Resend(process.env.RESEND_API_KEY || "re_Hj1E5x6p_M6rb2zC9HgQV5DE7DrW1rUUX");
  const { data, error } = await resend.emails.send({
    from: `${values.name} <${process.env.FROM_EMAIL || "onboarding@resend.dev"}>`,
    to: [process.env.TO_EMAIL || "hello@vipulkumar.dev"],
    subject: "Customer Email",
    text: `Email = ${values.email} \n\nName = ${values.name} \n\nMessage = ${values.message}`,
  });
  if (error) {
    return false;
  }

  return data !== null;
}
