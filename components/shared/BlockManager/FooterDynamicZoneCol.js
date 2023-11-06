import FooterZoneItem from '../../../components/FooterZoneItem/FooterZoneItem'

const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;

  switch (__component) {
    case 'blocks.footer-nav-list':
      Block = FooterZoneItem;
      break;
    
   
    
  }

  return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};


const FooterDynamicZoneCol = ({footerDZProps}) => {

  return <div>{footerDZProps.map(getBlockComponent)}</div>;
};

FooterDynamicZoneCol.defaultProps = {
  blocks: [],
};

export default FooterDynamicZoneCol;