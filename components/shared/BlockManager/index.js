import ArticleAccordian from '../../../blocks/ArticleAccordian/ArticleAccordian';
import HeadingDescription from '../../../blocks/HeadingDescription/HeadingDescription';
import ArticleFeature from '../../../blocks/ArticleFeature/ArticleFeature';
import RatingComp from '../../../blocks/RatingComp/RatingComp';
import FAQ from '@/blocks/FAQ/Faq';

const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;

  switch (__component) {
    case 'blocks.heading-description':
      Block = HeadingDescription;
      break;
    case 'blocks.article-accordian'  :
      Block = ArticleAccordian;
      break;
    case 'blocks.article-feature':
      Block = ArticleFeature;
      break;
   
    case 'blocks.rating-component':
      Block = RatingComp;
      break; 
    case 'single.locus-element':
      Block = FAQ;
      break;   
  }

  return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};


const BlockManager = ({pageData}) => {

  // console.log("PAGE DATA BLOCK MANAGER",pageData)

  return <div>{pageData.attributes && pageData.attributes.blocks.map(getBlockComponent)}</div>;
};

BlockManager.defaultProps = {
  blocks: [],
};

export default BlockManager;