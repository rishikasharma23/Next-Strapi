import React from 'react'

const NameInputField = (props) => {

    return (

        <div className="form-group form-group--name col-12 col-md-3">
            <div className="input-group input-group--v2 disabled floating-label">
                <input
                    name="fname"
                    id="fname"
                    type="text"
                    maxLength="100"
                    className="floating-input firstName only-char-special form-control form-group__placeholder call-name"
                    placeholder=" " />
                <span className=""></span>
                <label className="revamp-label">{props.Name}</label>
            </div>

            <div id="fnameSpan" className="error lead-form-product-hide">{props.NameErrorTxt}</div>


        </div>




    )
}

export default NameInputField