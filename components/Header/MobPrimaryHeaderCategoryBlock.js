import React, { useState, useEffect } from 'react'
import MobPrimaryHeaderProductManager from '../shared/BlockManager/mobPrimaryHeaderProductManager'

const MobPrimaryHeaderCategoryBlock = (props) => {

    const [productInfo, setProductInfo] = useState([])

    const disableLinkRedirection = (e) => {
        e.preventDefault()
    }

    useEffect(() => {

        // console.log("category useffect info", props?.HeaderProductInfo)
        if (props?.HeaderProductInfo) {
            setProductInfo(props?.HeaderProductInfo)
        }


    }, [props])

    return (
        // <>Testing category block</>

        <li className="wb-mob-nav__link Second-level">

            <a href="#javascript" onClick={disableLinkRedirection}>
                {props?.HeaderNavCategoryListTitle}
                <span className="icon-arrow icon"></span>

            </a>
            {
                props?.HeaderProductInfo ? <ul className='wb-mob-nav__link-list wb-mob-nav__link-list--level3'>

                    <MobPrimaryHeaderProductManager primaryHeaderProductProps={props} />

                </ul> : null
            }
           
        </li>


    )
}

export default MobPrimaryHeaderCategoryBlock