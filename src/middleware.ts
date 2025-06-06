import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === "/api/profile")
        return NextResponse.redirect(new URL("/hello", request.nextUrl));
        // return NextResponse.rewrite(new URL("/hello", request.nextUrl));
}
 