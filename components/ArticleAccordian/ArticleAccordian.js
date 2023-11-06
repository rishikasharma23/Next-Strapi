import React from 'react'
import ReactMarkdown from 'react-markdown'
import '../ArticleDescription/ArticleDescription.css'

const ArticleAccordian = (props) => {

  const accordianList = props.accordianProps['data'][0].attributes.ArticleZone[0].ListItems;
 
  const listItemArr = accordianList.split('\n')

  let listItemObj = {}
  let listItemObjList = []

  for(let i=0;i<listItemArr.length;i++){

    listItemObj['id'] = i,
    listItemObj['text'] = listItemArr[i]
    listItemObjList.push(listItemObj)
    listItemObj = {}
    
  }


  return (
    <div className="accordian revamp-digicls revamp-blog-articles revamp-articles-accordian">
      <ul className="accordian__wrap accordian__wrap--v1">

        <li className="accordian__item js-acc-item js-filter-target accordian__item--active" data-tag="buyOnline">

          <div className="accordian__title js-trigger">
            <img src="https://abcscprod.azureedge.net/-/media/Project/ABSLI/Article-Images/Icon-set/Icon-Index.webp?extension=webp&amp;revision=2049a324-e73b-45e3-b56a-d7167b88cdff&amp;modified=20220731152856" className="" title="ICON-INDEX" data-src="https://abcscprod.azureedge.net/-/media/Project/ABSLI/Article-Images/Icon-set/Icon-Index.webp?extension=webp&amp;revision=2049a324-e73b-45e3-b56a-d7167b88cdff&amp;modified=20220731152856" alt="Table of Contents" />
            <div className="revamp-fontStyle8">{props.accordianProps['data'][0].attributes.ArticleZone[0].AccordianTitle}</div>

            <span className="accordian__icon icon icon-decrement"></span>

          </div>

          <div className="accordian__info js-target" style={{ display: 'block' }}>
           
            {/* {console.log('lisitem object list',listItemObjList)} */}
            <ul className="accordian__list">

             
              {listItemObjList.map(item=>(

                <ReactMarkdown 
                components={{
                  // Map `h1` (`# heading`) to use `h2`s.
                  // h1: 'h2',
                  // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
                  li: ({node, ...props}) => <li className='accordian__list-item' {...props} />
                  // a: ({node,...props})=><a className=''/>
                }}
                  key={item.id}>
                    {item.text}
                </ReactMarkdown>
                
              

              ))}


    
            </ul>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ArticleAccordian