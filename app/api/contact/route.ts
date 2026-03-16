import { NextRequest, NextResponse } from 'next/server'
import testEmail from '@/lib/testEmail';
export async function POST(request: NextRequest){
    const data = await request.json();

    try {
        await testEmail(data);
        return NextResponse.json(
            { status: 200, message: 'Form submitted successfully'},
        );
    } catch (message) {
        return NextResponse.json(
            { status: 500, message: `Failed: ${message}`},
        );
    }
}