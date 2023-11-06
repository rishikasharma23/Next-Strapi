import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'


const HeadingDescription = (props) => {

  return (
    <div className="illustration-outer revamp-digicls revamp-blog-articles revamp-articles-whybuyterm" data-section="" id="">

      <div className="illustration-inner">
        <div className="buy-pro-banner">

          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
              h2: ({ node, ...props }) => <h2 className='buy-pro-banner__title revamp-whybanner-title revamp-fontStyle14' {...props} />

            }}
          >
            {props.HeadingDescription}
          </ReactMarkdown>


        </div>

      </div>
    </div>
  )
}

export default HeadingDescription