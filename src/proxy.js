import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server'
 

export async function proxy(request) {

       const session = await auth.api.getSession({
    headers: request.headers,
  })
  if(session){
    return NextResponse.next()
  }else{
   return NextResponse.redirect(new URL('/signin', request.url))
  }
 
  
}

 
export const config = {
  matcher: [ '/allappoinment/:id', '/dashboard/:path*' , '/profile/:path*'],
}