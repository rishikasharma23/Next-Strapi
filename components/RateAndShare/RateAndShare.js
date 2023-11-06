import React,{useState,useEffect} from 'react'
import Share from '../Share/Share'
import { ratingInfoCall } from "../../services/index";

const RateAndShare = ({ratingProps}) => {

  const [currentRateShare,setCurrentRateShare] = useState("");
  const [currentCountRead,setCurrentCountRead] = useState("");

  useEffect(()=>{

   
    async function fetchRatingInfo(){

      var rateDataSrc = document.querySelector('.revamp-articles-ratingBox') && document.querySelector('.revamp-articles-ratingBox').getAttribute('data-datasource');
      const ratingInfo = await ratingInfoCall(rateDataSrc);
      setCurrentRateShare(ratingInfo?.data?.RatingCount);
      setCurrentCountRead(ratingInfo?.data?.CountRead);
      
    }
    
   
    fetchRatingInfo() 
   
    

  },[])

  
  return (

    <div className="revamp-digicls revamp-blog-articles revamp-articles-RatenShare">
    <div className="revamp-articles-rating">
      <div className="revamp-articles-box align-items-center d-flex justify-content-start">
        <span href="#" title="Give 5 stars">★</span>
        <div className="revamp-fontStyle18">{currentRateShare}</div>
      </div>
      <div className="revamp-fontStyle12">Rated by <span className="revamp-rateNo">{currentCountRead}</span> readers  </div>
    </div>

      <Share shareProps = {ratingProps}/>



  </div>
  )
}

export default RateAndShare