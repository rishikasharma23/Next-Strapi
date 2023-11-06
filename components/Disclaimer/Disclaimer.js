import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Accordion from 'react-bootstrap/Accordion';

function Disclaimer({disclaimerProps}) {
   
    const disclaimerTitle = disclaimerProps && disclaimerProps.BottomBlockDisclaimer && disclaimerProps.BottomBlockDisclaimer.Title
    const disclaimerDesc = disclaimerProps && disclaimerProps.BottomBlockDisclaimer && disclaimerProps.BottomBlockDisclaimer.Description
   
 
  return (
    <Accordion className="revamp-disclaimer-container mx-auto" defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>{disclaimerTitle}</Accordion.Header>
        <Accordion.Body>
        <ReactMarkdown
                            rehypePlugins={[rehypeRaw]}
                            components={{
                            }}
                        >
                            {disclaimerDesc}
                        </ReactMarkdown>
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
  );
}

export default Disclaimer

