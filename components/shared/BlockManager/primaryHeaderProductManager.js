import PrimaryHeaderProductBlock from '../../Header/PrimaryHeaderProductBlock'

const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;

  switch (__component) {
    case 'blocks.header-nav-product-list':
      Block = PrimaryHeaderProductBlock;
      break;



  }

  return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};


const PrimaryHeaderProductManager = ({ primaryHeaderProductProps }) => {
 
  if (primaryHeaderProductProps?.HeaderProductInfo) {

    return <div>{primaryHeaderProductProps?.HeaderProductInfo && primaryHeaderProductProps?.HeaderProductInfo[0] && primaryHeaderProductProps?.HeaderProductInfo[0].attributes?.ABSLIHeaderProductBlock.map(getBlockComponent)}</div>;


  }
  else {
    return null

  }




};

PrimaryHeaderProductManager.defaultProps = {
  blocks: [],
};

export default PrimaryHeaderProductManager;