import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'


const PopularSearch = (props) => {
  
    const popularSearchTitle = props.Title;
    const popularSearchList = props.SearchList;
   

    return (
        <div className="revamp-searches-container revamp-digicls" data-section="" id="942c4a883e5842cfa42f5b18929137d1">
            <div className="revamp-searches-inner">
                <div className="revamp-searches-box1">
                    <h2 className="revamp-searches-title">
                        {popularSearchTitle}
                    </h2>
                </div>
                <div className="revamp-searches-box2">
                </div>
                <div className="revamp-searches-box3">
                 
                 <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                 {popularSearchList}
                 </ReactMarkdown>
                   


                </div>
            </div>
        </div>
    )
}

export default PopularSearch