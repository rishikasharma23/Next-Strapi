import Disclaimer from '../../../blocks/Disclaimer/Disclaimer';

const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;

  switch (__component) {
  
    case 'blocks.disclaimer':
      Block =  Disclaimer;
      break; 
    
  }

  return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};



const BottomBlockManager = ({ bottomPageData }) => {
  // console.log('inside block manager',bottomPageData);
  
  return <div>{bottomPageData.data[0].attributes.bottomBlocks.map(getBlockComponent)}</div>;
};

BottomBlockManager.defaultProps = {
  blocks: [],
};

export default BottomBlockManager;