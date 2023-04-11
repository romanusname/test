import { NextResponse,userAgent } from 'next/server'
import cookie from 'cookie'
//import total from './Total/index'
export async function middleware(req) {

    const {pathname} = req.nextUrl;
    if (
        pathname.startsWith("/_next") || // exclude Next.js internals
        pathname.startsWith("/api") || //  exclude all API routes
        pathname.startsWith("/static") || // exclude static files
        pathname.includes(".") // exclude all files in the public folder
    )
        return NextResponse.next();

    const token = req.cookies.get('token')?.value ?? false
    const response = NextResponse.next()

    let identification = await fetch(`${process.env.URL}api/auth/identification`,{headers: {
            token:token
        }})
    identification = await identification.json()


    if(!identification.status) {
        response.headers.set('Set-Cookie',
            cookie.serialize(
                'token', identification.token, {
                    httpOnly: true,
                    maxAge: 31536000000,
                    sameSite: 'strict',
                    path: '/'
                }
            ))
        return response
    }

}

