"use client"; 
import { output } from '@/next.config'
import React, { useState, useEffect } from 'react'
import '../../styles/breadcrumb.scss'


const ArticleBreadCrumb = (props) => {

  
  const [category, setCategory] = useState("");
  const [capitalizedCategory, setCapitalizedCategory] = useState("");


  useEffect(() => {

    if(props?.breadcrumbDetail?.category && props.breadcrumbDetail.category?.data){
      setCategory(props.breadcrumbDetail.category?.data?.attributes?.slug);

    }

      function capitalizeFirstLetters(inputString) {
        return inputString.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
      }
     
      let capitalizedValue = capitalizeFirstLetters(category.split('-').join(' '));
      setCapitalizedCategory(capitalizedValue);
     

  }, [props,category])


  return (

    <div className="website-breadcrumb">
      <nav className="breadcrum-comp">
        <a href="/" className="breadcrum-comp__link" title="Home">Home</a>
        <a href="/articles" className="breadcrum-comp__link" title="Articles">Articles</a>
        <a href={`/articles/${category}`} className="breadcrum-comp__link" title={capitalizedCategory}>{capitalizedCategory}</a>
        <span className="breadcrum-comp__link" title={props?.breadcrumbDetail && props?.breadcrumbDetail?.ArticleH1Tag}>{props?.breadcrumbDetail && props?.breadcrumbDetail?.ArticleH1Tag}</span>
      </nav>
    </div>
  )
}



export default ArticleBreadCrumb