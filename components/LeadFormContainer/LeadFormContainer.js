import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import LeadFormBlockManager from '../shared/BlockManager/leadFormBlockManager'
import { leadCRMFlow } from '../../services/index'

const LeadFormContainer = (props) => {

  var [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {


    var revampTncError = document.getElementById("revamptnc-error");

    if (isChecked) {
      revampTncError.classList.remove('hide')
    }
    else {
      revampTncError.classList.add('hide')
    }

    setIsChecked(!isChecked)
    
  };



  useEffect(() => {

    function numericCheck() {
      const inputElement = document.querySelector('.revamp-lf-mobileno');

      if (inputElement) {
        inputElement.addEventListener('keypress', function (evt) {
          var length = inputElement.value.length;

          if (length >= 10) {
            evt.preventDefault();
          }

        });

        inputElement.addEventListener('keydown', function (evt) {
          var length = inputElement.value.length;

          if (length >= 10) {
            evt.preventDefault();
          }
          if (evt.which === 69 || evt.which === 189 || evt.which === 190 || evt.which === 191) {
            evt.preventDefault(); // To prevent the default behavior of the event
          }
        });
      }

    }

    function onlyAlpha() {
      var elements = document.querySelectorAll('.only-char-special');

      if (elements.length >= 1) {
        elements.forEach(function (element) {
          element.addEventListener('keypress', function (evt) {
            evt = evt || window.event;
            var charCode = evt.which || evt.keyCode;
            if (charCode == 32) return true;
            if (
              charCode != 190 &&
              charCode > 31 &&
              (charCode < 65 || charCode > 90) &&
              (charCode < 97 || charCode > 122)
            ) {

              evt.preventDefault();
            }

            return true;
          });
        });
      }

    }

    const submitLeadHandler = async (model) => {

      const postData = model;
      const responseData = await leadCRMFlow(postData);
      if (responseData && responseData.status === 10 && responseData.data) {
        const postref = responseData.data;
        document.body.innerHTML = 'LEAD FLOW SUCCESSFULL'


      } else if (
        responseData &&
        (responseData.status === 20 || responseData.status === 21)
      ) {
        setotpError(responseData.message);
      } else if (responseData && responseData.error) {
        // setLoader(false);
        // props.networkIssue(true);
      } else {
        // setLoader(false);
      }
    };


    function leadFormProductValidate() {



      document.querySelector(".lead-form-container .firstName") && document.querySelector(".lead-form-container .firstName").addEventListener("keyup", function () {
        var fnameVal = document.querySelector("#fname").value;

        if (fnameVal) {
          if (fnameVal.length < 3 || fnameVal.length > 100 || fnameVal.length == 0) {
            document.querySelector("#fnameSpan").classList.remove("lead-form-product-hide");
            document.querySelector("#fnameSpan").parentElement.querySelector(".input-group").classList.add("bgcolorError");
            document.querySelector("#fnameSpan").parentElement.classList.add("revamp-leadformErrTxt");
          } else {
            document.querySelector("#fnameSpan").classList.add("lead-form-product-hide");
            document.querySelector("#fnameSpan").parentElement.querySelector(".input-group").classList.remove("bgcolorError");
            document.querySelector("#fnameSpan").parentElement.classList.remove("revamp-leadformErrTxt");
          }
        }
      });


      document.querySelector(".lead-form-container .revamp-lf-mobileno") && document.querySelector(".lead-form-container .revamp-lf-mobileno").addEventListener("keyup", function () {
        var mobVal = document.querySelector("#mobileno-leadformprod").value;

        if (mobVal) {
          if (mobVal.length < 10) {
            document.querySelector("#mobSpan").classList.remove("lead-form-product-hide");
            document.querySelector("#mobSpan").parentElement.querySelector(".input-group").classList.add("bgcolorError");
            document.querySelector("#mobSpan").parentElement.classList.add("revamp-leadformErrTxt");
          } else {
            document.querySelector("#mobSpan").classList.add("lead-form-product-hide");
            document.querySelector("#mobSpan").parentElement.querySelector(".input-group").classList.remove("bgcolorError");
            document.querySelector("#mobSpan").parentElement.classList.remove("revamp-leadformErrTxt");
          }
        }
      });

      if (document.querySelector(".lead-form-outerdiv") && document.querySelector(".lead-form-fmpvariant")) {
        document.querySelector('.lead-form-container .revamp-lf-email input').addEventListener('keyup', function () {
          const email = this.value;

          const validateEmail = (email) => {
            let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
            return regex.test(String(email).toLowerCase());
          };

          if (!validateEmail(email)) {
            document.querySelector('#emailSpan').classList.remove('lead-form-product-hide');
            document.querySelector('#emailSpan').parentElement.querySelector(".input-group").classList.add('bgcolorError');
            document.querySelector('#emailSpan').parentElement.classList.add('revamp-leadformErrTxt');
          } else {
            document.querySelector('#emailSpan').classList.add('lead-form-product-hide');
            document.querySelector('#emailSpan').parentElement.querySelector(".input-group").classList.remove('bgcolorError');
            document.querySelector('#emailSpan').parentElement.classList.remove('revamp-leadformErrTxt');
          }
        });
      }

      document.querySelector(".lead-form-container .submit-agree-leadformprod").addEventListener("click", function (e) {
        var fnameVal = document.querySelector("#fname").value;
        var mobVal = document.querySelector("#mobileno-leadformprod").value;
        // var checked = document.querySelector(".abc-form--lead input.cb-tnc").checked;


        if (
          (fnameVal != undefined && (fnameVal.length < 3 || fnameVal.length > 100 || fnameVal.length == 0)) ||
          (mobVal != undefined && mobVal.length != 10) || (!isChecked)
        ) {
         
          if (fnameVal.length < 3 || fnameVal.length > 100 || fnameVal.length == 0) {
            document.querySelector('#fnameSpan').classList.remove('lead-form-product-hide');
            document.querySelector('#fnameSpan').parentElement.querySelector(".input-group").classList.add('bgcolorError');
            document.querySelector('#fnameSpan').parentElement.classList.add('revamp-leadformErrTxt');
          }

          if (mobVal.length != 10) {
            document.querySelector('#mobSpan').classList.remove('lead-form-product-hide');
            document.querySelector('#mobSpan').parentElement.querySelector(".input-group").classList.add('bgcolorError');
            document.querySelector('#mobSpan').parentElement.classList.add('revamp-leadformErrTxt');
          }


        } else {
         
          /* LOGIC FOR API CALL */

          var product = props.formDetails.attributes.lead_api_setting_detail.data.attributes.ProductName;
          var subSource = props.formDetails.attributes.lead_api_setting_detail.data.attributes.SubSource;
          var source = props.formDetails.attributes.lead_api_setting_detail.data.attributes.Source;

          var model = {
            // APISettingPath: apiSettings,
            ProductName: product,
            Name: fnameVal,
            Mobile: mobVal,
            tnc: isChecked,
            SubSource: subSource,
            Source: source
          };
          submitLeadHandler(model);



          /* BELOW IS LOGIC APART  */

          this.parentElement.parentElement.classList.add("hide");
          this.closest('.lead-form-product').querySelector('.lead-form-product__container').classList.add('hide');
          this.closest('.lead-form-product').querySelector('.lead-form-product__thanks-msg').classList.remove("hide")
          document.querySelector('.lead-form-product__title-wrap').classList.add("hide");

        }
      });


    }

    if (document.querySelector(".lead-form-container")) {
      leadFormProductValidate()

    }


    numericCheck()
    onlyAlpha()


  }, [isChecked,props])




  return (

    <>


      <div className="revamp-digicls lead-form-outerdiv" id="articles-lead-form">


        <div className="lead-form-container" >

          <div className="lead-form-product">
            <div className="lead-form-product__thanks-msg hide">


              <div className="lead-form-product__info-wrap">
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    h4: ({ node, ...props }) => <h4 className='revamp-fontStyle6' {...props} />,
                    p: ({ node, ...props }) => <p className='revamp-fontStyle17' {...props} />

                  }}
                >
                  {props.formDetails.attributes.ThanksTxt}
                </ReactMarkdown>

              </div>
            </div>
            <div className="lead-form-product__error-msg hide">
              <div className="lead-form-product__info-wrap">

                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    h4: ({ node, ...props }) => <h4 className='revamp-fontStyle6' {...props} />,
                    p: ({ node, ...props }) => <p className='revamp-fontStyle17' {...props} />

                  }}
                >
                  {props.formDetails.attributes.ErrorTxt}
                </ReactMarkdown>


              </div>
            </div>
            <div className="lead-form-product__container">
              <div className="lead-form-product__title-wrap">
                <div className="lead-form-product__title">
                  <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    components={{

                      //   li: ({node, ...props}) => <li className='accordian__list-item' {...props} />

                    }}
                  >
                    {props.formDetails.attributes.Title}
                  </ReactMarkdown>

                </div>
              </div>
              <div className="lead-form-product__wrap">
                <form className="abc-form abc-form--lead" autoComplete="off">
                  <div className="form-sub-wrapper lf1">


                    <LeadFormBlockManager inputFieldProps={props.formDetails} />
                    <div className="call-me-button form-group col-12 col-md-2">
                      <button
                        className="button button-brown disabled submit-agree-leadformprod"
                        type="button"

                      >
                        {props.formDetails.attributes.BtnText}
                      </button>
                    </div>
                    <div className="col-12 form-group form-group--tnc revamp-leadform-errdiv">


                      <div id="revamptnc-error" className="error hide">*This field is required.</div>

                      <div className="form-check typ2 revamp-leadform-err">

                        <label htmlFor="productleadForm">
                          <input type="checkbox"
                            className="cb-tnc"
                            id="productleadForm"
                            checked={isChecked}
                            // onChange={(e)=>setIsChecked(!isChecked)}

                            onChange={handleCheckboxChange} 
                            />
                          {/* <input checked onChange={checkTNC} className="cb-tnc" data-val="true" data-val-required="The tnc field is required." id="productleadForm" name="tnc" type="checkbox" value="true" data-gtm-form-interact-field-id="0" /> */}
                          <div className="checklist-controlIndicator"></div>
                          <div className="revamp-checklist-statement">

                            <ReactMarkdown
                              rehypePlugins={[rehypeRaw]}
                              components={{


                              }}
                            >
                              {props.formDetails.attributes.TNCText}
                            </ReactMarkdown>


                          </div> </label>


                      </div>
                    </div>
                  </div>


                </form>
              </div>
            </div>

          </div>




        </div>




      </div>

    </>




  )
}

export default LeadFormContainer