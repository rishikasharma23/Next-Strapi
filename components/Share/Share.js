import React, { useEffect } from 'react'

const Share = ({ shareProps }) => {

    useEffect(() => {


        function shareLeadFormProd(titleTxt) {

            var viewportWidth = window.innerWidth;

            if (viewportWidth < 768) {

                document.querySelectorAll('.lead-form-share').forEach(function(element) {
                    element.addEventListener('click', function(e) {
                        e.preventDefault();
                        
                        if (typeof navigator.share === 'undefined') {
                            console.log("No share API available!");
                        } else {
                            console.log("logging app");
                            
                            navigator.share({
                                title: titleTxt,
                                url: '',
                                text: 'Shared with Native Share API'
                            })
                            .then(function() {
                                console.log("Share success!");
                            })
                            .catch(function() {
                                console.log("Share failure!");
                            });
                        }
                    });
                });
                




            }


        }

        shareLeadFormProd('ARTICLES DETAILS')


    }, [])

    


    return (



        <div className="lead-form-share revamp-articles-share">
            <img src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/uploads/Share_ebff024e4c.svg`} alt="Share Article" />

            <div className="revamp-fontStyle9">{shareProps && shareProps.ShareTitle}</div>
            <div className="lead-form-share-menu__menu">
                <p className="share-menu__label">{shareProps && shareProps.ShareDropdownTxt}</p>
                <ul className="share-menu__link-wrap">

                    {
                        shareProps?.IconsList && shareProps.IconsList?.map((shareObject, index) => (

                            <li className="share-menu__link-item" key={index}>

                                <a href="#" className="share-menu__item-link st-custom-button" data-network={shareObject.IconTitle && shareObject.IconTitle.toLowerCase()}>

                                    <span className={`share-menu__icon icon ${shareObject?.IconsListDetails}`}></span>

                                    <span className="share-menu__text">{shareObject.IconTitle}</span>
                                </a>
                            </li>


                        ))

                    }



                </ul>

            </div>
        </div>
    )
}

export default Share