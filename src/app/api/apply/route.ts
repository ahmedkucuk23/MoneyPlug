import { Resend } from "resend";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();
    const { name, instagram, followers, niche, revenue, challenge, email } =
      body;

    // Validate required fields
    if (!name || !instagram || !followers || !niche || !revenue || !challenge || !email) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Money Plug <onboarding@resend.dev>",
      to: process.env.NOTIFY_EMAIL || "info@money-plug.com",
      subject: `New Application: ${name} (${instagram})`,
      html: `
        <h2 style="color:#C9B06B;">New Creator Application</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px 12px;color:#777;font-size:12px;">NAME</td><td style="padding:8px 12px;font-weight:bold;">${name}</td></tr>
          <tr><td style="padding:8px 12px;color:#777;font-size:12px;">INSTAGRAM</td><td style="padding:8px 12px;font-weight:bold;">${instagram}</td></tr>
          <tr><td style="padding:8px 12px;color:#777;font-size:12px;">FOLLOWERS</td><td style="padding:8px 12px;">${followers}</td></tr>
          <tr><td style="padding:8px 12px;color:#777;font-size:12px;">NICHE</td><td style="padding:8px 12px;">${niche}</td></tr>
          <tr><td style="padding:8px 12px;color:#777;font-size:12px;">REVENUE</td><td style="padding:8px 12px;">${revenue}</td></tr>
          <tr><td style="padding:8px 12px;color:#777;font-size:12px;">EMAIL</td><td style="padding:8px 12px;">${email}</td></tr>
          <tr><td style="padding:8px 12px;color:#777;font-size:12px;">CHALLENGE</td><td style="padding:8px 12px;">${challenge}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Application form error:", error);
    return NextResponse.json(
      { error: "Failed to send application." },
      { status: 500 }
    );
  }
}
