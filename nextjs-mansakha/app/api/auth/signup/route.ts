import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();

    // Basic validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { message: "Password must be at least 6 characters long" },
        { status: 400 }
      );
    }

    // TODO: Here you would typically:
    // 1. Hash the password
    // 2. Save user to database
    // 3. Send welcome email
    // 4. Create session/JWT token

    // For now, just simulate successful signup
    console.log("User signup attempt:", { name, email });

    return NextResponse.json(
      { 
        message: "Account created successfully",
        success: true 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
