import { NextRequest, NextResponse } from 'next/server';

const isAdminRoute = (pathname: string) => {
    return pathname.startsWith('/admin');
}

const isCustomerRoute = (pathname: string) => {
    return pathname.startsWith('/customer');
}

export async function middleware(req: NextRequest) {
    const role = req.headers.get("authorization") ?? '';
    const { pathname } = req.nextUrl;

    // If it's a customer route and the user is not authenticated or an admin
    if (isCustomerRoute(pathname) && !["user", "admin"].includes(role)) {
        return NextResponse.redirect('/login');
    }

    // If it's an admin route and the user is not an admin
    if (isAdminRoute(pathname) && role !== "admin") {
        return NextResponse.redirect('/login');
    }

    // Allow other routes
    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*', '/customer/:path*', '/pages/']
};
