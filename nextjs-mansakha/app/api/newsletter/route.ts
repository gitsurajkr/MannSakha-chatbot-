import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Basic validation
    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // TODO: Here you would typically:
    // 1. Add email to newsletter database/service
    // 2. Send welcome email
    // 3. Handle unsubscribe functionality

    // For now, just simulate successful subscription
    console.log("Newsletter subscription:", { email });

    return NextResponse.json(
      { 
        message: "Successfully subscribed to newsletter",
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { message: "Failed to subscribe to newsletter" },
      { status: 500 }
    );
  }
}
