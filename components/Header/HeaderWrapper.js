import React from 'react'

const HeaderWrapper = (props) => {

   

    return (
        <li className="level2">
            <a href={props.HeaderNavListURL}>{props.HeaderNavListTitle}</a>
        </li>
    )
}

export default HeaderWrapper