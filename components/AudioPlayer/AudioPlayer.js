import React, { useEffect, useState } from 'react'

export default function AudioPlayer({ audioPlayerData }) {


    useEffect(() => {

        function formatSeconds(seconds) {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = Math.floor(seconds % 60);
            const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
            const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
            return formattedMinutes + ':' + formattedSeconds;
        }

        var audioPlayer = document.querySelector('.audioPlayer');
        var audioPlayerContainer = document.querySelector('.audioPlayer__container');

        var audioPlayer_maximized = document.querySelector('.audioPlayer--maximized');
        var audioPlayer_minimized = document.querySelector('.audioPlayer--minimized');
        var audioPlayer_desktop = document.querySelector('.audioPlayer--desktop');

        var audioPlayerMinimizeIcon_maximized = document.querySelector('.audioPlayer--maximized .audioPlayer__minimizeIcon');
        var audioPlayerCloseButtonIcon_maximized = document.querySelector('.audioPlayer--maximized .audioPlayer__closeButtonIcon');
        var audioPlayerRewindIcon_maximized = document.querySelector('.audioPlayer--maximized .audioPlayer__rewindIcon');
        var audioPlayerForwardIcon_maximized = document.querySelector('.audioPlayer--maximized .audioPlayer__forwardIcon');
        var playButton_maximized = document.querySelector('.audioPlayer--maximized .audioPlayer__playIcon');
        var pauseButton_maximized = document.querySelector('.audioPlayer--maximized .audioPlayer__pauseIcon');

        var audioDetails_minimized = document.querySelector('.audioPlayer--minimized .audioPlayer__audioDetails');
        var playButton_minimized = document.querySelector('.audioPlayer--minimized .audioPlayer__playIcon');
        var pauseButton_minimized = document.querySelector('.audioPlayer--minimized .audioPlayer__pauseIcon');

        var audioPlayerRewindIcon_desktop = document.querySelector('.audioPlayer--desktop .audioPlayer__rewindIcon');
        var audioPlayerForwardIcon_desktop = document.querySelector('.audioPlayer--desktop .audioPlayer__forwardIcon');
        var playButton_desktop = document.querySelector('.audioPlayer--desktop .audioPlayer__playIcon');
        var pauseButton_desktop = document.querySelector('.audioPlayer--desktop .audioPlayer__pauseIcon');
        var audioPlayerCloseButtonIcon_desktop = document.querySelector('.audioPlayer--desktop .audioPlayer__closeButtonIcon');

        var music = document.querySelector('.audioPlayer__music');
        var audioPlayerTime = document.querySelector('.audioPlayer__time');

        var progressed_maximized = document.querySelector('.audioPlayer--maximized .audioPlayer__progressed');
        var progressBar_maximized = document.querySelector('.audioPlayer--maximized .audioPlayer__progressBar');
        var audioPlayerDuration_maximized = document.querySelector('.audioPlayer--maximized .audioPlayer__duration');

        var progressed_minimized = document.querySelector('.audioPlayer--minimized .audioPlayer__progressed');
        var progressBar_minimized = document.querySelector('.audioPlayer--minimized .audioPlayer__progressBar');

        var progressed_desktop = document.querySelector('.audioPlayer--desktop .audioPlayer__progressed');
        var progressBar_desktop = document.querySelector('.audioPlayer--desktop .audioPlayer__progressBar');

        var root = document.querySelector(':root');
        var soundOnIcon = document.querySelector('.audioPlayer__soundOnIcon');
        var soundOffIcon = document.querySelector('.audioPlayer__soundOffIcon');
        var slider = document.querySelector('.audioPlayer__soundSlider');
        var sliderContainer = document.querySelector('.audioPlayer__volumeBar');

        var isAudioPlaying = false;


        setInterval(() => {
            // Do something every second      
            if (music.currentTime == music.duration) {
                isAudioPlaying = false;
            }

            if (isAudioPlaying) {
                playButton_maximized.style.display = 'none';
                pauseButton_maximized.style.display = 'block';

                playButton_minimized.style.display = 'none';
                pauseButton_minimized.style.display = 'block';

                playButton_desktop.style.display = 'none';
                pauseButton_desktop.style.display = 'block';
            }
            else {
                playButton_maximized.style.display = 'block';
                pauseButton_maximized.style.display = 'none';

                playButton_minimized.style.display = 'block';
                pauseButton_minimized.style.display = 'none';

                playButton_desktop.style.display = 'block';
                pauseButton_desktop.style.display = 'none';
            }

        }, 1000);


        if (audioPlayerDuration_maximized) {
            audioPlayerDuration_maximized.innerText = formatSeconds(Math.floor(music.duration));
        }


        music.ontimeupdate = function (e) {
            audioPlayerTime.innerText = formatSeconds(Math.floor(music.currentTime));
            progressed_maximized.style.width = Math.floor(music.currentTime * 100 / music.duration) + "%";
            progressed_minimized.style.width = Math.floor(music.currentTime * 100 / music.duration) + "%";
            progressed_desktop.style.width = Math.floor(music.currentTime * 100 / music.duration) + "%";
        }

        progressBar_maximized.onclick = function (e) {
            music.currentTime = ((e.offsetX / progressBar_maximized.offsetWidth) * music.duration);
        }

        progressBar_minimized.onclick = function (e) {
            music.currentTime = ((e.offsetX / progressBar_minimized.offsetWidth) * music.duration);
        }

        progressBar_desktop.onclick = function (e) {
            music.currentTime = ((e.offsetX / progressBar_desktop.offsetWidth) * music.duration);
        }


        // /* ********** CONTROLS FOR MOBILE - MAXIMIZED VERSION ********** */
        audioPlayerMinimizeIcon_maximized.onclick = function () {
            audioPlayer_maximized.style.display = 'none';
            audioPlayer_minimized.style.display = 'block';
            audioPlayerContainer.style.height = '100vh';
            audioPlayer_minimized.style.backgroundColor = 'white';
            audioPlayer_minimized.style.zIndex = '100';
            audioPlayer_minimized.style.position = 'fixed';
            audioPlayer_minimized.style.left = '0';
            audioPlayer_minimized.style.bottom = '0';
            audioPlayer_minimized.style.margin = '0 8px';
            audioPlayer_minimized.style.marginBottom = '67px';
            audioPlayer.style.width = 'unset';
        }

        audioPlayerCloseButtonIcon_maximized.onclick = function () {
            audioPlayer_minimized.style.display = 'none';
            audioPlayer_maximized.style.display = 'none';
            music.pause();
            music.currentTime = 0;
            audioPlayer.style.width = 'unset';
            isAudioPlaying = false;
        }

        audioPlayerRewindIcon_maximized.onclick = function () {
            var tenSecondsRewind = music.currentTime -= 10;
            music.currentTime = (tenSecondsRewind < 0) ? 0 : tenSecondsRewind;
        }

        audioPlayerForwardIcon_maximized.onclick = function () {
            var tenSecondsForward = music.currentTime += 10;
            music.currentTime = (tenSecondsForward > music.duration) ? music.duration : tenSecondsForward;
        }

        playButton_maximized.onclick = function () {
            playButton_maximized.style.display = 'none';
            pauseButton_maximized.style.display = 'block';
            music.play();
            isAudioPlaying = true;
        }

        pauseButton_maximized.onclick = function () {
            pauseButton_maximized.style.display = 'none';
            playButton_maximized.style.display = 'block';
            music.pause();
            isAudioPlaying = false;
        }


        // /* ********** CONTROLS FOR MOBILE - MINIMIZED VERSION ********** */
        audioDetails_minimized.onclick = function () {
            audioPlayer_minimized.style.display = 'none';
            audioPlayer_maximized.style.display = 'block';
            audioPlayer.style.width = '100%';
        }

        playButton_minimized.onclick = function () {
            playButton_minimized.style.display = 'none';
            pauseButton_minimized.style.display = 'block';
            music.play();
            isAudioPlaying = true;
        }

        pauseButton_minimized.onclick = function () {
            pauseButton_minimized.style.display = 'none';
            playButton_minimized.style.display = 'block';
            music.pause();
            isAudioPlaying = false;
        }


        // /* ********** CONTROLS FOR DESKTOP ********** */
        audioPlayerRewindIcon_desktop.onclick = function () {
            var tenSecondsRewind = music.currentTime -= 10;
            music.currentTime = (tenSecondsRewind < 0) ? 0 : tenSecondsRewind;
        }

        audioPlayerForwardIcon_desktop.onclick = function () {
            var tenSecondsForward = music.currentTime += 10;
            music.currentTime = (tenSecondsForward > music.duration) ? music.duration : tenSecondsForward;
        }

        playButton_desktop.onclick = function () {
            playButton_desktop.style.display = 'none';
            pauseButton_desktop.style.display = 'block';
            music.play();
            isAudioPlaying = true;
        }

        pauseButton_desktop.onclick = function () {
            pauseButton_desktop.style.display = 'none';
            playButton_desktop.style.display = 'block';
            music.pause();
            isAudioPlaying = false;
        }

        audioPlayerCloseButtonIcon_desktop.onclick = function () {
            audioPlayer_desktop.style.display = 'none';
            music.pause();
            music.currentTime = 0;
            audioPlayer.style.width = 'unset';
            isAudioPlaying = false;
        }


        function handleRangeUpdate(el) {
            // const volume = music.volume * 100; // Convert volume to a percentage.
            // slider.value = volume; // Update the slider value.
            if (el.target) {
                el = el.target;
            }
            // console.log(el.value)

            root.style.setProperty('--percentage', `${el.value * 100 / (el.max - el.min)}%`);
            slider.value=el.value;
            music.volume = parseFloat((slider.value)/100);
            

            if (el.value > 0) {
                soundOnIcon.style.display = 'block';
                soundOffIcon.style.display = 'none';
            }
            else {
                soundOnIcon.style.display = 'none';
                soundOffIcon.style.display = 'block';
            }
        }

        handleRangeUpdate(slider);

        //toggle the volume 
        let lastVolume = 0.5;

        function toggleMute() {
            // console.log(slider.value)
            if (slider.value > 0) {
                lastVolume = slider.value;
                slider.value = 0;
                music.volume = 0;
                handleRangeUpdate(slider);
            }
            else {
                slider.value= lastVolume;
                music.volume = parseFloat((slider.value)/100);
                handleRangeUpdate(slider);
            }
        }
        // function toggleMute() {
        //     if (music.volume > 0) {
        //         lastVolume = music.volume; // Store the current volume before muting.
        //         music.volume = 0;
        //     } else {
        //         music.volume = lastVolume; // Restore the previous volume.
        //     }
        //     handleRangeUpdate(slider);
        // }
        

        slider.addEventListener('input', handleRangeUpdate);
        slider.addEventListener('input', function () {

           if(music.volume) {
            // console.log("music volume",music.volume)
            music.volume = parseFloat((slider.value)/100) 
        };
        });

        soundOnIcon.addEventListener('click', toggleMute);
        soundOffIcon.addEventListener('click', toggleMute);

        sliderContainer.onmousemove = e => {
            
            const rect = sliderContainer.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top
                // console.log("mouse move check",x,y)

            sliderContainer.style.setProperty("--mouse-x", `${x}px`);
            sliderContainer.style.setProperty("--mouse-y", `${y}px`);
        }
        // Rest of your JavaScript code for the audio player display function.


        // var audioPlayers = document.querySelectorAll('.audioPlayer');
        // if (audioPlayers.length >= 1) {
        //     audioPlayerDisplay();
        // }


    }, [])


    return (
        <div className="audioPlayer">
            <div className="audioPlayer__container">
                <div className="audioPlayer--maximized">
                    <div className="audioPlayer__header">
                        <span className="audioPlayer__minimizeIcon icon icon-Minimise"></span>
                        <div className="audioPlayer__headerDetails">
                            <p>{audioPlayerData?.data?.attributes?.AudioPlayerHeading}</p>
                            <p>{audioPlayerData?.data?.attributes?.AudioPlayerSubHeading}</p>
                        </div>
                        <span className="audioPlayer__closeButtonBg">
                            <span className="audioPlayer__closeButtonIcon icon icon-Close"></span>
                        </span>
                    </div>
                    <div className="audioPlayer__body">
                        <div className="audioPlayer__soundWavesAnimation">
                            <img className="audioPlayer__podcastMic" src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${audioPlayerData?.data?.attributes?.PodcastImage?.data?.attributes?.url}`} alt=""/>
                                <div className="audioPlayer__soundWavesCircle"></div>
                                <div className="audioPlayer__soundWavesCircle"></div>
                                <div className="audioPlayer__soundWavesCircle"></div>
                        </div>
                        <div className="audioPlayer__audioTitleContainer">
                            <p className="audioPlayer__audioTitle">
                                {audioPlayerData?.data?.attributes?.AudioTitle}
                            </p>
                        </div>
                        <div className="audioPlayer__controlButtons">
                            <span className="audioPlayer__rewindIcon icon icon-Rewind"></span>
                            <span className="audioPlayer__playIcon icon icon-Play"></span>
                            <span className="audioPlayer__pauseIcon icon icon-Pause"></span>
                            <span className="audioPlayer__forwardIcon icon icon-Forward"></span>
                        </div>
                        <div className="audioPlayer__seekBar">
                            <audio className="audioPlayer__music" controls>
                                <source src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${audioPlayerData?.data?.attributes?.AudioFile?.data?.attributes?.url}`} type=""/>
                            </audio>

                            <div className="audioPlayer__progressBar">
                                <div className="audioPlayer__progressed"></div>
                            </div>

                            <div className="audioPlayer__timeStamp">
                                <p className="audioPlayer__time">00:00</p>
                                <p className="audioPlayer__duration">00:00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="audioPlayer--minimized">
                    <div className="audioPlayer__minimizedControls">
                        <div className="audioPlayer__audioDetails">
                            <p>{audioPlayerData?.data?.attributes?.AudioPlayerHeading}</p>
                            <p>{audioPlayerData?.data?.attributes?.AudioTitle}</p>
                        </div>
                        <div>
                            <span className="audioPlayer__playIcon icon icon-Play"></span>
                            <span className="audioPlayer__pauseIcon icon icon-Pause"></span>
                        </div>
                    </div>
                    <div className="audioPlayer__seekBar">
                        <audio className="audioPlayer__music" controls>
                            <source src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${audioPlayerData?.data?.attributes?.AudioFile?.data?.attributes?.url}`} type=""/>
                        </audio>

                        <div className="audioPlayer__progressBar" >
                            <div className="audioPlayer__progressed"></div>
                        </div>
                    </div>
                </div>
                <div className="audioPlayer--desktop">
                    <div className="audioPlayer__seekBar">
                        <audio className="audioPlayer__music" controls>
                            <source src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${audioPlayerData?.data?.attributes?.AudioFile?.data?.attributes?.url}`} type=""/>
                        </audio>

                        <div className="audioPlayer__progressBar" >
                            <div className="audioPlayer__progressed"></div>
                        </div>
                    </div>
                    <div className="audioPlayer__desktopControls">
                        <div className="audioPlayer__audioDetails">
                            <p>{audioPlayerData?.data?.attributes?.AudioTitle}</p>
                            <p>{audioPlayerData?.data?.attributes?.AudioPlayerSubHeading}</p>
                        </div>
                        <div className="audioPlayer__controlButtons">
                            <span className="audioPlayer__rewindIcon icon icon-Rewind"></span>
                            <span className="audioPlayer__playIcon icon icon-Play"></span>
                            <span className="audioPlayer__pauseIcon icon icon-Pause"></span>
                            <span className="audioPlayer__forwardIcon icon icon-Forward"></span>
                        </div>
                        <div className="audioPlayer__volumeBar">
                            <span className="audioPlayer__soundOnIcon icon icon-SoundOn"></span>
                            <span className="audioPlayer__soundOffIcon icon icon-SoundOff"></span>
                            <input className="audioPlayer__soundSlider" type="range" defaultValue='30' min="0" max="100"/>
                        </div>
                        <span className="audioPlayer__closeButtonBg">
                            <span className="audioPlayer__closeButtonIcon icon icon-Close"></span>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}
