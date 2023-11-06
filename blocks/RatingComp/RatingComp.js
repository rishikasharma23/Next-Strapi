import React, { useState, useEffect } from 'react'
import { ratingFlow, ratingInfoCall } from "../../services/index";
import Share from '../../components/Share/Share';
// import Share from '../Share/Share'

const RatingComp = (props) => {

  const [currentRate, setCurrentRate] = useState("");
  const [currentCount, setCurrentCount] = useState("");
  const starImage = props.StarImg
  const thanksImage = props.ThankYouImg


  useEffect(() => {

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }


    async function fetchRatingInfo() {

      var rateDataSrc = document.querySelector('.revamp-articles-ratingBox').getAttribute('data-datasource');

      const ratingInfo = await ratingInfoCall(rateDataSrc);
     
      if (ratingInfo) {

        setCurrentRate(ratingInfo.data && ratingInfo.data.RatingCount);
        setCurrentCount(ratingInfo.data && ratingInfo.data.CountRead);

      }


    }

    async function articlesRatingTxt() {
      function getSessionRating(val) {
        return sessionStorage.getItem(val);
      }



      var rateDataSrc = document.querySelector('.revamp-articles-ratingBox').getAttribute('data-datasource');
      var rateComponent = document.querySelector('#ratingBox1');



      var stars = rateComponent.querySelectorAll('.star');




      window.addEventListener('load', function () {
        if (getSessionRating(`articles-rating-${rateDataSrc}`)) {
          document.querySelector("#hdnrating").value = "true";

          var cookieValItem = parseInt(getSessionRating(`articles-rating-${rateDataSrc}`));

          rateComponent.querySelector('.rating-msg').classList.remove('d-none');

          for (var j = 0; j < cookieValItem; j++) {
            stars[j].classList.add('active-star');
          }

          document.querySelector(`#feedback${cookieValItem}`).classList.remove('d-none');
        }
      });

      stars.forEach(function (star) {
        star.addEventListener('click', function (e) {
          if (getSessionRating(`articles-rating-${rateDataSrc}`)) {
            e.preventDefault();
            return;
          }

          /* LOG JOURNEY */





          var starRate = this.closest('.revamp-articles-ratingInnerBox').querySelector('.revamp-fontStyle19');
          //  var rateNo = this.closest('.revamp-articles-ratingInnerBox').querySelector('.revamp-rateNo');

          starRate.value = parseInt(starRate.value) + 1;
          var rateNo = this.closest('.revamp-articles-ratingInnerBox').querySelector('.revamp-rateNo').textContent;

          var rateNoWithoutComma = rateNo.split(',').join('');
          var rateNoVal = parseInt(rateNoWithoutComma) + 1;



          var rateDisplay = numberWithCommas(rateNoVal);

          this.closest('.revamp-articles-ratingInnerBox').querySelector('.revamp-rateNo').textContent = rateDisplay;

          if (this.closest('.revamp-articles-container').querySelector('.revamp-articles-RatenShare .revamp-rateNo')) {
            this.closest('.revamp-articles-container').querySelector('.revamp-articles-RatenShare .revamp-rateNo').textContent = rateDisplay;

          }

          var toStarVal = this.getAttribute('name');
          var totalStars = this.closest('form').querySelectorAll('button');
          var totalStarsLength = totalStars.length;



          const ratingLogFlow = async (rateDataSrc, currentRate) => {


            let ratingObj = {

              dataSrc: rateDataSrc,
              currentRate: currentRate

            }


            const rateInfo = await ratingFlow(ratingObj);

          }




          ratingLogFlow(rateDataSrc, toStarVal)









          var starRateValue = parseInt(starRate.textContent);
          var rateNoInteger = parseInt(rateNo.replace(',', ''));
          var originalRate = (starRateValue * rateNoInteger) + parseInt(toStarVal);
          var newRate = originalRate / (rateNoInteger + 1);
          var roundedRate = newRate.toFixed(1);

          if (roundedRate.endsWith('.0')) {
            roundedRate = Math.floor(newRate);
          }

          starRate.textContent = roundedRate;

          if (this.closest('.revamp-articles-container').querySelector('.revamp-articles-RatenShare .revamp-rateNo')) {
            var ratingUpperTxt = this.closest('.revamp-articles-container').querySelector('.revamp-articles-RatenShare .revamp-articles-rating .revamp-fontStyle18');
            ratingUpperTxt.textContent = roundedRate;
          }


          if (!getSessionRating(`articles-rating-${rateDataSrc}`)) {
            sessionStorage.setItem(`articles-rating-${rateDataSrc}`, toStarVal);
          }

          for (var i = 0; i < totalStarsLength; i++) {
            if (i < parseInt(toStarVal)) {
              totalStars[i].classList.add('active-star');
            } else {
              totalStars[i].classList.remove('active-star');
            }
          }

          this.closest('.revamp-starBox').querySelector('.rating-msg').classList.remove('d-none');
          var starId = `feedback${toStarVal}`;
          this.classList.add('rating--interactive');
          var starsGroup = this.querySelectorAll('.stars-txt');

          starsGroup.forEach(function (starGroup) {
            var currentStarId = starGroup.getAttribute('id');
            if (currentStarId !== starId) {
              starGroup.classList.add('d-none');
            }
          });

          document.querySelector(`#feedback${toStarVal}`).classList.remove('d-none');
        });
      });
    }

    fetchRatingInfo()
    articlesRatingTxt()


  }, [])



  return (

    <>
      <div className="revamp-digicls revamp-blog-articles revamp-articles-ratingBox" id="ratingBox1" data-datasource={`729693b0-2f2f-460d-9a8d-11b53824e944-${props?.ArticleID}`}>
        <div className="revamp-articles-ratingInnerBox">

          <div className="rating-LeftBox">

            <h3 className="revamp-fontStyle14">{props.Title}</h3>
            <div className="rating-LeftInnerBox">
              <div className="average-ratingBox">

                <div className="average-star">
                  <img className="lazy" src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${starImage && starImage.data.attributes.url}`} alt={starImage && starImage.data.attributes.alternativeText} />

                  <div className="revamp-fontStyle19">{currentRate}</div>

                </div>

                <div className="revamp-fontStyle18">Rated by <span className="revamp-rateNo">{currentCount}</span> readers</div>
              </div>
              <div className="revamp-starBox">
                <div className="align-items-center justify-content-center revamp-stars">
                  <div className="review" itemScope="" itemType="http://schema.org/Article">

                    <meta content="Term Insurance comes with death benefit and lower premiums whereas life insurance comes with death and maturity benefit with increased premium than Term insurance. To know more, Click here!" itemProp="description" />
                    <meta content="What is a non-participating life insurance policy?" itemProp="name" />


                    <div className="rating rating--interactive" itemProp="reviewRating" itemScope="" itemType="https://schema.org/Rating">

                      <meta content="4" itemProp="ratingValue" />
                      <meta content="5" itemProp="bestRating" />

                      <form action="#" className="clearfix">

                        <button className="star" type="button" name="1" itemProp="worstRating"></button>

                        <button className="star" type="button" name="2"></button>

                        <button className="star" type="button" name="3"></button>

                        <button className="star" type="button" name="4"></button>

                        <button className="star" type="button" name="5" itemProp="bestRating"></button>


                      </form>


                    </div>


                    <span className="d-none" itemProp="aggregateRating" itemScope="" itemType="http://schema.org/AggregateRating">
                      <span className="rating-score" content={`${currentRate}`} itemProp="ratingValue">{currentRate}</span>
                      <span className="s-text-fade"> / 5 ( <span className="rating-count" content={`${currentCount}`} itemProp="reviewCount">{currentCount}</span> reviews )</span>
                      <meta content="5" itemProp="bestRating" />
                      <meta content="1" itemProp="worstRating" />
                    </span>

                  </div>
                  <div className="stars-txt revamp-fontStyle13 d-none" id="feedback1">Not helpful</div>
                  <div className="stars-txt revamp-fontStyle13 d-none" id="feedback2">Somewhat helpfull</div>
                  <div className="stars-txt revamp-fontStyle13 d-none" id="feedback3">Helpful</div>
                  <div className="stars-txt revamp-fontStyle13 d-none" id="feedback4">Good</div>
                  <div className="stars-txt revamp-fontStyle13 d-none" id="feedback5">Best</div>
                </div>
                <input type="hidden" id="hdnrating" value="false"></input>

                <div className="rating-msg d-none">

                  <img className="lazy" src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${thanksImage && thanksImage.data.attributes.url}`} alt={thanksImage && thanksImage.data.attributes.alternativeText} />

                  <p className="revamp-fontStyle13">Thank you for your feeback</p>

                </div>

              </div>

            </div>

          </div>

          <div className="rating-mobileBox">
            <div className="rating-mobile-content revamp-fontStyle13">
              Don’t forgot to share helpful information in your circle
            </div>
            <Share shareProps={props} />

          </div>



        </div>

      </div>

    </>
  )
}

export default RatingComp