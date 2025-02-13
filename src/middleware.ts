// ./src/middleware.ts
import { NextResponse } from 'next/server';

export function middleware() {
  const response = NextResponse.next();
  response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  return response;
}

export const config = {
  matcher: '/_next/image/:path*',
}