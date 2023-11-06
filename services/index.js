import axios from "axios";


export async function leadCRMFlow(data) {
 

    try {
      const leadCreationData = await axios.post(`${process.env.NEXT_PUBLIC_SERVICE_URL}/collect/CreateLeadFormProduct`, {ratingDataSrc:data});
      
    
      if(leadCreationData.res === 200 && leadCreationData.data){
        return leadCreationData.data;
      }
    } catch (err) {
      console.log('lead creation error block',err)
      const ErrorData = { error: "Network Issue" };
      return ErrorData;
    }
  }


  
export async function ratingFlow(data) {


    try {
      const rateCreationData = await axios.post(`${process.env.NEXT_PUBLIC_SERVICE_URL}/collect/articleRating`, data);
      
    
      if(rateCreationData.res === 200 && rateCreationData.data){
        return rateCreationData.data;
      }
    } catch (err) {
    
      const ErrorData = { error: "Network Issue" };
      return ErrorData;
    }
  }

  export async function ratingInfoCall(dataSrc) {
    

    let data = {
      dataSrc: dataSrc
    } 
  
      try {
        const ratingInfo = await axios.post(`${process.env.NEXT_PUBLIC_SERVICE_URL}/collect/fetchRatingInfo`, data);

        if(ratingInfo.status === 200 && ratingInfo.data){
          return ratingInfo.data;
        }
      } catch (err) {
      
        const ErrorData = { error: "Network Issue" };
        return ErrorData;
      }
    }
    
  
  
