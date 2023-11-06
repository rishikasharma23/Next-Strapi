import ArticleAccordian from '../../../blocks/ArticleAccordian/ArticleAccordian';
import HeadingDescription from '../../../blocks/HeadingDescription/HeadingDescription';
// import ArticleFeature from '../../../blocks/ArticleFeature/ArticleFeature';
import AboutAuthor from '../../../blocks/AboutAuthor/AboutAuthor';
import RatingComp from '../../../blocks/RatingComp/RatingComp';

const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;

  switch (__component) {
    case 'blocks.heading-description':
      Block = HeadingDescription;
      break;
    case 'blocks.article-accordian'  :
      Block = ArticleAccordian;
      break;
    // case 'blocks.article-feature' :
    //   Block = ArticleFeature;
    //   break;
    case 'blocks.about-author':
      Block =  AboutAuthor;
      break; 
    // case 'blocks.rating-component':
    //   Block = RatingComp;
    //   break;  
  }

  return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};



const BlockManager = ({pageData}) => {

  // return <div>Test Block manager</div>
  return <div>{pageData.articleProps.data[0].attributes.blocks.map(getBlockComponent)}</div>;
};

BlockManager.defaultProps = {
  blocks: [],
};

export default BlockManager;