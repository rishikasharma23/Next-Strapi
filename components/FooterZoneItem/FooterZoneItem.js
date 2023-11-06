import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const FooterZoneItem = (props) => {

   
    const disableLinkRedirection = (e) => {
        e.preventDefault()
    }
    // return (
    //     <>Testing Footer Zone Item</>
    // )

    return (
        <>
            <div className="foot-link-set">
                <div className="foot-link-set__title headline-4">

                    <a href={props.FooterNavTitleURL ? props.FooterNavTitleURL : "#javascript"} className="foot-link-set__title-link" title={props.FooterNavListTitle} target="_self">
                        {props.FooterNavListTitle}
                        <span className="icon icon-arrow"></span>
                    </a>


                </div>
                <div className="foot-link-set__cont">
                    <ul className="foot-link-set__list">

                        {
                            // console.log("footer zone info",props.footerFilteredNavList[0].attributes.FooterNavListItem)
                            props?.footerFilteredNavList[0]?.attributes?.FooterNavListItem.map((item, index) => (
                                // console.log("filtered info item",item)
                                
                                <li key={index} className="foot-link-set__item">
                                    <a href={item?.FooterNavListURL} title={item?.FooterNavListTitle} className="foot-link-set__link" target="_self">{item?.FooterNavListTitle}</a>
                                </li>

                            ))
                        }


                    </ul>
                </div>
            </div>
        </>
    )
}

export default FooterZoneItem