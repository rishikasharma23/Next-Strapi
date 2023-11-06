import MobPrimaryHeaderProductBlock from '../../Header/MobPrimaryHeaderProductBlock'

const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;

  switch (__component) {
    case 'blocks.header-nav-product-list':
      
      Block = MobPrimaryHeaderProductBlock;
      break;



  }

  return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};


const MobPrimaryHeaderProductManager = ({ primaryHeaderProductProps }) => {

  if (primaryHeaderProductProps?.HeaderProductInfo) {

    return <div>{primaryHeaderProductProps?.HeaderProductInfo && primaryHeaderProductProps?.HeaderProductInfo[0] && primaryHeaderProductProps?.HeaderProductInfo[0].attributes?.ABSLIHeaderProductBlock.map(getBlockComponent)}</div>;


  }
  else {
    return null

  }




};

MobPrimaryHeaderProductManager.defaultProps = {
  blocks: [],
};

export default MobPrimaryHeaderProductManager;