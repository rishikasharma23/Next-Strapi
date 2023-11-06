import React, { useState } from 'react'
import { useEffect, useRef } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ReadAloud from '../ReadAloud/ReadAloud';
// import './Card.css';
import { useRouter } from 'next/router';


const Card = ({info}) => {
    //  const [cardData, setCardData]=useState("");
    // console.log(props);
    // console.log(props.info.categories.data[0].attributes.articles.data[0].attributes.read_aloud.data.attributes.Text);
   
    // const card = props.info.categories.data[0].attributes.articles.data;

    // const cardRefs = useRef([]);
    // useEffect(() => {
    //     if (cardRefs.current.length === 0) return;

    //     let maxHeight = 0;
    //     cardRefs.current.forEach(card => {
    //         if (card?.offsetHeight > maxHeight) {
    //             maxHeight = card.offsetHeight;
    //         }
    //     });

    //     cardRefs.current.forEach(card => {
    //         if (card) card.style.height = `${maxHeight}px`;
    //     });
    // }, [card]);

    // useEffect(()=>
    // {
    //     fetch(`http://localhost:1337/api/categories?populate[articles][populate]=*&[filters][slug][$eq]=${category}`)
    //     .then(response=>response.json())
    //     .then(data=> setCardData(data));
    // },[])
    const a=[1,2,3];
    console.log(info.data);
    return (
        <div class="container-fluid">
            <div class="website-breadcrumb row mt-4 ps-0 ps-lg-5 mb-4">
                <nav className="breadcrum-comp">
                    <a href="/" className="breadcrum-comp__link" title="Home">Home</a>
                    <a href="/articles" className="breadcrum-comp__link" title="Articles">Articles</a>
                    <span className="breadcrum-comp__link">hi</span>
                </nav>
            </div>
            <div className="row mb-4 ps-4 ps-md-0 ps-lg-5">
                <h3>hi</h3>
            </div>
            <div className="article-list row d-flex justify-content-lg-left align-items-center mx-0 mx-md-2 mx-lg-5 gap-3">
                {a.map((cards, index) => {
                    return (
                        <div class="card-div col-12 col-md-5 col-lg-4 p-2">
                            <div class="card-shadow card ">
                            {/* ref={el => cardRefs.current[index] = el} */}
                                <div class="d-flex justify-content-center mb-2"><img src="https://abcscprod.azureedge.net/-/media/Project/ABSLI/Article-Images/Article-Banners/Term-Insurance-or-Endowment-Plan-T.webp?extension=webp&revision=e6a0e78b-d792-4764-931c-f915fe5d33bc&modified=20230828064422" style={{ width: "calc(15rem + 9vw)" }} className="card-img-top img-fluid" alt="..." /></div>
                                <div class="card-body mb-1 mb-lg-4 px-4 px-md-3">
                                    <h6 class="card-title" style={{ fontSize: "calc(0.8rem + 0.65vw)", fontFamily: "PF Handbook Pro" }}>hi</h6>
                                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                    <div class="card-end d-flex justify-content-between px-1 px-md-1" >
                                        {/* <ReadAloud readAloudData={cards.attributes.read_aloud} /> */}
                                        <div className="media-tile__likes d-flex align-items-center" data-itemid="{C9BE67A4-ECED-43E1-A32A-E2E20D652538}">
                                            <span className="media-tile__like-icon icon icon-like me-1"></span>
                                            <span className="media-tile__likes-count">7 UpVotes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        
    )
}

export default Card







































// import React, { useEffect } from 'react';
// import "../../styles/_card.scss";
// import "../../styles/_media-tiles.scss";
// import "../../styles/common-article.scss";
// import "../../styles/_global-variables.scss";
// import ReadAloud from '../ReadAloud/ReadAloud';


// const Card = (props) => {

// useEffect(() => {

//     function articleMediaBlogs() {


//         if (document.querySelectorAll('.media-tile.article-detail__item-list .media-title__CTABox').length >= 1) {

//             let mediaHeightArr = [];
//             let mediaTitleContainers = document.querySelectorAll('.media-tile.article-detail__item-list .media-tile__container');

//             mediaTitleContainers.forEach((container) => {
//                 mediaHeightArr.push(container.offsetHeight);
//             });

//             let maxHtMediaTitle = Math.max(...mediaHeightArr);

//             mediaTitleContainers.forEach((container) => {
//                 container.style.height = `${maxHtMediaTitle}px`;
//             });

//             document.querySelectorAll('.media-title__CTABox').forEach((ctaBox) => {
//                 ctaBox.closest('.media-tile.article-detail__item-list').querySelector('.media-tile__content.media-tile__content--blog').style.paddingRight = '2.2rem';
//             });

//             let mediaCTABoxes = document.querySelectorAll('.media-title__CTABox');
//             let mediaCTABlog = document.querySelectorAll('.media-title__CTABox').forEach((ctaBox) => {
//                 ctaBox.closest('.media-tile.article-detail__item-list').querySelector('.media-tile__content.media-tile__content--blog')
//             })



//             // let mediaCTABlog = document.querySelectorAll('.media-title__CTABox').closest('.media-tile.article-detail__item-list').querySelectorAll('.media-tile__content.media-tile__content--blog');
//             let mediaCTABlogArr = [];
//             let mediaCTAReadAloudArr = [];

//             mediaCTABlog?.forEach((blog) => {
//                 mediaCTABlogArr.push(blog.offsetHeight);
//             });

//             mediaCTABoxes?.forEach((ctaBox) => {
//                 mediaCTAReadAloudArr.push(ctaBox.offsetHeight);
//             });

//             let mediaCTABlogMaxLen = Math.max(...mediaCTABlogArr);
//             let mediaCTAReadAloudMaxLen = Math.max(...mediaCTAReadAloudArr);

//             mediaCTABlog?.forEach((blog) => {
//                 blog.style.height = `${mediaCTABlogMaxLen}px`;
//             });

//             mediaCTABoxes?.forEach((ctaBox) => {
//                 ctaBox.style.height = `${mediaCTAReadAloudMaxLen}px`;
//             });


//             let mediaCTABoxElements = document.querySelectorAll('.media-title__CTABox').forEach((mediaCTABox) => {

//                 mediaCTABox.closest('.media-tile.article-detail__item-list').querySelectorAll('.media-tile__content.media-tile__content--blog .media-title__CTABox .readAloudButton');
//             })

//             // let mediaCTABoxElements = document.querySelectorAll('.media-title__CTABox').closest('.media-tile.article-detail__item-list').querySelectorAll('.media-tile__content.media-tile__content--blog .media-title__CTABox .readAloudButton');

//             mediaCTABoxElements?.forEach((ctaBoxElement) => {
//                 if (ctaBoxElement.innerHTML.trim() === "") {
//                     ctaBoxElement.style.backgroundColor = 'unset';
//                 }
//             });
//         }

//     }

//     articleMediaBlogs()


// }, [])

//     // console.log(props);
//     // console.log(props);
//     // console.log(props.info.attributes.slug);
//     // console.log(props.info.attributes.articles.data[0].attributes.ArticleH1Tag)
//     const card = props.info.attributes.articles.data;
//     // const read_aloud=card[0].attributes.read_aloud.data.attributes.Text;
//     // console.log(props.info.attributes.articles.data);
//     // console.log(props.info.attributes.articles.data);
//     return (
//         <>
{/* <div className="website-breadcrumb">
    <nav className="breadcrum-comp">
        <a href="/" className="breadcrum-comp__link" title="Home">Home</a>
        <a href="/articles" className="breadcrum-comp__link" title="Articles">Articles</a>
        <span className="breadcrum-comp__link" title="Term Insurance">{props.info.attributes.categoryheading}</span>
    </nav>
</div> */}
//             <div className="article-detail">
//                 <div className="article-detail__title-wrap">
//                     <div className="spacer-breakpoint divider m-b-26 m-b-lg-26 m-b-md-26 m-b-sm-18 m-b-xs-18" style={{ height: "0px", width: "100%" }}></div>
//                     <div className="title-wrap article-detail__title-wrap">
//                         <h2 className="title-wrap__title">{props.info.attributes.categoryheading}</h2>
//                     </div>
//                 </div>
//                 <div className="article-detail__info-wrap">
//                     <div className="media-tile article-detail__item-list">
//                         {card.map((cards) => {
//                             return (
//                                 <div className="media-tile__container media-tile--card article-detail__item-tile">
//                                     <div className="media-tile__wrapper media-tile__wrapper--has-link media-tile__wrapper--blog article-detail__wrapper--blog">
//                                         <div className="media-tile__media media-tile__media--blog media-tile__media--liked  article-detail__media--blog">
//                                             <img src="https://abcscprod.azureedge.net/-/media/Project/ABSLI/Article-Images/Article-Banners/Term-Insurance-or-Endowment-Plan-T.webp?extension=webp&revision=e6a0e78b-d792-4764-931c-f915fe5d33bc&modified=20230828064422" alt="dummy alt text" title="dummy title text" />
//                                         </div>
//                                         <div className="media-tile__content media-tile__content--blog">
//                                             <div className="media-tile__title media-tile__title--blog">
//                                                 <span>{cards.attributes.ArticleH1Tag}</span>
//                                                 <span className="icon icon-right-arrow media-tile__title--icon"></span>
//                                             </div>
//                                             <div className="media-title__CTABox">
//                                                 <ReadAloud readAloudData={cards.attributes.read_aloud}/>
//                                                 <div className="media-tile__likes" data-itemid="{C9BE67A4-ECED-43E1-A32A-E2E20D652538}">
//                                                     <span className="media-tile__like-icon icon icon-like"></span>
//                                                     <span className="media-tile__likes-count">7 UpVotes</span>
//                                                 </div>
//                                             </div>
//                                             <a href="#" title="dummy title text" className="media-tile__link"></a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Card
