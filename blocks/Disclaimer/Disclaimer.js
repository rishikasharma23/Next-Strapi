import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const Disclaimer = (props) => {

    useEffect(() => {

        function accordian() {
          const wrapper = document.querySelector('.collapse-wrapper')
          const content = document.querySelector('.collapse-content')
          const button = document.querySelector('.js-trigger')
          let open = true
    
          // Set initial height to content height, if shown by default
          if (open) {
            wrapper.style.height = `${content.getBoundingClientRect().height}px`
          }
    
          function toggleOpen() {
            if (open) {
              wrapper.style.height = '0px'
              wrapper.style.padding = 'unset'
              open = false
            } else {
              const height = content.getBoundingClientRect().height
              wrapper.style.height = `${height}px`;
              open = true
            }
          }
    
          button.addEventListener('click', toggleOpen)
    
    
        }
        accordian()
    
    
    
    
      }, []);
    


    return (
        <div className="accordian accordian--v2 revamp-disclaimer-container" data-section="" id="5f7b6772957f499586291e9fdd48c4c0">
            <ul className="accordian__wrap">
                <li className="accordian__item js-acc-item revamp-accordian-title">
                    <div className="accordian__title js-trigger">
                        {props.Title}          <span className="accordian__icon icon icon-arrow"></span>
                    </div>
                    <div className="accordian__info js-target">

                        <ReactMarkdown
                            rehypePlugins={[rehypeRaw]}
                            components={{
                                div: ({ node, ...props }) => <div id='disqus_thread' {...props} />

                            }}
                        >
                            {props.Description}
                        </ReactMarkdown>

                    </div>
                </li>
            </ul>
        </div>
    )
}


export default Disclaimer