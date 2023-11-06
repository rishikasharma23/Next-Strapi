import React from 'react'
import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleBreadCrumb from '../../../components/ArticleBreadCrumb/ArticleBreadCrumb'
import { useState, useEffect } from "react";
import RateAndShare from '../../../components/RateAndShare/RateAndShare';
import ArticleHead from '../../../components/ArticleHead/ArticleHead';
import BlockManager from '../../../components/shared/BlockManager/index';
import RightBlockManager from '../../../components/shared/BlockManager/rightBlockManager';
import Author from '../../../components/Author/Author';
import BottomSection from '../../../components/BottomSection/BottomSection';
import Footer from '../../../components/Footer/Footer';
import articleStyle from "../../../styles/common-article.scss";
import Header from "../../../components/Header/Header";
import RootLayout from '@/app/layout';
import ReadAloud from '@/components/ReadAloud/ReadAloud';
import AudioPlayer from '@/components/AudioPlayer/AudioPlayer';

const Article = ({ articleProps, articleData, shareProps, pageData, bottomPageData, sideBarData, subscribeData, formData, footer, headerData, readAloudData, audioPlayerData }) => {
    // console.log("header data",headerData)
    // console.log("footer data",footer)
    // console.log("article data",articleData)
    // console.log("audio player data",audioPlayerData)

    /* LOGIC FOR PRIMARY NAV CATEGORY BLOCK BELOW */


    pageData?.attributes?.blocks.map((item) => {
        if (item?.__component === "blocks.rating-component") {
            item.ArticleID = pageData?.id
        }
    })

    const [pagePath, setPagePath] = useState("")

    let currentURL, formItem;

    formData && formData.data?.map((item) => {

        if (item?.attributes?.FormsTitle === sideBarData?.attributes?.form?.data?.attributes?.FormsTitle) {
            formItem = item

        }


    })



    let countIdx = 0, matchedIdx;


    if (sideBarData && sideBarData.attributes && sideBarData.attributes.rightBlocks) {

        sideBarData && sideBarData?.attributes && sideBarData?.attributes?.rightBlocks.map((item) => {
            if (item.form) {
                item = formItem
                matchedIdx = countIdx

            }
            if (item.__component === 'blocks.recently-added-article') {

                item.articles = articleProps
            }
            countIdx++
        })


        sideBarData.attributes.rightBlocks[matchedIdx] = { ...sideBarData.attributes.rightBlocks[matchedIdx], formDetails: formItem }

    }

    function formatDate(inputDate) {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const dateObj = new Date(inputDate);
        const day = dateObj?.getUTCDate();
        const month = months[dateObj?.getUTCMonth()];
        const year = dateObj?.getUTCFullYear();

        return `${day} ${month} ${year}`;
    }


    useEffect(() => {

        if (typeof window !== "undefined") {
            currentURL = window.location.href.replace(/\/$/, '');
            setPagePath(currentURL)
        }



    }, [articleProps]);




    return (
        <>

            {
                articleData ? (
                    <>
                        <Helmet>
                            <script nonce="2726c7f26c" type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=5f619fde43839f001976529f&product=custom-share-buttons' defer></script>
                        </Helmet>
                        <ArticleHead SEOProps={{ ...articleData?.attributes?.ArticlePageSEODetails, pagePath: pagePath }} />
                        <Header headerProps={headerData} />

                        <div className='revamp-articles-container'>

                            <ArticleBreadCrumb breadcrumbDetail={articleData?.attributes} />
                            <div id="eb253f14cf0d4f618206a5d2f1314eab" className="revamp-articles-UpperBox">
                                <div className="revamp-digicls revamp-blog-articles revamp-articles-title">
                                    <h1 className="revamp-fontStyle11">

                                        {articleData?.attributes?.ArticleH1Tag}


                                    </h1>
                                    <div className="d-flex justify-content-start align-items-start">
                                        <div>



                                            <img className="lazy" src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${articleData?.attributes?.CalendarIcon?.data?.attributes?.url}`} alt={articleData?.attributes?.CalendarIcon?.data?.attributes?.alternativeText} />
                                            {
                                                articleData?.attributes?.ArticlesPublishedDate ? (
                                                       <span className="revamp-fontStyle12"> {articleData?.attributes?.ArticlesPublishedDate && formatDate(articleData?.attributes?.ArticlesPublishedDate)}</span>
                                                ) : <span className="revamp-fontStyle12"> {articleData?.attributes?.publishedAt && formatDate(articleData?.attributes?.publishedAt)}</span>
                                                
                                            }

                                        </div>
                                        <div>
                                            <img className="lazy" src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${articleData?.attributes?.ClockIcon?.data?.attributes?.url}`} alt={articleData?.attributes?.ClockIcon?.data?.attributes?.alternativeText} />



                                            <span className="revamp-fontStyle12">
                                                {articleData?.attributes?.BlogTitleReadTime}
                                            </span>

                                        </div>

                                    </div>


                                </div>
                                <RateAndShare ratingProps={shareProps?.attributes?.ArticleShare} />
                            </div>
                            {

                                readAloudData ? <ReadAloud readAloudData={readAloudData} /> : null
                            }


                            <div className='revamp-artciles-Box'>
                                <div className='revamp-articles-leftBox'>


                                    <img src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${articleData?.attributes?.BannerImage?.data?.attributes?.url}`} alt={articleData?.attributes?.BannerImage?.data?.attributes?.alternativeText} className="lazy articles-desktop-placeholder" />
                                    <img src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${articleData?.attributes?.ArticleMobImage?.data?.attributes?.url}`} alt={articleData?.attributes?.ArticleMobImage?.data?.attributes?.alternativeText} className="lazy articles-mobile-placeholder" />

                                    <BlockManager pageData={pageData} />
                                    <Author authorProps={articleData?.attributes?.authors} />


                                </div>

                                <div className='revamp-artciles-rightBox'>
                                    <RightBlockManager rightPageData={sideBarData} />
                                </div>


                            </div>

                        </div>

                        <AudioPlayer audioPlayerData={audioPlayerData} />

                        <div>

                            {
                                bottomPageData && (

                                    <BottomSection bottomSectionProps={{ ["bottom_block"]: { ...bottomPageData?.data?.attributes }, ['subscribeData']: subscribeData?.data?.attributes }} />

                                )
                            }


                        </div>
                        <Footer footerProps={footer} />
                        <Helmet>
                            <script>
                                {`var disqus_config = function () {
                                    this.page.url = window.location.href;

                                this.page.identifier = '{F9C5D5B8 - 4824 - 41BA-B80C-89F061DAC07D}';
                                }`}
                            </script>
                            <script>
                                {
                                    `(function() { // DON'T EDIT BELOW THIS LINE
                                        var d = document, s = d.createElement('script');
                                    s.src = 'https://https-lifeinsurance-adityabirlacapital-com.disqus.com/embed.js';
                                    s.setAttribute('data-timestamp', +new Date());
                                    (d.head || d.body).appendChild(s);
                                    })();
                                    `
                                }

                            </script>
                        </Helmet>
                    </>


                ) : null
            }




        </>


    )


}

