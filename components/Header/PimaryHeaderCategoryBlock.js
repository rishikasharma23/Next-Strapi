import React, { useState, useEffect } from 'react'
import PrimaryHeaderProductManager from '../shared/BlockManager/primaryHeaderProductManager'

const PrimaryHeaderCategoryBlock = (props) => {

    const [productInfo, setProductInfo] = useState([])

    useEffect(() => {

        // console.log("category useffect info", props?.HeaderProductInfo)
        if (props?.HeaderProductInfo) {
            setProductInfo(props?.HeaderProductInfo)
        }


    }, [props])

    return (

        <li className="primary-nav__link primary-nav__link--level2 primary-nav__link--has-subchild primary-nav__link--has-child">
            <a href={props.HeaderNavCategoryListURL} target="_self">{props.HeaderNavCategoryListTitle}<span className="icon-arrow icon"></span></a>

            {
                props?.HeaderProductInfo ? <ul>
                    <PrimaryHeaderProductManager primaryHeaderProductProps={props} />

                </ul> : null
               

            }

          

        </li>

    )
}

export default PrimaryHeaderCategoryBlock