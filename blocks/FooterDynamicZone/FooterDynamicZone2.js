
import FooterZoneItem from '../../components/FooterZoneItem/FooterZoneItem'

const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;

  switch (__component) {
    case 'blocks.footer-block':    
      Block = FooterZoneItem;
      break;
    
   
    
  }

  return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};


const FooterDynamicZone2 = ({zoneTwoProps}) => {
  
  // return <div>Test Footer Block</div>
  return <div>{zoneTwoProps.map(getBlockComponent)}</div>;
};

FooterDynamicZone2.defaultProps = {
  blocks: [],
};

export default FooterDynamicZone2;