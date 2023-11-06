import React, { useEffect } from 'react'

const FAQ = (props) => {


    useEffect(() => {
        function onCollapseChange() {
            let revampFaqContainers = document.querySelectorAll('.faq-outerdiv');
           

            for (let i = 0; i < revampFaqContainers.length; i++) {
                let revampFaqPanel = revampFaqContainers[i].querySelector('.revamp-faqpanel-group')

                let revampFaqListAttr = revampFaqPanel.getAttribute('id')

                let revampFaqList = document.querySelectorAll(`#${revampFaqListAttr} .revamp-faqpanel-collapse`);
               
                revampFaqList.forEach(function (element) {
                    
                    element.addEventListener('show.bs.collapse', function () {
                        // Equivalent to $(this)
                        var currentElement = element;
                        
                        // Find the parent '.revamp-faqpanel' and then its parent '.revamp-faqpanel-group'
                        var panelGroup = currentElement.closest('.revamp-faqpanel').closest('.revamp-faqpanel-group');

                        // Remove the 'revamp-faqactive' class from all elements with this class within the group
                        var activeElements = panelGroup.querySelectorAll('.revamp-faqactive');
                        activeElements.forEach(function (activeElement) {
                            activeElement.classList.remove('revamp-faqactive');
                        });

                        // Add the 'revamp-faqactive' class to the sibling '.revamp-faqpanel-heading'
                        var headingElement = currentElement.nextElementSibling;
                        if (headingElement.classList.contains('revamp-faqpanel-heading')) {
                            headingElement.classList.add('revamp-faqactive');
                        }
                    });

                    element.addEventListener('hide.bs.collapse', function () {
                        // Equivalent to $(this)
                        var currentElement = element;
                
                        // Find the sibling '.revamp-faqpanel-heading'
                        var headingElement = currentElement.nextElementSibling;
                        if (headingElement.classList.contains('revamp-faqpanel-heading')) {
                            headingElement.classList.remove('revamp-faqactive');
                        }
                    });
                });





            }
        }

        function onHiddenInfo() {
            let revampFaqContainer = document.querySelector('.revamp-digicls.faq-outerdiv');
            
            for(var x = 0; x<revampFaqContainer.length;x++){  
              let revampFaqList = document.querySelector(revampFaqContainer[x]).find('.revamp-faqpanel-group');
              
              document.querySelector(revampFaqList).each(function() {
                if (document.querySelector(this).children('.revamp-faqpanel-default').length < 6) {
                    document.querySelector(this).siblings('.present').hide(2000)
                    document.querySelector(this).siblings('.absent').hide(2000)
                    document.querySelector(this).find('.revamp-faqpanel-default:last-child').addClass('faq-last-margin')
                }
                else{
                  document.querySelector(this).find('.revamp-faqpanel-default:nth-child(5)').addClass('faq-last-margin')
                }
            });
      
            document.querySelector(revampFaqList).parent('.faq-innerdiv').find('.present').on('click', function(e) {
                e.preventDefault();
                document.querySelector(this).siblings('.revamp-faqpanel-group').find('.revamp-faqpanel-default').fadeIn()
                document.querySelector(this).siblings('.revamp-faqpanel-group').find('.faq-last-margin').removeClass('faq-last-margin')
                document.querySelector(this).siblings('.revamp-faqpanel-group').find('.revamp-faqpanel-default:last-child').addClass('faq-last-margin')
      
                document.querySelector(this).addClass('faq-hide').siblings('.absent').removeClass('faq-hide');
      
            })
      
            document.querySelector(revampFaqList).parent('.faq-innerdiv').find('.absent').on('click', function(e) {
                document.querySelector(this).siblings('.revamp-faqpanel-group').find('.revamp-faqpanel-default').hide()
                document.querySelector(this).siblings('.revamp-faqpanel-group').find('.faq-last-margin').removeClass('faq-last-margin')
                document.querySelector(this).siblings('.revamp-faqpanel-group').find('.revamp-faqpanel-default:nth-child(5)').addClass('faq-last-margin')
      
                document.querySelector(this).siblings('.revamp-faqpanel-group').find('.revamp-faqpanel-default:lt(5)').fadeIn(300)
                document.querySelector(this).addClass('faq-hide').siblings('.present').removeClass('faq-hide').addClass('faq-show1');
            })
            }     
          }
        
        if(document.querySelectorAll('.faq-outerdiv').length >= 1){
            onCollapseChange()
            onHiddenInfo()
          }

    })
    

const faqArray = props?.faq?.data?.attributes?.FAQTitleDescription;
// console.log("FAQ Array", faqArray)
// console.log("FAQ PROPS",props)
// console.log('faqs', props)
return (
    <div className="center-block revamp-digicls faq-outerdiv" data-section id="af4d2984e2e5437e859d513004674a63" style={{ backgroundColor: '#ffffff' }}>
        <div className="faq-innerdiv">
            <div className="faq-main1">
                <h2 className="faq-heading">{props?.faq?.data?.attributes?.FAQHeading}</h2>
            </div>

            <div className="revamp-faqpanel-group" id="accordianaf4d2984e2e5437e859d513004674a63">



                {/* <div class="revamp-faqpanel revamp-faqpanel-default">
                        <div class="revamp-faqpanel-heading  revamp-faqactive" id="heading1af4d2984e2e5437e859d513004674a63">
                            <div class="revamp-faqpanel-title">
                                <a role="button" data-toggle="collapse" href="#collapse1af4d2984e2e5437e859d513004674a63"
                                    aria-expanded="true" aria-controls="collapse1af4d2984e2e5437e859d513004674a63" data-target="#collapse1af4d2984e2e5437e859d513004674a63">
                                    {props?.faq?.data?.attributes?.FAQTitleDescription?.Title}
                                </a>
                            </div>
                        </div> */}
                {/* <div id="collapse1af4d2984e2e5437e859d513004674a63" class="revamp-faqpanel-collapse collapse show"
                            aria-labelledby="revamp-digicls-faq_af4d2984e2e5437e859d513004674a631" data-parent='#accordianaf4d2984e2e5437e859d513004674a63'>
                            <div class="revamp-faqpanel-body revamp-faqpanel-txt" id="revamp-digicls-faq_af4d2984e2e5437e859d513004674a631">
                                {props?.faq?.data?.attributes?.FAQTitleDescription[0] && props?.faq?.data?.attributes?.FAQTitleDescription[0]?.Description}
                            </div>
                        </div> */}
                {faqArray?.map((item, index) => {
                    let str = `heading${faqArray.indexOf(item) + 1}af4d2984e2e5437e859d513004674a63`;
                    let href = `collapse${faqArray.indexOf(item) + 1}af4d2984e2e5437e859d513004674a63`;
                    let ariaLabel = `revamp-digicls-faq_af4d2984e2e5437e859d513004674a63${faqArray.indexOf(item) + 1}`;
                    let descId = `revamp-digicls-faq_af4d2984e2e5437e859d513004674a63${faqArray.indexOf(item) + 1}`;
                    let hrefHash = `#${href}`;

                    return (
                        <div key={index} className="revamp-faqpanel revamp-faqpanel-default">
                            <div className="revamp-faqpanel-heading " id={str}>
                                <div className="revamp-faqpanel-title">
                                    <a role="button" data-toggle="collapse" href={hrefHash}
                                        aria-expanded="true" aria-controls={href} data-target={href}>
                                        {item?.Title}
                                    </a>
                                </div>
                            </div>
                            <div id={href} className="revamp-faqpanel-collapse collapse"
                                aria-labelledby={ariaLabel} data-parent='#accordianaf4d2984e2e5437e859d513004674a63'>
                                <div className="revamp-faqpanel-body revamp-faqpanel-txt" id={descId}>
                                    {item?.Description}
                                </div>
                            </div>
                        </div>
                    )

                })}
               
            </div>
            <div className="present faq-show1 faq-btn1">
                <span> Show All</span>
            </div>
            <div className="absent faq-show1 faq-hide faq-btn1">
                <span>Hide</span>
            </div>
        </div>
    </div>
)
}


export default FAQ;
