import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Basic validation
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    // TODO: Here you would typically:
    // 1. Verify user credentials against database
    // 2. Check password hash
    // 3. Create session/JWT token
    // 4. Set secure cookies

    // For now, just simulate successful login
    console.log("Login attempt:", { email });

    // Simulate checking credentials
    if (email === "demo@mannsakha.com" && password === "password") {
      return NextResponse.json(
        { 
          message: "Login successful",
          success: true,
          redirect: "/chat"
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 }
    );

  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
