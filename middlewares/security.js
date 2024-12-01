export async function securityHeadersMiddleware(c, next) {
    // Set the Content Security Policy (CSP) header
    const cspHeader = `
        default-src 'self';                  // Restrict everything to the same origin
        script-src 'self';                  // Allow scripts only from the same origin
        style-src 'self' 'unsafe-inline';   // Allow styles only from the same origin and inline styles
        img-src 'self' data:;               // Allow images from the same origin and inline data URIs
        font-src 'self';                    // Allow fonts only from the same origin
        connect-src 'self';                 // Restrict connections (e.g., API calls) to the same origin
        frame-ancestors 'none';             // Disallow embedding the site in iframes (anti-clickjacking)
    `.replace(/\s+/g, ' ').trim();

    c.set('Content-Security-Policy', cspHeader);

    // Set anti-clickjacking header
    c.set('X-Frame-Options', 'DENY'); // Completely disallow framing of the site

    // Additional recommended security headers

    // Prevent MIME type sniffing
    c.set('X-Content-Type-Options', 'nosniff');

    // Enforce HTTPS with HSTS (HTTP Strict Transport Security)
    c.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');

    // Control referrer information to enhance privacy
    c.set('Referrer-Policy', 'no-referrer');

    // Prevent browsers from loading your site over HTTP (optional for development environments)
    // Uncomment the following line in production:
    // c.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');

    await next(); // Proceed to the next middleware or route handler
}
