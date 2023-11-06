import React from 'react'

const PrimaryHeaderProductBlock = (props) => {


    return (

        <li><a href={props.HeaderNavProductListURL} target="_self">{props.HeaderNavProductListTitle}</a></li>

    )
}

export default PrimaryHeaderProductBlock