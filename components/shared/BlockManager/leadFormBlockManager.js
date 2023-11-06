import NameInputField from '../../../blocks/NameInputField/NameInputField';
import NumberInputField from '../../../blocks/NumberInputField/NumberInputField';

const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;

  switch (__component) {

    case 'blocks.name-blocks':
      Block = NameInputField;
      break;

    
    case 'blocks.number-block':
      Block = NumberInputField;
      break;
    
  }

  return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};



const LeadFormBlockManager = (props) => {

  return <>
    
     {props.inputFieldProps.attributes.InputField.map(getBlockComponent)}
      
    </>;
};

LeadFormBlockManager.defaultProps = {
  blocks: [],
};

export default LeadFormBlockManager;