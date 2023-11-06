import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'


const ProductPlanComponent = (props) => {

    
    return (
        <>
            <div className="calc-premium-outer revamp-digicls revamp-ourterm-container" data-section id="revamp-our-term-plans">

                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                    <div className="calc-premium-container revamp-ourterm-height panel panel-default">


                        <div className="revamp-our-termplan">

                            <div className="revamp-ourtermlan-inner first">

                                <ReactMarkdown
                                    rehypePlugins={[rehypeRaw]}
                                    components={{

                                        h2: ({ node, ...props }) => <h2 className='revamp-fontStyle17 ' {...props} />,
                                        p: ({ node, ...props }) => <p className='second' {...props} />


                                    }}
                                >
                                    {props.ProductHeading}
                                </ReactMarkdown>
                            </div>

                            <div className="revamp-ourtermlan-inner third">

                                <div className="homepage-lifecoversec">

                                    <div className="revamp-mob-ourterm">

                                        {
                                            props.ArticleFeatureWithImg.map((item,index) => (


                                                <div className="homepage-lifecover__innner" key={index}>


                                                    <img className="homepage-formimg" src="https://abcscprod.azureedge.net/-/media/Project/ABSLI/Article-Images/Icon-set/Icon-Covid19.webp?extension=webp&revision=575da76d-d282-4da5-b18d-ded2f756fbcd&modified=20220214105731" alt="" />

                                                    <div className="homepage-covertxt">

                                                        <ReactMarkdown
                                                            rehypePlugins={[rehypeRaw]}
                                                            components={{

                                                                div: ({ node, ...props }) => <div className='homepage-covertxt ' {...props} />

                                                            }}
                                                        >
                                                            {item.Description}
                                                        </ReactMarkdown>
                                                    </div>



                                                </div>
                                            )


                                            )
                                        }

                                    </div>

                                </div>

                            </div>
                            <div className="revamp-ourtermlan-inner fourth">

                                <div className="revamp-lt">

                                    <ReactMarkdown
                                        rehypePlugins={[rehypeRaw]}
                                        components={{


                                            div: ({ node, ...props }) => <div className='' {...props} />


                                        }}
                                    >
                                        {props.LifeCoverTxt}
                                    </ReactMarkdown>

                                </div>
                                <div className="revamp-rt">

                                    <div className="revamp-lt">

                                        <ReactMarkdown
                                            rehypePlugins={[rehypeRaw]}
                                            components={{


                                                div: ({ node, ...props }) => <div className='' {...props} />


                                            }}
                                        >
                                            {props.PremiumTxt}
                                        </ReactMarkdown>

                                    </div>



                                </div>

                            </div>
                            <div className="revamp-exploreplan">
                                <div>
                                    <a href={props.ActionButton.ActionURL} className="button button-brown act-btn" >
                                        <img src={props.ActionButton.ImageURL} alt="ICON-CLICK" />
                                        {props.ActionButton.ButtonTxt}
                                    </a>
                                </div>
                                <div>
                                    <ReactMarkdown
                                        rehypePlugins={[rehypeRaw]}
                                        components={{

                                            p: ({ node, ...props }) => <p className='revamp-fontStyle17' {...props} />

                                        }}
                                    >
                                        {props.AnchorTagURL}
                                    </ReactMarkdown>


                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ProductPlanComponent