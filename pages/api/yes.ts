import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const API_KEY = process.env.RESEND_API_KEY;
const resend = new Resend(API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // 1. Restrict to POST requests for better security
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // 2. Initializing the send request
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "deybyr647@gmail.com",
      subject: `Alexandria says Yes!`,
      html: `
        <p>
          Hi Deyby,
          <br><br>
          Alexandria Says Yes!!
          <br><br>
          Sent From alex-vday.deybyr647.com
        </p>`,
    });

    if (error) {
      console.error("Resend Error:", error);
      return res.status(400).json({ status: "error", message: error.message });
    }

    return res.status(200).json({ status: "success", data });
  } catch (error) {
    console.error("Server Error:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
}
