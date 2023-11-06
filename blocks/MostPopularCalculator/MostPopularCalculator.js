import React from 'react'


const MostPopularCalculator = (props) => {


    const calculatorListTitle = props.Title;
    const calculateList = props.CalculatorList;
    

    return (
      
        <div id="8af4d30b03094944b779119a1fb12ac1" className="revamp-digicls revamp-blog-articles revamp-articles-calculateList">

           <h2 className="revamp-fontStyle13">{calculatorListTitle}</h2>
            

            <div className="revamp-articles-ListOuterBox">


                {calculateList &&
                    calculateList.map((item, index) => (
                        <div key={index}>
                        <img src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/uploads/Icon_Link_956521bf9a.svg`} alt = "Picture of the author"
                          className='lazy'
                          width={24}
                          height={24} />

                            <a href={item.Description}>{item.Title}</a>
                        </div>
                    ))
                }


               
            </div>
         </div >
    )
}

export default MostPopularCalculator