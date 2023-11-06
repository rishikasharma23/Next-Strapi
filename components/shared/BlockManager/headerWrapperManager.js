import HeaderWrapper from '../../Header/HeaderWrapper'

const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;

  switch (__component) {
    case 'blocks.header-nav-list':
      Block = HeaderWrapper;
      break;



  }

  return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};


const HeaderWrapperManager = ({ headerWrapperManagerProps }) => {

  
  return <div>{headerWrapperManagerProps.map(getBlockComponent)}</div>;


};

HeaderWrapperManager.defaultProps = {
  blocks: [],
};

export default HeaderWrapperManager;