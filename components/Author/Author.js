import React from 'react'

const AboutAuthor = ({ authorProps }) => {


    return (
       
        authorProps && authorProps.data.map((item,index) => (

            <div key={index} id="995a200d0fb24961a72d9a9204ecd800" className="author revamp-digicls revamp-blog-articles revamp-articles-author">
                <h3 className="author__title revamp-fontStyle14">{item.attributes ? item.attributes.Title : null}</h3>
                <div className="author__info">
                    <div className="author__img-wrap">

                        <img className="author__img" data-src="https://abcscprod.azureedge.net/-/media/Project/ABSLI/Article-Images/About-author.webp?extension=webp&amp;revision=9f6b1aa0-6ef2-4e2c-ae23-e896cdec5322&amp;modified=20221018122524" alt="Author" title="ABSLI" src="https://abcscprod.azureedge.net/-/media/Project/ABSLI/Article-Images/About-author.webp?extension=webp&amp;revision=9f6b1aa0-6ef2-4e2c-ae23-e896cdec5322&amp;modified=20221018122524" />

                    </div>
                    <div className="author__info-wrap">
                        <label className="author__name revamp-fontStyle9">{item.attributes ? item.attributes.Description : null}</label>
                        <span className="author__designation revamp-fontStyle10"> </span>
                    </div>
                </div>
            </div>


        ))


    )
}


export default AboutAuthor