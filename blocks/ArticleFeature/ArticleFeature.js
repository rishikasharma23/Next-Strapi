import React from 'react'
import ReactMarkdown from 'react-markdown'


const ArticleFeature = (props) => {

  const articleFeatureArr = props?.ArticleFeatureWithImgDetails
  
  return (
   
    <div className="product1-outer-layout  revamp-digicls" data-section="" id="" style={{ backgroundColor: '#ffffff' }}>
      <div className="product1-layout">
        <div className="product1-div">

          <ReactMarkdown
            components={{
              h2: ({ node, ...props }) => <h2 className='product1-heading' {...props} />,
              p: ({node,...props})=><p className='product1-para'/>
            }}
          >
            {props.HeadingDescription}
          </ReactMarkdown>



        </div>


        <div className="product1-outerdiv" style={{ display: 'flex', flexFlow: 'row wrap' }}>
        
        {articleFeatureArr.map((item,index)=>(

          
         
         <div className="product1-container" key={index} style={{ width: '47%' }}>
         <div className="product1-innerbox">
           <img src={item?.FeatureImg?.data?.attributes?.url ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item?.FeatureImg?.data?.attributes?.url}` : `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/uploads/Icon_Bullet_6c0910fad3.svg`} className="lazy img2" style={{ width: '24px', height: '24px', flexShrink: '0', marginRight: '16px' }} alt="iconbullet" />
           <div className="txt1">
             <div className="upper1">
              {item.Title}
             </div>
             <div className="lower1">
              {item.Description}
             </div>
           </div>
         </div>
       </div>
         

        ))}
        
      
        </div>
      </div>
    </div>
  )
}

export default ArticleFeature