export const getStaticPaths = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/revamp-article-pages?populate=*`)
    const articleInfo = await res.json()
    let pathsList = []

    articleInfo?.data && articleInfo.data.map((item) => {

        if (item?.attributes?.slug) {
            pathsList.push({ params: { category: item?.attributes?.category?.data?.attributes?.slug, slug: item?.attributes?.slug } })
        }


    })


    return {

        paths: [...pathsList],


        // paths: [
        //     {
        //         params: {
        //             category: 'index.js',
        //             slug: 'slug.js',
        //         },
        //     },
        // ],

        fallback: false
    }
}


export const getStaticProps = async ({ params }) => {

    let sideBarFullInfo, bottomBlockData, _sideBarForm, sidebarForm, _articles, _share, _blocks, _rightBlock, _form, _subscribe, _sideBar, _bottomBlock, blockItem, articleData, shareData, _footer, sideBarData, rightPageInfo, sidebarTitle, _header, _footerNavSection, _footerNavListItems, _headerCategories, _headerProducts, _primaryNavInfo, _headerNavLists, _globalInfos, _topGlobalItems, _topGlobalSolutions, _faq, readAloudData, _audioPlayer, audioPlayerData, _articleFeatureImage;

    try {

        const slug = params?.slug
        console.log("PRE FETCH")
        const [articles, share, blocks, articleFeatureImage,bottomBlocks, rightBlocks, sideBar, subscribeNewsletter, formsData, footer, footerNavSection, footerNavListItems, sideBarForm, header, headerCategories, headerProducts, headerNavLists, globalInfos, topGlobalItems, topGlobalSolutions, faq, audioPlayer] = await Promise.all([

            fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/revamp-article-pages?populate=*`),
            fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/revamp-article-pages?populate[ArticleShare][populate]=*`),
            fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/revamp-article-pages?populate[blocks][populate]=*`),
            fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/revamp-article-pages?populate=blocks.ArticleFeatureWithImgDetails.FeatureImg`),
            fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/revamp-article-pages?populate[bottom_block][populate]=*`),
            fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/sidebars?populate[rightBlocks][populate]=*`),
            fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/sidebars?populate=*`),
            fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/subscribe-newsletter?populate=*`),
            fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/forms?populate=*`),
            // fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/footer?populate=*`),
            // fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/footer?populate[footerBlock][populate]=*`),
            fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/footer?[footerBlock][populate]=*&populate[FooterSocialMediaIconsList][populate]=*`),
            fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/footer-nav-sections?populate[FooterNavContent][populate]=*`),
            fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/footer-nav-list-items?populate=*`),
            // fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/footer-nav-sections?populate=*`),
            fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/sidebars?populate[form][populate]=*`),
            fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/header?populate=*`),
            // fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/header?populate[TopGlobalNav][populate]=*`),
            // fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/absli-header-categories?populate=*`),
            fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/absli-header-categories?populate[ABSLIHeaderCategoryBlock][populate]=*`),
            fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/absli-header-products?populate=*`),
            fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/abcl-header-nav-lists?populate=*`),
            fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/global-info?populate=*`),
            fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/abcl-top-global-items?populate=*`),
            fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/abcl-top-global-solution-lists?populate[TopGlobalSolutionList][populate]=*&populate[abcl_top_global_item][populate]=*`),
            fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/faqs?populate=*`),
            fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/revamp-article-pages?populate[audio_player][populate]=*`)


        ])

        console.log("POST FETCH")

        _articles = await articles.json()
        _share = await share.json()
        _blocks = await blocks.json()
        _articleFeatureImage = await articleFeatureImage.json()
        _bottomBlock = await bottomBlocks.json()
        _rightBlock = await rightBlocks.json()
        _sideBar = await sideBar.json()
        _subscribe = await subscribeNewsletter.json()
        _form = await formsData.json()
        _footer = await footer.json()
        _footerNavSection = await footerNavSection.json()
        _footerNavListItems = await footerNavListItems.json()
        _sideBarForm = await sideBarForm.json()
        _header = await header.json()
        // _topGlobalNav = await topGlobalNav.json()
        _headerCategories = await headerCategories.json()
        _headerProducts = await headerProducts.json()
        _headerNavLists = await headerNavLists.json()
        _primaryNavInfo = { 'headerCategories': _headerCategories, 'headerProducts': _headerProducts }
        _globalInfos = await globalInfos.json()
        _topGlobalItems = await topGlobalItems.json()
        _topGlobalSolutions = await topGlobalSolutions.json()
        _faq = await faq.json()
        _audioPlayer = await audioPlayer.json()




        if (_footer?.data?.attributes && _footerNavSection && _footerNavListItems) {

            _footer.data.attributes.footerNavSection = _footerNavSection?.data[0].attributes
            _footer.data.attributes.footerNavListItems = _footerNavListItems


        }

        if (_header?.data?.attributes) {

            // _header.data.attributes.TopGlobalNav = _topGlobalNav?.data?.attributes?.TopGlobalNav
            _header.data.attributes.TopGlobalItems = _topGlobalItems
            _header.data.attributes.TopGlobalSolutions = _topGlobalSolutions
            _header.data.attributes.HeaderNavLists = _headerNavLists
            _header.data.attributes.ContactNo = _globalInfos?.data?.attributes?.ContactNo
            _header.data.attributes.LoginURL = _globalInfos?.data?.attributes?.LoginURL
            _header.data.attributes.PayPremiumTitle = _globalInfos?.data?.attributes?.PayPremiumTitle
            _header.data.attributes.PayPremiumURL = _globalInfos?.data?.attributes?.PayPremiumURL
            _header.data.attributes.MMPTitle = _globalInfos?.data?.attributes?.MMPTitle
            _header.data.attributes.MMPURL = _globalInfos?.data?.attributes?.MMPURL
            // _header.data.attributes.ContactNo = _globalInfos?.data?.attributes?.ContactNo
        }

        if (_header?.data?.attributes) {

            _header.data.attributes.PrimaryNav = _primaryNavInfo
        }

        _articles.data.map((item) => {

            if (item?.attributes?.slug === slug) {

                articleData = item
                if (_footer.data.attributes) {
                    _footer.data.attributes.footerLogo = item?.attributes?.FooterLogo

                }

                //Read Aloud
                if (item?.attributes?.read_aloud) {
                    readAloudData = item?.attributes?.read_aloud
                }



            }

        })

        _share.data.map((item) => {

            if (item?.attributes?.slug === slug) {

                shareData = item
            }


        })

        _audioPlayer.data.map((item) => {

            if (item?.attributes?.slug === slug) {
                audioPlayerData = item?.attributes?.audio_player
            }

        })

        //    console.log("bottom block",_bottomBlock)

        _bottomBlock.data.map((item) => {

            if ((item?.attributes?.slug === slug)) {

                // console.log("item bottom block",item.attributes.bottom_block)

                bottomBlockData = item?.attributes?.bottom_block

            }


        })



        _sideBar.data.map((item) => {


            item?.attributes?.categories && item?.attributes?.categories?.data.map((category) => {


                if (category?.attributes?.slug === params?.category) {

                    sideBarData = item

                    sidebarTitle = item?.attributes?.sidebarTitle
                }



            }

            )



        })


        _rightBlock.data.map((item) => {

            if (item?.attributes?.sidebarTitle === sidebarTitle) {
                rightPageInfo = item
            }
        })

        _sideBarForm.data.map((item) => {

            if (item?.attributes?.sidebarTitle === sidebarTitle) {
                sidebarForm = item
            }

        })



        sideBarFullInfo = { ...sideBarData }

        if (sideBarFullInfo && sideBarFullInfo.attributes && sideBarFullInfo.attributes.rightBlocks) {

            sideBarFullInfo.attributes.rightBlocks = rightPageInfo?.attributes?.rightBlocks

        }
        if (sideBarFullInfo && sideBarFullInfo.attributes && sideBarFullInfo.attributes.form) {

            sideBarFullInfo.attributes.form = sidebarForm?.attributes?.form

        }





        _blocks?.data?.map((item) => {
            if (item?.attributes?.slug === slug) {
                blockItem = item

                let articleBlock = _articleFeatureImage?.data?.filter((articleFeatureImg) => {
                    return articleFeatureImg?.id === item?.id
                })

                /* LOGIC FOR ARTICLE FEATURE IMAGE ADDITION BELOW STARTS */
                if(blockItem?.attributes?.blocks){
                    blockItem.attributes.blocks = articleBlock[0]?.attributes?.blocks
                }

                /* LOGIC FOR ARTICLE FEATURE IMAGE ADDITION BELOW ENDS */
                

                /* LOGIC FOR FAQ FILTERING FOR ARTICLE STARTS*/

                _faq?.data.map((faqItem) => {


                    item?.attributes?.blocks.map((_blockItem) => {

                        if (_blockItem?.faq?.data?.attributes) {
                            _blockItem.faq.data.attributes = { ...faqItem?.attributes }
                            // blockItem.faq.data.attributes.FAQData = faqItem?.attributes
                        }


                        // if(blockItem?.faq?.data?.id === faqItem?.id){
                        //     console.log("final faq check",faqItem)
                        // }
                    })




                })

                /* LOGIC FOR FAQ FILTERING FOR ARTICLE ENDS*/
            }
        })



        // console.log("ARTICLES == > ", _articles)
        // console.log("CALCULATORY == > ", _calculator)
        // console.log("SHARE ==>", _share)
        // console.log("BLOCKS == > ", blockItem)
        // console.log("BOTTOM BLOCKS ==>", _bottomBlock.data[0])
        // console.log("RIGHT BLOCK ==>", _rightBlock)
        // console.log("SIDE BAR ==>", sideBarData)
        // console.log("SUBSCRIBE NEWSLETTER ==>", _subscribe)
        // console.log("FORMS DATA ==>", _form)
        // console.log("FOOTER ==>", _footer)




    } catch (err) {

        console.log("static props error is ", err)

    }



    return {

        props: {

            articleProps: _articles || {},
            articleData: articleData || {},
            shareProps: shareData || {},
            pageData: blockItem || {},
            bottomPageData: bottomBlockData || {},
            sideBarData: sideBarFullInfo || {},
            subscribeData: _subscribe || {},
            formData: _form || {},
            footer: _footer || {},
            headerData: _header || {},
            readAloudData: readAloudData || {},
            audioPlayerData: audioPlayerData || {}



        }

    };
};

export default Article

