import { NextRequestWithAuth, withAuth, NextAuthMiddlewareOptions } from "next-auth/middleware";
import { NextResponse } from "next/server";

const middleware = (request: NextRequestWithAuth) => {
    console.log('[MIDDLEWARE_NEXTAUTH_TOKEN]: ', request.nextauth.token)

    const  isPrivedRoutes = request.nextUrl.pathname.startsWith('/private')
    const isAdminUser = request.nextauth.token?.role === 'admin'

    if (isPrivedRoutes && !isAdminUser) {
        return NextResponse.rewrite(new URL('/denied', request.url))
    }
}
const callbackOptions: NextAuthMiddlewareOptions = {}

export default withAuth(middleware, callbackOptions)

export const config = {
    matcher: ["/private"]
}