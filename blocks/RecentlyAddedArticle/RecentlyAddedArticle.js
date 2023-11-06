import React, { useState,useEffect } from 'react'

const RecentlyAddedArticle = (props) => {
  
  const [recentArticles,setRecentArticles] = useState([]);
  let filteredArr, currentPageCategory, currentURL;
  let articlesInfo = props?.articles

  const formatDate = (inputDate) => {

    
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
  
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
  
    return `${day} ${month} ${year}`;


  }

  /* SSG BASED RENDERING */

  useEffect(() => {
   

        if (typeof window !== "undefined") {
          currentURL = window.location.href.replace(/\/$/, '');
        }

        articlesInfo.data && articlesInfo.data.map((item) => {



          if (currentURL && item.attributes.slug && (item.attributes.slug === currentURL.slice(currentURL.lastIndexOf('/') + 1))) {

            currentPageCategory = item.attributes.category?.data?.attributes?.slug


          }


        })


        filteredArr = articlesInfo.data.filter((article) => {

          return article?.attributes?.category?.data?.attributes?.slug === currentPageCategory


        })

        filteredArr.sort(function (a, b) {
          var keyA = new Date(a.attributes.publishedAt);
          var keyB = new Date(b.attributes.publishedAt);
          if (keyA < keyB) return 1;
          if (keyA > keyB) return -1;
          return 0;
        });

             
        setRecentArticles([...filteredArr].slice(0, 5))

    
  }, [props])

  /* CLIENT SIDE RENDERING LATER FOR LAMBDA CASE BELOW FOR RECENTLY ADDED ARTICLES */

  // useEffect(() => {
  //   fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/revamp-article-pages?populate=*`)
  //     .then((res) => res.json())
  //     .then((articlesInfo) => {



  //       if (typeof window !== "undefined") {
  //         currentURL = window.location.href
  //       }

  //       articlesInfo.data && articlesInfo.data.map((item) => {



  //         if (currentURL && item.attributes.slug && (item.attributes.slug === currentURL.slice(currentURL.lastIndexOf('/') + 1))) {

  //           currentPageCategory = item.attributes.category?.data?.attributes?.slug


  //         }


  //       })


  //       filteredArr = articlesInfo.data.filter((article) => {

  //         return article?.attributes?.category?.data?.attributes?.slug === currentPageCategory


  //       })

  //       filteredArr.sort(function (a, b) {
  //         var keyA = new Date(a.attributes.publishedAt);
  //         var keyB = new Date(b.attributes.publishedAt);
  //         if (keyA < keyB) return 1;
  //         if (keyA > keyB) return -1;
  //         return 0;
  //       });

        
  //       setRecentArticles([...filteredArr].slice(0, 5))


  //     })
  // }, [props])


  return (

   
    <div className="revamp-digicls revamp-blog-articles revamp-articles-sections homepage-sections revamp-sectionsv2-container">
      <div className="homepage-sections-lt homepage-sections-inner">

        <div className="homepage-sections-title revamp-fontStyle13">{props.RecentlyAddedArticleTitle}</div>

        <div className="homepage-sectionsv2-box">

          {recentArticles.map((article, index) => (


            <div key={index}>
              <a href="/articles/term-insurance/how-rupee-depreciation-affects-your-term-insurance-premium" target="_self">
                <div className="homepage-sections-article col-sm-12">
                 
                <img src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${article?.attributes?.ThumbnailImage?.data && article?.attributes?.ThumbnailImage?.data[0]?.attributes.url}`} alt={`${article?.attributes?.ThumbnailImage?.data && article?.attributes?.ThumbnailImage?.data[0]?.attributes?.alternativeText ? article?.attributes?.ThumbnailImage?.data && article?.attributes?.ThumbnailImage?.data[0]?.attributes?.alternativeText : 'ARTICLE-THUMBNAIL-IMG'}`} className="ltbox lazy" />

                  <div className="rtbox">
                    <div>

                      <div className="upper">{formatDate(article?.attributes?.publishedAt)}</div>

                      <div className="lower">{article?.attributes?.ArticleH1Tag}</div>
                    </div>

                  </div>
                </div>
              </a>
            </div>

          ))}


        </div>


      </div>

    </div>
  )
}

export default RecentlyAddedArticle