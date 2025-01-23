import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from 'next/server';

export async function middleware(request) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        return NextResponse.redirect(new URL('/api/auth/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/profile',
}