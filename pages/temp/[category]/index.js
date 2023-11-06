import React, { Suspense, useEffect, useState } from 'react'
import { gql } from '@apollo/client';
import createApolloClient from '../../../lib/apolloClient.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../components/Card/Card.css';
import Card from '../../../components/Card/Card.js';

const index = (props) => {
  const client = createApolloClient();
  const {category}=props;
  const [cardData, setCardData]=useState("");

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const { data } = await client.query({
    //       query: gql`
    //         query GetCategoryBySlug($slugValue: String!) {
    //           categories(filters: { slug: { eq: $slugValue } }) {
    //             data {
    //               attributes {
    //                 slug 
    //                 categoryheading
    //                 articles {
    //                   data {
    //                     attributes {
    //                       ArticleH1Tag
    //                       read_aloud {
    //                         data {
    //                           attributes {
    //                             Text
    //                           }
    //                         }
    //                       }
    //                     }
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       `,
    //       variables: {
    //         slugValue: category,
    //       },
    //     });

    //     console.log("data",data);
    //     setCardData(data);
    //     console.log("statedata", cardData);

    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };

    // fetchData();

    fetch(`http://localhost:1337/api/categories?populate[articles][populate]=*&[filters][slug][$eq]=${category}`)
    .then(response=> response.json())
    .then(data=>setCardData(data))
  }, []); 

  // useEffect(() => {
  //   console.log("Updated state data", cardData);
  // }, [cardData])

  return (
    <div>
      <Card info={cardData}/>
  </div>  
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:1337/api/categories');

  const categories = await res.json();

  const paths = categories?.data?.map((category) => ({
    params: { category: category?.attributes?.slug},
  }));
  return {
    paths,
    fallback: false, 
  };
}

export async function getStaticProps(context) {
  // console.log(context);
  // console.log("QUERY",context.query?.page)
  // const page = context.query?.page || 1;
  // const {category}= context.params;
  // console.log("CATEGORY PARAMS",category)
  // const {slug}=context.params;
  
  // console.log("page", page);
  // const page = context.query?.page;
  // console.log("hi" ,page);
  // console.log("hi",category);
  // console.log("hi",category);
  
  // const res = await fetch('http://localhost:1337/api/categories?populate[articles][populate]=*')
  // const posts = await res.json();
  // const {data}=posts;
  // // console.log(data);
  // const categoryData = data.find(item => item.attributes.slug === category);
  // console.log(categoryData);
  const {category}= context.params;
  // const client = createApolloClient();
  // const { data } = await client.query({
  //   query: gql`
  //   query GetCategoryBySlug($slugValue: String!) {
  //     categories(filters: { slug: { eq: $slugValue } })
  //       {
  //         data
  //         {
  //           attributes
  //           {
  //             slug 
  //             categoryheading
  //             articles {
  //              data
  //               {
  //                 attributes
  //                 {
  //                   ArticleH1Tag
  //                   read_aloud
  //                   {
  //                     data
  //                     {
  //                       attributes
  //                       {
  //                         Text
  //                       }
  //                     }
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `,
  //   variables: {
  //     slugValue: category
  //   }
  // });

  return {
    props: {
      category,
    },
  }
}

export default index