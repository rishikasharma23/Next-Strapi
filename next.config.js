
const path = require('path')
/** @type {import('next').NextConfig} */
 
const nextConfig = {    
    output: 'export',
    // trailingSlash: true,
    images: {
        domains: [`${process.env.NEXT_PUBLIC_STRAPI_API_URL}`]
      },
      sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
}

module.exports = nextConfig
