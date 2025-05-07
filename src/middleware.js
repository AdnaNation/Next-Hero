import { NextResponse } from "next/server"

export const middleware = (request) =>{
    // return NextResponse.redirect(new URL('/about', request.url))
    // return NextResponse.rewrite(new URL('/about/history', request.url))
    if(request.nextUrl.pathname.startsWith('/contacts')){
        return NextResponse.redirect(new URL('/about/history', request.url))
    }
}

// export const config = {
//     matcher: ['/about', '/services']
// }
