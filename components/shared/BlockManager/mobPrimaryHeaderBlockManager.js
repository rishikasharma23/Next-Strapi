import MobPrimaryHeaderCategoryBlock from '../../Header/MobPrimaryHeaderCategoryBlock'

const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;

  switch (__component) {
    case 'blocks.header-nav-category-list':
      Block = MobPrimaryHeaderCategoryBlock;
      break;
    
   
    
  }

  return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};


const MobPrimaryHeaderBlockManager = ({mobPrimaryHeaderProps}) => {

  return <>{mobPrimaryHeaderProps.map(getBlockComponent)}</>;
};

MobPrimaryHeaderBlockManager.defaultProps = {
  blocks: [],
};

export default MobPrimaryHeaderBlockManager;