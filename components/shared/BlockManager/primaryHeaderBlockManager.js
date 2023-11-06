import PrimaryHeaderCategoryBlock from '../../../components/Header/PimaryHeaderCategoryBlock'

const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;

  switch (__component) {
    case 'blocks.header-nav-category-list':
      Block = PrimaryHeaderCategoryBlock;
      break;
    
   
    
  }

  return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};


const PrimaryHeaderBlockManager = ({primaryHeaderProps}) => {

  return <div>{primaryHeaderProps.map(getBlockComponent)}</div>;
};

PrimaryHeaderBlockManager.defaultProps = {
  blocks: [],
};

export default PrimaryHeaderBlockManager;