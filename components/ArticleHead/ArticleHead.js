import React, { useEffect } from 'react'
import Head from 'next/head'


const ArticleHead = ({ SEOProps }) => {


    return (

        <Head>

            <title>{SEOProps.SEOTitle}</title>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="title" content={SEOProps.SEOTitle} />
            <meta name="description" content={SEOProps.SEODescription} />
            {/* Robots meta tag */}
            <meta name="robots" content={SEOProps?.RobotsInfo ? SEOProps?.RobotsInfo : "noindex, nofollow"} />
            {/* End Robots meta tag */}
            {/* Start Canonical Tags */}
            <link rel="canonical" href={SEOProps.CanonicalURL ? SEOProps.CanonicalURL : SEOProps.pagePath} />
            {/* End Canonical Tags  */}
            {/* Start Og tags */}
            <meta property="og:title" content={SEOProps.SEOTitle} />
            <meta property="og:description" content={SEOProps.SEODescription} />
            <meta property="og:type" content={SEOProps?.OrganisationType ? SEOProps?.OrganisationType : 'website'} />
            <meta property="og:url" content={SEOProps?.CanonicalURL ? SEOProps.CanonicalURL : SEOProps.pagePath} />
            <meta property="og:site_name" content={SEOProps?.OrganisationalSiteName ? SEOProps?.OrganisationalSiteName: 'Aditya Birla Sun Life Insurance'} />
            {/* End Og tags */}
            {/* Start twitter tags */}
            <meta name="twitter:title" content={SEOProps.SEOTitle} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={`@${SEOProps.OrganisationalSiteName}`} />
            <meta name="twitter:description" content={SEOProps.SEODescription} />
            {/* End twitter tags */}
            {/* Custom meta tags */}
            {/* End Custom meta tags */}

            {/* disable phone number linking (ex. free text component) */}
            <meta name="format-detection" content={SEOProps?.FormatDetection ? SEOProps?.FormatDetection : 'telephone=no'} />
            {/* disable phone number linking (ex. free text component)  */}
            {/* custom meta tag */}
            <meta name="google-site-verification" content={SEOProps?.GoogleSiteVerification ? SEOProps?.GoogleSiteVerification : 'neCzPsbLt0QJNZVr9X6D3_I30nwjlDdblSiYG4Bzt1U'} />
            {/* end custom meta tag */}
            <meta name="facebook-domain-verification" content={SEOProps?.FacebookDomainVerification ? SEOProps?.FacebookDomainVerification : 'xgano3baf8obz643jc337j99q1raat'} />
            {/* Fav icons */}
            <link rel="apple-touch-icon" sizes="180x180" href="https://abcscprod.azureedge.net/Assets/Project/ABCL/CORP/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="https://abcscprod.azureedge.net/Assets/Project/ABCL/CORP/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="https://abcscprod.azureedge.net/Assets/Project/ABCL/CORP/favicon-16x16.png" />
            <link rel="shortcut icon" href="https://abcscprod.azureedge.net/Assets/Project/ABCL/CORP/favicon.ico" />
            <meta name="theme-color" content="#ffffff" />
            {/* Fav icons */}


            <link rel="shortcut icon" href="https://abcscprod.azureedge.net/Assets/Project/ABCL/images/favicon.ico?v=1" />
           
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
           

            {/* <script type="application/ld+json">
                {{
                    "@context": "http://schema.org",
                    "@graph":
                        [
                            {
                                "@type": "Organization",
                                "description": "Aditya Birla Sun Life Insurance provides life insurance plans for every goal in life which will help you in meeting your protection and financial needs for every important stage.",
                                "name": "Aditya Birla Sun Life Insurance",
                                "alternateName": "ABSLI",
                                "url": "https://lifeinsurance.adityabirlacapital.com/",
                                "logo": "https://abcscprod.azureedge.net/-/media/Project/ABCL/Logo/abc-logo/abc-logo.webp?extension=webp&revision=b225f358-d7a3-4da7-aedb-0e7ee07aa229&modified=20220421105755",

                                "address": [
                                    {
                                        "@type": "PostalAddress",
                                        "addressLocality": "Mumbai (Maharashtra)",
                                        "postalCode": "400 013.",
                                        "streetAddress": "One World Center Tower 1, 16th Floor, Jupiter Mill Compound, 841, Senapati Bapat Marg, Elphinstone Road, Mumbai - 400013"
                                    }
                                ],
                                "location": [
                                    {
                                        "@type": "PostalAddress",
                                        "addressLocality": "Elphinstone Road, Mumbai, Maharashtra",
                                        "postalCode": "400 013",
                                        "streetAddress": "Senapati Bapat Marg, Elphinstone Road, Mumbai"
                                    }
                                ],
                                "contactPoint": [
                                    {
                                        "@type": "ContactPoint",
                                        "telephone": "18002707000",
                                        "contactType": "customer service",
                                        "areaServed": "IN",
                                        "availableLanguage": [
                                            "English"]
                                    },
                                    {
                                        "@type": "ContactPoint",
                                        "email": "care.lifeinsurance@adityabirlacapital.com",
                                        "contactType": "customer support",
                                        "url": "https://lifeinsurance.adityabirlacapital.com/contact-us"
                                    }
                                ],
                                "email": "care.lifeinsurance@adityabirlacapital.com",

                                "sameAs": [
                                    "https://www.facebook.com/abslifeinsurance/",
                                    "https://twitter.com/abslifein",
                                    "https://www.instagram.com/abclifein/",
                                    "https://www.linkedin.com/company/birla-sun-life-insurance/"
                                ]
                            }
                        ]

                }}
            </script>
            <script type="application/ld+json">
                {{
                    "@context": "https://schema.org/",
                    "@type": "WebSite",
                    "name": "Aditya Birla Sun Life Insurance Company Limited",
                    "url": "https://lifeinsurance.adityabirlacapital.com/",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://lifeinsurance.adityabirlacapital.com/search-results?searchterm={search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                }
                }
            </script>


            */}
        </Head>

    )
}

export default ArticleHead