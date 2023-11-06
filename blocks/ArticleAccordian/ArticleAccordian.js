import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import crypto from 'crypto';



const ArticleAccordian = (props) => {
  const [listItems, setListItems] = useState([]);
  const [accordianList, setAccordianList] = useState({});
  let accordianMap;

  const accordianTitleImg = props.AccordianTopImage
  const bulletImg = props.IconBulletImage && props.IconBulletImage.data.attributes.url
  const bulletImgURL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${bulletImg}`
  var accordianLinkList = []

  useEffect(() => {

   
    function getRandomInt() {
      
      var uuid = crypto.randomBytes(16).toString('hex');
      return uuid;
    

    }

    const elements = document.querySelectorAll('div[data-section]');

    elements.forEach(element => {
      let randomNumber = getRandomInt();
      element.setAttribute('id', randomNumber);

    });


    function accordian() {


      const h2Headings = document.querySelectorAll('h2')
      const accordionTxt = document.querySelectorAll('.accordian__list-item a')
      const dataSections = document.querySelectorAll('.revamp-articles-leftBox [data-section]');

      accordianMap = {}

      dataSections.forEach((element, index) => {
        accordianMap[index] = [element.getAttribute('id'), element.querySelector('h2') && element.querySelector('h2').textContent]

      });

      setAccordianList(accordianMap)

      // Function to get the closest element with a specific attribute
      function getClosestElementWithAttribute(element, attributeName) {
        return element.closest(`[${attributeName}]`);
      }




      for (let i = 0; i < h2Headings.length; i++) {


        for (let j = 0; j < accordionTxt.length; j++) {

          if (h2Headings[i].textContent === accordionTxt[j].textContent) {

            // Usage example
            const targetElement = h2Headings[i]; // Replace with your target element
            const attributeName = 'data-section'; // Replace with the attribute name you're looking for

            const closestElement = getClosestElementWithAttribute(targetElement, attributeName);


            if (closestElement) {
              accordianLinkList.push(closestElement.getAttribute("id"))
            }


          }
        }

      }

      const wrapper = document.querySelector('.collapse-wrapper')
      const content = document.querySelector('.collapse-content')
      const button = document.querySelector('.js-trigger')
      const iconElement = wrapper.closest('.accordian__item').querySelector('.accordian__icon')
      let open = true

      content.style.listStyleImage = `url(${bulletImgURL})`

      if (open) {
        wrapper.style.height = `${content.getBoundingClientRect().height}px` + 20;
      }

      function toggleOpen() {
        if (open) {
          wrapper.style.height = '0px'
          wrapper.style.padding = 'unset'
          open = false
          iconElement.classList.remove('icon-decrement');
          iconElement.classList.add('icon-increment');


        } else {
          const height = content.getBoundingClientRect().height + 20
          wrapper.style.height = `${height}px`;
          open = true
          iconElement.classList.remove('icon-increment');
          iconElement.classList.add('icon-decrement');


        }
      }

      button.addEventListener('click', toggleOpen)


    }

    accordian()





  }, []);



  return (
    <div className="accordian revamp-digicls revamp-blog-articles revamp-articles-accordian">
      <ul className="accordian__wrap accordian__wrap--v1">

        <li className="accordian__item js-acc-item js-filter-target accordian__item--active" data-tag="buyOnline">

          <div className="accordian__title js-trigger">

            <img className="lazy" src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${accordianTitleImg && accordianTitleImg.data.attributes.url}`} alt={accordianTitleImg && accordianTitleImg.data.attributes.alternativeText} />


            {/* <div className="revamp-fontStyle8">{props.accordianProps['data'][0].attributes.ArticleZone[0].AccordianTitle}</div> */}
            <div className="revamp-fontStyle8">{props.AccordianTitle}</div>

            <span className="accordian__icon icon icon-decrement"></span>

          </div>

          <div className="accordian__info js-target collapse-wrapper" style={{ display: 'block' }}>

            <ul className='accordian__list collapse-content'>

              {Object.keys(accordianList).map((key, index) => (

                accordianList[key][1] && (
                  <li key={index} className='accordian__list-item'>
                    <a className='revamp-fontStyle13' href={`#${accordianList[key][0]}`}>{accordianList[key][1]}</a>
                  </li>

                )



              ))}


            </ul>


          </div>
        </li>
      </ul>
    </div>
  )
}

export default ArticleAccordian