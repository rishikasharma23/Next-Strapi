import React from 'react'

const NumberInputField = (props) => {
 
  return (

    <div className="revamp-lf-mobdiv form-group form-group--no col-12 col-md-3">
      <div className="input-group input-group--v2 disabled floating-label">
        <span className="input-group-addon">+91</span>
        <input name="mobileno-leadformprod" id="mobileno-leadformprod" type="number" className="form-control form-group__placeholder only-number revamp-lf-mobileno floating-input" placeholder=" " data-hpcontrol="MobileNumber" /><input name="mobileno-leadformprod1" type="text" id="mobileno-leadformprod1" className="masked" />
        <span className=""></span>
        <label className="revamp-label">{props.Number}</label>
        <img className="" data-src="https://abcscprod.azureedge.net/-/media/Project/ABSLI/Article-Images/Icon-set/Icon-Phone.webp?extension=webp&amp;revision=5923275a-00e3-46f9-b612-647b4c08c1b2&amp;modified=20220215084825" src="https://abcscprod.azureedge.net/-/media/Project/ABSLI/Article-Images/Icon-set/Icon-Phone.webp?extension=webp&amp;revision=5923275a-00e3-46f9-b612-647b4c08c1b2&amp;modified=20220215084825" alt="phone" />
      </div>
      <div id="mobSpan" className="error error-mobile lead-form-product-hide">{props.NumberErrorTxt}</div>
    </div>



  )
}

export default NumberInputField