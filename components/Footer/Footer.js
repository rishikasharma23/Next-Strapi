import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import FooterDynamicZoneCol from '../shared/BlockManager/FooterDynamicZoneCol'

const Footer = ({ footerProps }) => {

    const [currentYear, setCurrentYear] = useState("")
    const [footerNavColNo, setFooterNavColNo] = useState(0)
    const [footerFirstNavCol, setFooterFirstNavCol] = useState([])
    const [footerSecondNavCol, setFooterSecondNavCol] = useState([])
    const [footerThirdNavCol, setFooterThirdNavCol] = useState([])
    const [footerFourthNavCol, setFooterFourthNavCol] = useState([])
    // const [footerNavCols,setFooterNavCols] = useState([])
    let footerNavCols = []


    useEffect(() => {

        const footerNavSectionFill = () => {

            let itemColNoMax = footerProps?.data?.attributes?.footerNavSection?.FooterNavContent[0]?.FooterNavListColNo
           
            footerProps?.data?.attributes?.footerNavSection?.FooterNavContent.map((item, index) => {
              

                itemColNoMax = Math.max(itemColNoMax, item?.FooterNavListColNo)
                if (item?.FooterNavListColNo === '1') {


                    let footerFilteredNavList = footerProps?.data?.attributes?.footerNavListItems?.data.filter((innerItem) => {
                        // console.log("item check",innerItem.attributes.NavCategoryTitle,item.FooterNavListTitle)
                        return innerItem.attributes.NavCategoryTitle === item.FooterNavListTitle
                    })

                    item.footerFilteredNavList = footerFilteredNavList
                    // item.FooterLogo = footerProps?.data?.attributes?.footerLogo


                   


                    setFooterFirstNavCol(prevItems => [...prevItems, item])

                    // setFooterNavCols(prevItems => [...prevItems,...footerFirstNavCol])

                    // setItems(prevItems => [...prevItems, newItem]);
                }
                else if (item?.FooterNavListColNo === '2') {
                    let footerFilteredNavList = footerProps?.data?.attributes?.footerNavListItems?.data.filter((innerItem) => {
                        // console.log("item check",innerItem.attributes.NavCategoryTitle,item.FooterNavListTitle)
                        return innerItem.attributes.NavCategoryTitle === item.FooterNavListTitle
                    })

                    item.footerFilteredNavList = footerFilteredNavList


                 


                    setFooterSecondNavCol(prevItems => [...prevItems, item])

                }
                else if (item?.FooterNavListColNo === '3') {

                   

                    let footerFilteredNavList = footerProps?.data?.attributes?.footerNavListItems?.data.filter((innerItem) => {
                        // console.log("item check",innerItem.attributes.NavCategoryTitle,item.FooterNavListTitle)
                        return innerItem.attributes.NavCategoryTitle === item.FooterNavListTitle
                    })

                    item.footerFilteredNavList = footerFilteredNavList




                    setFooterThirdNavCol(prevItems => [...prevItems, item])
                    // setFooterThirdNavCol(prevItems => [...prevItems, {'footerFilteredNavList': footerFilteredNavList}])

                }
                else if (item?.FooterNavListColNo === '4') {

                    let footerFilteredNavList = footerProps?.data?.attributes?.footerNavListItems?.data.filter((innerItem) => {
                        // console.log("item check",innerItem.attributes.NavCategoryTitle,item.FooterNavListTitle)
                        return innerItem.attributes.NavCategoryTitle === item.FooterNavListTitle
                    })

                    item.footerFilteredNavList = footerFilteredNavList


                   

                    setFooterFourthNavCol(prevItems => [...prevItems, item])

                }
               


            })
            // setFooterNavCol(prevItems => [...prevItems,...footerFirstNavCol,...footerSecondNavCol,...footerThirdNavCol,...footerFourthNavCol])

           
            // console.log("first nav col list",footerFirstNavCol)
            // console.log("second nav col list",footerSecondNavCol)
            // console.log("third nav col list",footerThirdNavCol)
            // console.log("fourth nav col list",footerFourthNavCol)


            setFooterNavColNo(itemColNoMax)


        }
        // console.log('footer use effect props', footerProps?.data?.attributes?.footerNavListItems)
       
        const footerNow = new Date();
        setCurrentYear(footerNow.getFullYear());
        function wbFooterAccordion() {
            
            const iconElements = document.querySelectorAll('.foot-link-set__title .foot-link-set__title-link .icon');
          

            iconElements.forEach(icon => {
               
                icon.addEventListener('click', function (e) {

                    e.preventDefault();
                    
                    const footLinkSet = this.closest('.foot-link-set');
                    const footLinkWrap = this.closest('.foot-link-wrap');
                    const isActive = footLinkSet.classList.contains('foot-link-set--active');

                    const allFootLinkSets = footLinkWrap.querySelectorAll('.foot-link-set');
                    const allFootLinkConts = footLinkWrap.querySelectorAll('.foot-link-set__cont');

                    allFootLinkSets.forEach(set => {
                        set.classList.remove('foot-link-set--active');
                    });

                    allFootLinkConts.forEach(cont => {
                        cont.style.display = 'none';
                    });

                    if (!isActive) {
                        footLinkSet.classList.add('foot-link-set--active');
                        footLinkSet.querySelector('.foot-link-set__cont').style.display = 'block';
                    }
                });
            });
        }
        wbFooterAccordion()
        var p = document.querySelectorAll('.foot-link-set__item .img-link-block .foot-link-set__link');

        p.forEach(function (element) {
            element.style.display = '-webkit-box';
            element.style.WebkitLineClamp = '2';
            element.style.WebkitBoxOrient = 'vertical';
            element.style.overflow = 'hidden';
        });
        footerNavSectionFill()



    }, [])




    return (

        <>
            {

                footerProps ? (
                    <>
                        {/* {console.log("first nav col list", footerFirstNavCol)}

                        {console.log("second nav col list", footerSecondNavCol)}

                        {console.log("fourth nav col list", footerFourthNavCol)}
                        {console.log("third nav col list", footerThirdNavCol)} */}


                        <div className="wb-footer">
                            <div className="container-fluid">
                                <div className="outerpadding">
                                    <div className="foot-link-wrap">
                                      

                                        <div className="foot-link-wrap__col">

                                           
                                            <div className="foot-link-set">
                                                <img src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${footerProps?.data?.attributes?.footerLogo?.data?.attributes?.url}`} className="" alt={footerProps?.data?.attributes?.footerLogo?.data?.attributes?.alternativeText} />

                                            </div>
                                            <FooterDynamicZoneCol footerDZProps={footerFirstNavCol} />



                                        </div>
                                        <div className="foot-link-wrap__col">

                                            
                                            <FooterDynamicZoneCol footerDZProps={footerSecondNavCol} />


                                        </div>

                                        <div className="foot-link-wrap__col">

                                            <FooterDynamicZoneCol footerDZProps={footerThirdNavCol} />



                                        </div>
                                        <div className="foot-link-wrap__col">

                                            <FooterDynamicZoneCol footerDZProps={footerFourthNavCol} />


                                        </div>

                                    </div>
                                    <div className="reg-office">
                                        <ReactMarkdown
                                            rehypePlugins={[rehypeRaw]}
                                            components={{
                                                p: ({ node, ...props }) => <p className='reg-office__desc' {...props} />,
                                                a: ({ node, ...props }) => <a {...props} />
                                            }}
                                        >
                                            {footerProps.data.attributes.registeredOfficeDetails}
                                        </ReactMarkdown>

                                    </div>
                                    <div className="aware-block">

                                        <ReactMarkdown
                                            rehypePlugins={[rehypeRaw]}
                                            components={{
                                                div: ({ node, ...props }) => <p className='aware-block__title' {...props} />,
                                                p: ({ node, ...props }) => <p className='aware-block__desc' {...props} />
                                            }}
                                        >
                                            {footerProps.data.attributes.awareBlockTxt}
                                        </ReactMarkdown>


                                    </div>
                                </div>
                            </div>
                        </div>

                        <footer>
                            <div className="footer-bottom-wrapper brand-dark-grey top-white">
                                <div className="container-fluid">
                                    <div className="outerpadding">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="upper-div">
                                                    <div className="footer-container">
                                                        <div className="footer-container__logo">

                                                        </div>
                                                        <div className="footer-container__links">


                                                            <div className="lcol">


                                                                <ReactMarkdown
                                                                    rehypePlugins={[rehypeRaw]}
                                                                    components={{
                                                                        a: ({ node, ...props }) => <a {...props} />
                                                                    }}
                                                                >
                                                                    {footerProps.data.attributes.FirstFooterContainerLinks}
                                                                </ReactMarkdown>




                                                            </div>
                                                            <div className="lcol">

                                                                <ReactMarkdown
                                                                    rehypePlugins={[rehypeRaw]}
                                                                    components={{
                                                                        a: ({ node, ...props }) => <a {...props} />
                                                                    }}
                                                                >
                                                                    {footerProps.data.attributes.SecondFooterContainerLinks}
                                                                </ReactMarkdown>

                                                            </div>
                                                            <div className="lcol">
                                                                <ReactMarkdown
                                                                    rehypePlugins={[rehypeRaw]}
                                                                    components={{
                                                                        a: ({ node, ...props }) => <a {...props} />
                                                                    }}
                                                                >
                                                                    {footerProps.data.attributes.ThirdFooterContainerLinks}
                                                                </ReactMarkdown>


                                                            </div>
                                                            <div className="lcol">
                                                                <ReactMarkdown
                                                                    rehypePlugins={[rehypeRaw]}
                                                                    components={{
                                                                        a: ({ node, ...props }) => <a {...props} />
                                                                    }}
                                                                >
                                                                    {footerProps.data.attributes.FourthFooterContainerLinks}
                                                                </ReactMarkdown>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="lower-div">
                                                    <div className="copyright">
                                                        <p className="caption">

                                                            <span><span>© <span className="footer__year">{currentYear} </span></span>
                                                                <span>{footerProps?.data?.attributes?.CopyrightTxt}</span>
                                                            </span>

                                                        </p>
                                                    </div>

                                                    <div className="socialicons">


                                                        <div className="contacttext">
                                                            <p className="caption">{footerProps.data.attributes.TollFreeTxt}</p>
                                                            <span className="icon icon-phone"></span>
                                                            <p className="caption" url={footerProps.data.attributes.ContactURL}><a href={`tel:${footerProps?.data?.attributes?.ContactNumber?.replaceAll(' ', '')}`}>{footerProps?.data?.attributes?.ContactNumber}</a></p>
                                                        </div>

                                                        <ul>
                                                            {
                                                                footerProps?.data?.attributes?.FooterSocialMediaIconsList?.map((footerItm, footerIndex) => (
                                                            
                                                                    <li key={footerIndex}>
                                                                        <a href={footerItm?.IconTitle} target="_blank">
                                                                            <span className={`icon ${footerItm?.IconsListDetails}`}></span>
                                                                        </a>
                                                                    </li>
                                                                ))
                                                            }
                                                           
                                                        </ul>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>



                    </>




                ) : null

            }

        </>
    )
}

export default Footer