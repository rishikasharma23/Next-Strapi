import React from 'react'
import Image from 'next/image';

const MostPopularCalculator = ({ calculatorProps }) => {

    const calculatorListTitle = calculatorProps.data.attributes.Title;
    const calculatorImg = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/uploads/Icon_Link_956521bf9a.svg`

    const calculateList = calculatorProps.data.attributes.CalculatorList;
   


    return (
        <div id="8af4d30b03094944b779119a1fb12ac1" className="revamp-digicls revamp-blog-articles revamp-articles-calculateList">

            <div className="revamp-fontStyle13"><strong>{calculatorListTitle}</strong></div>

            <div className="revamp-articles-ListOuterBox">


                {calculateList &&
                    calculateList.map((item, index) => (
                        <div key={index}>
                        < Image
                          src = { calculatorImg }
                          alt = "Picture of the author"
                          width={24}
                          height={24}
                        />
                            <a href={item.AnchorTagURL}>{item.Title}</a>
                        </div>
                    ))
                }


                {/* <div>


                <img data-src="https://abcscprod.azureedge.net/-/media/Project/ABSLI/Article-Images/Icon-set/Icon-Link.webp?extension=webp&amp;revision=655303b6-0b85-4dbb-9824-8f7183df6db5&amp;modified=20220930111541" alt="altimg" title="Income Tax Calculator" src="https://abcscprod.azureedge.net/-/media/Project/ABSLI/Article-Images/Icon-set/Icon-Link.webp?extension=webp&amp;revision=655303b6-0b85-4dbb-9824-8f7183df6db5&amp;modified=20220930111541" />
                <a href="https://lifeinsurance.adityabirlacapital.com/financial-calculators/income-tax-calculator">Income Tax Calculator</a>      </div>
            <div>


                <img data-src="https://abcscprod.azureedge.net/-/media/Project/ABSLI/Article-Images/Icon-set/Icon-Link.webp?extension=webp&amp;revision=655303b6-0b85-4dbb-9824-8f7183df6db5&amp;modified=20220930111541" alt="altimg" title="Term Insurance Premium Calculator" src="https://abcscprod.azureedge.net/-/media/Project/ABSLI/Article-Images/Icon-set/Icon-Link.webp?extension=webp&amp;revision=655303b6-0b85-4dbb-9824-8f7183df6db5&amp;modified=20220930111541" />
                <a href="https://lifeinsurance.adityabirlacapital.com/term-insurance/term-insurance-calculator">Term Insurance Premium Calculator</a>      </div>
            <div>


                <img data-src="https://abcscprod.azureedge.net/-/media/Project/ABSLI/Article-Images/Icon-set/Icon-Link.webp?extension=webp&amp;revision=655303b6-0b85-4dbb-9824-8f7183df6db5&amp;modified=20220930111541" alt="Calculator" title="Child Future Planning Calculator" src="https://abcscprod.azureedge.net/-/media/Project/ABSLI/Article-Images/Icon-set/Icon-Link.webp?extension=webp&amp;revision=655303b6-0b85-4dbb-9824-8f7183df6db5&amp;modified=20220930111541" />
                <a href="https://lifeinsurance.adityabirlacapital.com/tools-and-planners/child-plan-calculator">Child Future Planning Calculator</a>      </div>
            <div>


                <img data-src="https://abcscprod.azureedge.net/-/media/Project/ABSLI/Article-Images/Icon-set/Icon-Link.webp?extension=webp&amp;revision=655303b6-0b85-4dbb-9824-8f7183df6db5&amp;modified=20220930111541" alt="altimg" title="HLV Calculator" />
                <a href="https://lifeinsurance.adityabirlacapital.com/tools-and-planners/human-life-value-calculator">Human Life Value Calculator</a>      </div>
            <div>


                <img data-src="https://abcscprod.azureedge.net/-/media/Project/ABSLI/Article-Images/Icon-set/Icon-Link.webp?extension=webp&amp;revision=655303b6-0b85-4dbb-9824-8f7183df6db5&amp;modified=20220930111541" alt="altimg" title="Retirement Calculator" />
                <a href="https://lifeinsurance.adityabirlacapital.com/tools-and-planners/retirement-planning-calculator">Retirement Calculator</a>      </div>
            <div>


                <img data-src="https://abcscprod.azureedge.net/-/media/Project/ABSLI/Article-Images/Icon-set/Icon-Link.webp?extension=webp&amp;revision=655303b6-0b85-4dbb-9824-8f7183df6db5&amp;modified=20220930111541" alt="altimg" title="Wealth Calculator" />
                <a href="https://lifeinsurance.adityabirlacapital.com/tools-and-planners/wealth-calculator">Wealth Calculator</a>      </div> */}

            </div>
        </div >
    )
}

export default MostPopularCalculator