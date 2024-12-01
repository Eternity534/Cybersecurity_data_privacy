export async function securityHeadersMiddleware(c, next) {
    // Set Content Security Policy (CSP)
    c.set('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; base-uri 'self';");

    // Set X-Frame-Options to prevent clickjacking
    c.set('X-Frame-Options', 'DENY');

    // Set X-XSS-Protection to prevent reflected XSS attacks
    c.set('X-XSS-Protection', '1; mode=block');

    // Set X-Content-Type-Options to prevent MIME type sniffing
    c.set('X-Content-Type-Options', 'nosniff');

    // Set Strict-Transport-Security (HSTS) header for HTTPS only
    c.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

    // Set Referrer-Policy to control what referrer information is sent with requests
    c.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    // Set Permissions-Policy header for controlling which features the browser can access
    c.set('Permissions-Policy', 'geolocation=(self), microphone=(), camera=()');

    // Optionally add any custom headers or logging here
    
    // Continue with the route handler
    await next();
}
