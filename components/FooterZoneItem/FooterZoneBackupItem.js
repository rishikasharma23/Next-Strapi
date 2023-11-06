import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const FooterZoneItem = (props) => {
  
    // return (
    //     <>Testing Footer Zone Item</>
    // )

    return (
        <>
            <div className="foot-link-set">
                <div className="foot-link-set__title headline-4">

                <a href={props.FooterBlockURL} className="foot-link-set__title-link" title={props.FooterNavListTitle} target="_self" />

                    {/* <ReactMarkdown
                        rehypePlugins={[rehypeRaw]}
                        components={{

                            a: ({ node, ...props }) => <a href={props.FooterBlockURL} className="foot-link-set__title-link" {...props} title={props.FooterNavListTitle} target="_self" />
                        }}
                    >
                        {props.FooterNavListTitle}
                    </ReactMarkdown> */}

                    {/* <a href="/group-insurance-policy" className="foot-link-set__title-link" title="Group Plans" target="_self">
                        Group Plans<span className="icon icon-arrow"></span>
                    </a> */}
                </div>
                {/* <div className="foot-link-set__cont">
                    <ul className="foot-link-set__list">

                        {
                            props.GroupPlansList.map((item) => (
                                <ReactMarkdown
                                rehypePlugins={[rehypeRaw]}
                                components={{
        
                                    li: ({ node, ...props }) => <li className="foot-link-set__item" {...props} />,
                                    a: ({ node, ...props }) => <a href={props.FooterBlockURL} className="foot-link-set__title-link" {...props} title="Group Plans" target="_self" />
                                    
                                }}
                            >
                               
        
                                {item.FooterListItem}
                            </ReactMarkdown>
                             


                            ))
                        }




                    </ul>
                </div> */}
            </div>
        </>
    )
}

export default FooterZoneItem