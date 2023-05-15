import { NextResponse } from "next/server";

type FeedbackType = {
    name?: string,
    email?: string,
    message?: string
};

export async function POST(request: Request) {
    const data: FeedbackType = await request.json();

    console.log(`Data : : : ${JSON.stringify(data)}`);

    const { name, email, message } = data;

    return NextResponse.json({name, email, message});
    
}