import React,{useEffect} from 'react'
import Disclaimer from '../Disclaimer/Disclaimer'
import SubscribeNewsletter from '../SubscribeNewsLetter/SubscribeNewsletter'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const BottomSection = ({bottomSectionProps}) => {

  const bottomBlock = bottomSectionProps.bottom_block
  const subscribeData = bottomSectionProps.subscribeData


  return (
    <>

    
      <Disclaimer disclaimerProps = {bottomBlock}/>
      <SubscribeNewsletter SubscribeNewsletterProps = {subscribeData}/>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          div: ({ node, ...bottomSectionProps }) => <div id='disqus_thread' {...bottomSectionProps} />

        }}
      >
        {bottomBlock.DisqusCommentSection}
      </ReactMarkdown>


    </>


  )
}

export default BottomSection