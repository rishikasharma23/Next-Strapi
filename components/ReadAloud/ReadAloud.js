import React, { useEffect } from 'react'
import "../../styles/_readaloud.scss";


export default function ReadAloud({readAloudData}) {

    useEffect(()=>{
        function readAloudButtonDisplay() {
            let readAloudButton = document.querySelector('.readAloudButton');
            readAloudButton.addEventListener('click', function () {
              document.querySelector('.audioPlayer').style.display = 'block';
              document.querySelector('.audioPlayer').style.width = '100%';
              if (window.innerWidth < 600) {
                document.querySelector(".audioPlayer .audioPlayer--maximized").style.display = "block";
                document.querySelector(".audioPlayer .audioPlayer--minimized").style.display = "none";
                document.querySelector(".audioPlayer .audioPlayer--desktop").style.display = "none";
              }
              else {
                document.querySelector(".audioPlayer .audioPlayer--desktop").style.display = "block";
                document.querySelector(".audioPlayer .audioPlayer--maximized").style.display = "none";
                document.querySelector(".audioPlayer .audioPlayer--minimized").style.display = "none";
                document.querySelector('.audioPlayer').style.backgroundColor = 'unset';
              }
            })
          }
          if (document.querySelectorAll('.readAloudButton').length >= 1) {
            readAloudButtonDisplay();
          }
    })
    return (
      <>
      {readAloudData?.data?.attributes?.Text && <div className="readAloudButton">
            <span className="icon icon-SoundOn"></span>
            <p className="readAloudButtonText">{readAloudData?.data?.attributes?.Text}</p>
        </div>
      }
      </>  
    )
}
