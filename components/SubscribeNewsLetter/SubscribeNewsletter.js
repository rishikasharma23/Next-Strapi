import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const SubscribeNewsletter = (props) => {

   
    useEffect(() => {

        function subscriberEmailValidate() {
            const emailInput = document.querySelector('.revamp-articles-subscribe .revamp-lf-email input');
            const formWrapper = emailInput.closest('.abc-form');
            const email = formWrapper.querySelector('.revamp-lf-email input');

            const validateEmail = (email) => {
                let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
                return regex.test(email.toLowerCase());
            };

            var viewportWidth = window.innerWidth;

            if (viewportWidth < 768) {
                var btn = emailInput.closest('.form-sub-wrapper').querySelector('.call-me-button .articles-mobile-placeholder');
            }
            else{

                var btn = emailInput.closest('.form-sub-wrapper').querySelector('.call-me-button .articles-desktop-placeholder');

            }

            // var btn = emailInput.closest('.form-sub-wrapper').querySelector('.call-me-button button');

            emailInput.addEventListener('keydown', function () {
                
                if (validateEmail(email.value)) {
                   
                    formWrapper.querySelector('.error').classList.add('lead-form-product-hide');
                    emailInput.parentNode.classList.remove('bgcolorError');
                    btn.removeAttribute('disabled');
                    btn.classList.remove('disabled');

                    btn.addEventListener('click', function () {

                        formWrapper.closest('.articles-subscribeBox').classList.add('d-none');
                        formWrapper.closest('.revamp-articles-subscribe').querySelector('.articles-subscribeHeading').classList.add('d-none');
                        formWrapper.closest('.revamp-articles-subscribe').querySelector('.articles-subscribeThanxBox').classList.remove('d-none');
                    });
                } else {
                    
                    if (formWrapper.querySelector('.lead-form-product-hide')) {
                        formWrapper.querySelector('.lead-form-product-hide').classList.remove('lead-form-product-hide');


                    }

                    emailInput.parentNode.classList.add('bgcolorError');
                    btn.setAttribute('disabled', 'disabled');
                    btn.classList.add('disabled');
                }
            });
        }


        subscriberEmailValidate()

    }, [])


    return (
        <>


            <div className="revamp-digicls revamp-blog-articles revamp-articles-subscribe lead-form-outerdiv">

                <div>
                    <div className="articles-subscribeHeading">

                        <ReactMarkdown
                            rehypePlugins={[rehypeRaw]}
                            components={{
                                h2: ({ node, ...props }) => <h2 className='revamp-fontStyle6' {...props} />,
                                p: ({ node, ...props }) => <p className='revamp-fontStyle17' {...props} />

                            }}
                        >
                            {props?.SubscribeNewsletterProps?.HeadingDescription}
                        </ReactMarkdown>



                    </div>

                    <div className="articles-subscribeThanxBox d-none">

                        <ReactMarkdown
                            rehypePlugins={[rehypeRaw]}
                            components={{
                                h2: ({ node, ...props }) => <h2 className='revamp-fontStyle6' {...props} />,
                                p: ({ node, ...props }) => <p className='revamp-fontStyle17' {...props} />

                            }}
                        >
                            {props?.SubscribeNewsletterProps?.ThankYouDescriptionTxt}
                        </ReactMarkdown>




                    </div>

                    <div className="articles-subscribeBox">


                        <div className="lead-form-product">
                            <div className="lead-form-product__container">

                                <div className="lead-form-product__wrap">
                                    <form className="abc-form abc-form--lead" autoComplete="off" noValidate="novalidate">
                                        <div className="form-sub-wrapper lf1">

                                            <div className="revamp-lf-email form-group form-group--no col-12">

                                                <div className="input-group input-group--v2 floating-label">


                                                    <input type="email" name="subscriber-email" id="subscriber-email" className="
                          form-control
                          form-group__placeholder
                        
                         
                          floating-input
                        " data-msg-required="This field is required" data-msg-minlength="Please enter a valid Email." placeholder=" " />
                                                    <span className=""></span>
                                                    <label className="revamp-label">Enter your Email</label>


                                                </div>
                                                <div id="mobSpan" className="error lead-form-product-hide">
                                                    {props?.SubscribeNewsletterProps?.ErrorFieldTxt}
                                                </div>


                                            </div>









                                            <div className="call-me-button form-group">
                                                <button disabled className="
                          button button-brown
                          articles-desktop-placeholder
                          disabled
                          submit-agree-leadformprod
                        " type="button">
                                                    {props?.SubscribeNewsletterProps?.BtnFieldTxt}
                                                </button>
                                                <button disabled className="
                      button button-brown
                      articles-mobile-placeholder
                      disabled
                      submit-agree-leadformprod
                    " type="button">

                                                    <img className="lazy" src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${props.SubscribeNewsletterProps && props.SubscribeNewsletterProps.SubscribeNewsletterBtn?.data?.attributes?.url}`} alt={props.SubscribeNewsletterProps && props.SubscribeNewsletterProps?.SubscribeNewsletterBtn?.data?.attributes?.alternativeText} />

                                                </button>

                                            </div>
                                        </div>





                                    </form>
                                </div>
                            </div>

                        </div>



                    </div>
                </div>









            </div>
        </>
    )
}

export default SubscribeNewsletter