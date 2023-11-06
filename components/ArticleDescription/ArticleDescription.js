import React from 'react'
// import './ArticleDescription.css'

const ArticleDescripion = (props) => {
    // return repo.stargazers_count   
    return (
        <div className="illustration-outer revamp-digicls revamp-blog-articles revamp-articles-whybuyterm" data-section="" id="c776e69fc02a4305812f25d40dd7d7f8">
            <h2 className="buy-pro-banner__title revamp-whybanner-title revamp-fontStyle14"></h2>
            <div className="illustration-inner">
                <div className="buy-pro-banner">
                    <p className="buy-pro-banner__desc revamp-fontStyle13">


                        {props.description && props.description['data'][0].attributes.ArticleDescription}

                        {/* Young professionals often face uncertainty and stress when it comes to managing their finances. One of the fundamental steps of planning your finances at the early stage of your career is to understand the importance of availing the life protection coverage. Before you plan your finances for future goals, it is important to avail of life insurance coverage to financially shield your family against the uncertainties of life such as sudden untimely demise. */}
                    </p>

                </div>

            </div>
        </div>
    )
}




export default ArticleDescripion