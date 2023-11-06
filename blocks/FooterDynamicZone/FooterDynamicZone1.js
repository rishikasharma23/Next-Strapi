import React from 'react'

const FooterDynamicZone1 = () => {

    const disableLinkRedirection = (e) => {
        e.preventDefault()
    }
    
    return (
        
            <div className="foot-link-set">
                <div className="foot-link-set__title headline-4">
                    <a href="#javascript" onClick={disableLinkRedirection}className="foot-link-set__title-link" title="हिंदी में पढ़ें" target="_self">
                        हिंदी में पढ़ें<span className="icon icon-arrow"></span>
                    </a>
                </div>
                <div className="foot-link-set__cont">
                    <ul className="foot-link-set__list">
                        <li className="foot-link-set__item">
                            <a href="https://lifeinsurance.adityabirlacapital.com/hindi" title="लाइफ इंश्योरेंस" className="foot-link-set__link" target="_self">लाइफ इंश्योरेंस</a>
                        </li>
                        <li className="foot-link-set__item">
                            <a href="https://lifeinsurance.adityabirlacapital.com/hindi/term-insurance" title="टर्म इंश्योरेंस" className="foot-link-set__link" target="_self">टर्म इंश्योरेंस</a>
                        </li>
                        <li className="foot-link-set__item">
                            <a href="https://lifeinsurance.adityabirlacapital.com/hindi/retirement-and-pension-plans" title="पेंशन प्लान/रिटायरमेंट प्लान" className="foot-link-set__link" target="_self">पेंशन प्लान/रिटायरमेंट प्लान</a>
                        </li>
                        <li className="foot-link-set__item">
                            <a href="https://lifeinsurance.adityabirlacapital.com/hindi/ulip-plan" title="यूलिप प्लान" className="foot-link-set__link" target="_self">यूलिप प्लान</a>
                        </li>
                        <li className="foot-link-set__item">
                            <a href="https://lifeinsurance.adityabirlacapital.com/hindi/endowment-plan" title="एंडोमेंट प्लान" className="foot-link-set__link" target="_self">एंडोमेंट प्लान</a>
                        </li>
                        <li className="foot-link-set__item">
                            <a href="https://lifeinsurance.adityabirlacapital.com/hindi/critical-illness-insurance" title="क्रिटिकल बीमारी प्लान" className="foot-link-set__link" target="_self">क्रिटिकल बीमारी प्लान</a>
                        </li>
                        <li className="foot-link-set__item">
                            <a href="https://lifeinsurance.adityabirlacapital.com/hindi/child-insurance-plan" title="चाइल्ड प्लान " className="foot-link-set__link" target="_self">चाइल्ड प्लान </a>
                        </li>
                    </ul>
                </div>
            </div>       
    )
}

export default FooterDynamicZone1