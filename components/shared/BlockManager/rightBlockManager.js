import RecentlyAddedArticle from '../../../blocks/RecentlyAddedArticle/RecentlyAddedArticle';
import MostPopularCalculator from '../../../blocks/MostPopularCalculator/MostPopularCalculator';
import PopularSearch from '../../../blocks/PopularSearch/PopularSearch';
import LeadFormContainer from '@/components/LeadFormContainer/LeadFormContainer';
import ProductPlanComponent from '../../../blocks/ProductPlanComponent/ProductPlanComponent';

const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;

  switch (__component) {

    case 'single.right-locus-element':
      Block = LeadFormContainer
      break;


    
    case 'blocks.most-popular-calculator':
      Block = MostPopularCalculator;
      break;
  
    case 'blocks.popular-searches':
      Block =  PopularSearch;
      break; 
    
    
    case 'blocks.recently-added-article':
      Block = RecentlyAddedArticle;
      break;
    
    case 'blocks.product-plan-component':
      Block = ProductPlanComponent;
      break;
    
  }

  return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};



const RightBlockManager = ({rightPageData}) => {
 

  return <div>
    
     {rightPageData && rightPageData?.attributes?.rightBlocks.map(getBlockComponent)}
      
    </div>;
};

RightBlockManager.defaultProps = {
  blocks: [],
};

export default RightBlockManager;