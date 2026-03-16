import sendEmail from "@/lib/email";
import paymentProcessing from "@/lib/paymentProcessing";
import { NextRequest, NextResponse } from 'next/server'
import testEmail from "@/lib/testEmail";
import test from "node:test";

// Create a test account automatically
export async function POST(request: NextRequest){

    const data = await request.json();
    try {
        await Promise.all([
            // sendEmail(data),
            testEmail(data),
            paymentProcessing(data)
        ]);

        return NextResponse.json(
            { status: 200, message: 'Order placed successfully' },
        );
        
    } catch (message) {
        return NextResponse.json(
            { status: 500, message: `The order failed: ${message}`},
        );
    }
};