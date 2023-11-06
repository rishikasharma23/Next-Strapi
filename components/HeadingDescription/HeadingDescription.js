import React from 'react'

const HeadingDescription = (props) => {
   
  return (
    <div className="illustration-outer revamp-digicls revamp-blog-articles revamp-articles-whybuyterm" data-section="" id="a538cf6637294546925ebc55f8f0976d">
        <h2 className="buy-pro-banner__title revamp-whybanner-title revamp-fontStyle14">{props.headingDescriptionProps['data'][0].attributes.ArticleTitleDescComp[0].Title}</h2>
        <div className="illustration-inner">
          <div className="buy-pro-banner">
            <p className="buy-pro-banner__desc revamp-fontStyle13">
                {props.headingDescriptionProps['data'][0].attributes.ArticleTitleDescComp[0].Description}
              {/* Term insurance is simple to understand and the purest form of life insurance. Basically, term insurance is an agreement between the insurance company and the policyholder in which the insurance company assures to pay the pre-defined sum of money (sum assured) to the nominee of the policyholder in case of the untimely demise of the policyholder during the specified term. The benefits are assured in return for the premium paid by the policyholder. The premium that you pay is for life protection and hence there would not be any survival or maturity benefits at the end of the term in case you survive the policy term. */}
            </p>

          </div>

        </div>
      </div>
  )
}

export default HeadingDescription