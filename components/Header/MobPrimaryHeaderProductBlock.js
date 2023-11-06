import React, { useState, useEffect } from 'react'

const MobPrimaryHeaderProductBlock = (props) => {

    return (

        <li className="wb-mob-nav__link Third-level">

            <a href={props.HeaderNavProductListURL} target="_self">
                {props.HeaderNavProductListTitle}
            </a>
        </li>

    )
}

export default MobPrimaryHeaderProductBlock