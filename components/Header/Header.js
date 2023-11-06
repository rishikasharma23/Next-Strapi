import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import PrimaryHeaderBlockManager from '../shared/BlockManager/primaryHeaderBlockManager'
import MobPrimaryHeaderBlockManager from '../shared/BlockManager/mobPrimaryHeaderBlockManager'
import HeaderWrapperManager from '../shared/BlockManager/headerWrapperManager'


const Header = ({ headerProps }) => {

    const [globalNavItems, setGlobalNavItems] = useState([])
    const [currentYear, setCurrentYear] = useState("")
    const globalNavColor = []


    const disableLinkRedirection = (e) => {
        e.preventDefault()
    }

    const headerSearchFn = () => {
        console.log("search functionality logic implementation")
    }

    /* BELOW LOGOUT REQUEST FOR DEV PURPOSE */

    const logoutRequest = () => {

        fetch('/api/sitecore/Login/LogOut', {
            method: 'POST',
        })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    window.location = data; // Redirect to the URL received from the server
                }
            })
            .catch((error) => {
                console.error('Error loading the data', error);
            });

    }

    useEffect(() => {

        setGlobalNavItems(headerProps?.data?.attributes?.HeaderNavLists)
        const footerNow = new Date();
        setCurrentYear(footerNow.getFullYear());
        // logoutRequest();



        headerProps?.data?.attributes?.TopGlobalItems?.data?.map((item) => {


            headerProps?.data?.attributes?.TopGlobalSolutions.data.map((solutionItem) => {



                if (solutionItem?.attributes?.abcl_top_global_item?.data?.attributes?.TopGlobalItem === item.attributes.TopGlobalItem) {
                    item.attributes.TopGlobalSolutionList = solutionItem?.attributes?.TopGlobalSolutionList
                }

            })


        })


        headerProps?.data?.attributes?.PrimaryNav?.headerCategories?.data.map((item) => {

            item?.attributes?.ABSLIHeaderCategoryBlock.map((categoryBlockItem) => {

                if (categoryBlockItem?.absli_header_product?.data?.attributes?.ABSLIHeaderProductTitle) {

                    let headerProdInfo = headerProps?.data?.attributes?.PrimaryNav?.headerProducts?.data.filter((headerProduct) => {

                        return headerProduct?.attributes?.ABSLIHeaderProductTitle === categoryBlockItem?.absli_header_product?.data?.attributes?.ABSLIHeaderProductTitle
                    })

                    categoryBlockItem.HeaderProductInfo = headerProdInfo


                }
            })
        })


        const globalNavEvts = () => {

            // Function to handle mouseover event
            function handleMouseover(menuElement, childMenuId) {
                const childMenu = document.getElementById(childMenuId);
                const topMenuLinks = menuElement.getElementsByTagName('a');

                if (childMenu) {
                    childMenu.style.display = 'block';
                }


                for (let i = 0; i < topMenuLinks.length; i++) {
                    topMenuLinks[i].classList.add('open');
                }

                const line = document.getElementById('line');
                if (line && line?.classList?.contains('vertical-line')) {
                    line?.classList?.remove('vertical-line');
                }
            }

            // Function to handle mouseout event
            function handleMouseout(menuElement, childMenuId) {
                const childMenu = document.getElementById(childMenuId);
                const topMenuLinks = menuElement.getElementsByTagName('a');

                if (childMenu) {
                    childMenu.style.display = 'none';
                }


                for (let i = 0; i < topMenuLinks.length; i++) {
                    topMenuLinks[i].classList.remove('open');
                }

                const line = document.getElementById('line');
                if (line && !line.classList.contains('vertical-line')) {
                    line.classList.add('vertical-line');
                }
            }

            // Attach event listeners to elements
            const personalTopMenu = document.getElementById('personal-topmenu');
            personalTopMenu && personalTopMenu.addEventListener('mouseover', function () {
                handleMouseover(personalTopMenu, 'personal-childmenu');
            });
            personalTopMenu && personalTopMenu.addEventListener('mouseout', function () {
                handleMouseout(personalTopMenu, 'personal-childmenu');
            });

            const corporateTopMenu = document.getElementById('corporate-topmenu');
            corporateTopMenu && corporateTopMenu.addEventListener('mouseover', function () {
                handleMouseover(corporateTopMenu, 'corporate-childmenu');
            });
            corporateTopMenu && corporateTopMenu.addEventListener('mouseout', function () {
                handleMouseout(corporateTopMenu, 'corporate-childmenu');
            });

            const advisorTopMenu = document.getElementById('advisor-topmenu');
            advisorTopMenu && advisorTopMenu.addEventListener('mouseover', function () {
                handleMouseover(advisorTopMenu, 'advisor-childmenu');
            });
            advisorTopMenu && advisorTopMenu.addEventListener('mouseout', function () {
                handleMouseout(advisorTopMenu, 'advisor-childmenu');
            });

            const careerTopMenu = document.getElementById('Career-topmenu');
            careerTopMenu && careerTopMenu.addEventListener('mouseover', function () {
                handleMouseover(careerTopMenu, 'Career-childmenu');
            });
            careerTopMenu && careerTopMenu.addEventListener('mouseout', function () {
                handleMouseout(careerTopMenu, 'Career-childmenu');
            });

            const businessTopMenu = document.getElementById('business-topmenu');
            businessTopMenu && businessTopMenu.addEventListener('mouseover', function () {
                handleMouseover(businessTopMenu, 'business-childmenu');
            });
            businessTopMenu && businessTopMenu.addEventListener('mouseout', function () {
                handleMouseout(businessTopMenu, 'business-childmenu');
            });

            // Hide vertical line for elements with the "selected-menu" class
            const selectedMenu = document.querySelector('.selected-menu');
            if (selectedMenu) {

                const verticalLine = selectedMenu && selectedMenu.previousElementSibling && selectedMenu.previousElementSibling.querySelector('.vertical-line');
                if (verticalLine) {
                    verticalLine.style.display = 'none';
                }
            }


        }

        const websiteMobileNav = () => {
            // Select elements using document.querySelectorAll
            const hamburger = document.querySelector('.wb-hamburger');
            const mobNavWrap = document.querySelector('.wb-mob-nav-wrap');
            const mobNavClose = document.querySelector('.wb-mob-nav-wrap__close');
            const firstLevelItems = document.querySelectorAll('.first-level');
            const secondLevelItems = document.querySelectorAll('.Second-level');
            const thirdLevelItems = document.querySelectorAll('.Third-level');
            const goBackButton = document.querySelector('.wb-mob-nav__go-back');
            const linkType2 = document.querySelectorAll('.wb-mob-nav__link--typ2 a');

            // Add click event listener for the hamburger icon
            hamburger.addEventListener('click', function (e) {
                e.preventDefault();
                mobNavWrap.classList.add('wb-mob-nav-wrap--active');
                document.documentElement.style.overflow = 'hidden';
            });

            // Add click event listener for the close button
            mobNavClose.addEventListener('click', function (e) {
                e.preventDefault();
                mobNavWrap.classList.remove('wb-mob-nav-wrap--active');
                document.querySelector('.wb-mob-nav__link-list').classList.remove('wb-mob-nav__link-list--active');
                document.documentElement.style.overflow = 'auto';
                document.querySelector('.wb-mob-nav__go-back').classList.remove('wb-mob-nav__go-back--active');
                document.querySelectorAll('.wb-mob-nav__link > a').forEach(function (link) {
                    link.classList.remove('active');
                });
                document.querySelector('.wb-mob-nav__title--link').style.display = 'none';
                document.querySelector('.wb-mob-nav__title--default').style.display = 'block';
            });

            // Add click event listeners for first-level items
            firstLevelItems.forEach(function (item) {
                item.addEventListener('click', function (e) {
                    e.stopPropagation();

                    item.classList.toggle('active');
                    document.querySelectorAll('.first-level:not(.active)').forEach(function (sibling) {
                        sibling.classList.remove('active');
                    });
                    const linkList = item.nextElementSibling;
                    // if (linkList) {
                    //     linkList.mCustomScrollbar({
                    //         theme: 'dark-3'
                    //     });
                    // } later check
                });
            });

            // Add click event listeners for second-level items
            secondLevelItems.forEach(function (item) {
                item.addEventListener('click', function (e) {
                    e.stopPropagation();

                    item.classList.toggle('active');
                    document.querySelectorAll('.Second-level:not(.active)').forEach(function (sibling) {
                        sibling.classList.remove('active');
                    });
                    const linkList = item.nextElementSibling;
                    // if (linkList) {
                    //     linkList.mCustomScrollbar({
                    //         theme: 'dark-3'
                    //     });
                    // } later
                });
            });

            // Add click event listeners for third-level items
            thirdLevelItems.forEach(function (item) {
                item.addEventListener('click', function (e) {
                    e.stopPropagation();

                    item?.classList.toggle('active');
                    document.querySelectorAll('.Third-level:not(.active)').forEach(function (sibling) {
                        sibling.classList.remove('active');
                    });
                    const linkList = item.nextElementSibling;
                    // if (linkList) {
                    //     linkList.mCustomScrollbar({
                    //         theme: 'dark-3'
                    //     });
                    // } later
                });
            });

            // Add click event listener for the "go back" button
            goBackButton.addEventListener('click', function (e) {
                e.preventDefault();
                let currentCategory, currentURL;
                const level4LinkList = document.querySelector('.wb-mob-nav__link-list--level4');
                const level2ActiveLink = document.querySelector('.wb-mob-nav__link-list--level2 .wb-mob-nav__link > a.active');
                const level3ActiveLink = document.querySelector('.wb-mob-nav__link-list--level3 .wb-mob-nav__link > a.active');

                if (level4LinkList && level4LinkList.classList.contains('wb-mob-nav__link-list--active')) {
                    level4LinkList.classList.remove('wb-mob-nav__link-list--active');
                    level4LinkList.querySelectorAll('.wb-mob-nav__link > a.active').forEach(function (link) {
                        link.classList.remove('active');
                    });
                    currentURL = level2ActiveLink.getAttribute('href');
                    currentCategory = level2ActiveLink.textContent;
                    document.querySelector('.wb-mob-nav__title--default').style.display = 'none';
                    document.querySelector('.wb-mob-nav__title--link').textContent = currentCategory;
                    document.querySelector('.wb-mob-nav__title--link').setAttribute('href', currentURL);
                    document.querySelector('.wb-mob-nav__title--link').style.display = 'block';
                    websiteMobileNavHeight(document.querySelector('.wb-mob-nav__link-list--level3'));
                } else if (level3LinkList && level3LinkList.classList.contains('wb-mob-nav__link-list--active')) {
                    level3LinkList.classList.remove('wb-mob-nav__link-list--active');
                    level3LinkList.querySelectorAll('.wb-mob-nav__link > a.active').forEach(function (link) {
                        link.classList.remove('active');
                    });
                    currentURL = level1ActiveLink.getAttribute('href');
                    currentCategory = level1ActiveLink.textContent;
                    document.querySelector('.wb-mob-nav__title--default').style.display = 'none';
                    document.querySelector('.wb-mob-nav__title--link').textContent = currentCategory;
                    document.querySelector('.wb-mob-nav__title--link').setAttribute('href', currentURL);
                    document.querySelector('.wb-mob-nav__title--link').style.display = 'block';
                    websiteMobileNavHeight(document.querySelector('.wb-mob-nav__link-list--level2'));
                } else if (level2LinkList && level2LinkList.classList.contains('wb-mob-nav__link-list--active')) {
                    level2LinkList.classList.remove('wb-mob-nav__link-list--active');
                    level2LinkList.querySelectorAll('.wb-mob-nav__link > a.active').forEach(function (link) {
                        link.classList.remove('active');
                    });
                    document.querySelector('.wb-mob-nav__title--link').style.display = 'none';
                    document.querySelector('.wb-mob-nav__title--default').style.display = 'block';
                    websiteMobileNavHeight(document.querySelector('.wb-mob-nav__link-list--level1'));
                }

                if (!document.querySelector('.wb-mob-nav__link-list--level2').classList.contains('wb-mob-nav__link-list--active')) {
                    document.querySelector('.wb-mob-nav__go-back').classList.remove('wb-mob-nav__go-back--active');
                }
            });

            // Add click event listeners for link type 2
            linkType2.forEach(function (link) {
                link.addEventListener('click', function (e) {
                    e.stopImmediatePropagation();
                    const mobHref = link.getAttribute('href');
                    window.location.href = mobHref;
                });
            });
        }

        const websiteMobileNavHeight = (selector) => {
            var linkLists = document.querySelectorAll('.wb-mob-nav__link-list');
            for (var i = 0; i < linkLists.length; i++) {
                linkLists[i].classList.remove("overflowItems");
            }

            var elements = document.querySelectorAll(selector);
            elements.forEach(function (element) {
                var initHeight = element.clientHeight;
                var numOfItems = element.querySelectorAll("li").length;
                var itemHeight = element.querySelector("li").clientHeight;
                var totalHeight = numOfItems * itemHeight;
                if (totalHeight > initHeight) {
                    element.classList.add("overflowItems");
                }
            });
        }

        // Mobile view
        // document.querySelector(".mobile-menu-wrapper").addEventListener("click", function () {
        //     var selectedMenu = document.querySelector(".top-bg .nav .selected-menu");
        //     var selectedid = selectedMenu ? selectedMenu.getAttribute('id') : "";

        //     if (selectedid !== "" && typeof selectedid !== 'undefined') {
        //         selectedid = selectedid.replace('-topmenu', '-mobile-topmenu');
        //         document.querySelector(".mobi-nav-wrapper").innerHTML = "";
        //         var mainNav = document.querySelector(".top-menu").innerHTML;
        //         document.querySelectorAll("[id*=" + selectedid + "]")[0].click();
        //         if (document.getElementById("mobileline")) {
        //             document.getElementById("mobileline").style.position = "relative";
        //             document.getElementById("mobileline").style.top = "23px";
        //         }

        //     }
        // });
        document.querySelector(".mobile-menu-wrapper")?.addEventListener("click", function () {
            var selectedMenu = document.querySelector(".top-bg .nav .selected-menu");
            if (selectedMenu && selectedMenu.getAttribute('id') !== null && typeof selectedMenu.getAttribute('id') !== 'undefined') {
                var selectedId = selectedMenu.getAttribute('id').replace('-topmenu', '-mobile-topmenu');
                var mobiNavWrapper = document.querySelector(".mobi-nav-wrapper");
                mobiNavWrapper.innerHTML = "";
                var mainNav = document.querySelector(".top-menu").innerHTML;
                mobiNavWrapper.innerHTML = mainNav;
                var selectedElements = document.querySelectorAll("[id*=" + selectedId + "]");
                selectedElements.forEach(function (element) {
                    element.click();
                });
                if (document.getElementById("mobileline")) {
                    document.getElementById("mobileline").style.position = "relative";
                    document.getElementById("mobileline").style.top = "23px";

                }

            }
        });


        document.getElementById("personal-mobile-topmenu")?.addEventListener("click", function () {
            var utilityLinks = document.querySelectorAll(".utility-links-global-nav ul li");
            utilityLinks.forEach(function (item) {
                item.classList.remove("selected-menu");
            });

            this.classList.add("selected-menu");
            document.querySelector(".mobi-nav-wrapper").innerHTML = "";
            var selectedid = document.querySelector(".top-bg .nav .selected-menu").getAttribute('id');
            var mainNav = "";

            if (selectedid.includes("personal")) {
                mainNav = document.querySelector(".top-menu").innerHTML;
                document.querySelector(".utility-links").style.display = "table";
                document.querySelector(".utility-links").style.paddingTop = "25px";
                if (document.getElementById("mobileline")) {
                    document.getElementById("mobileline").style.display = "table";
                }

            } else {
                var personalChildMenu = document.querySelectorAll('#personal-childmenu > li');
                if (personalChildMenu.length > 0) {
                    mainNav = personalChildMenu[0].innerHTML;
                } else {
                    mainNav = document.getElementById("personal-childmenu").innerHTML;
                }

                document.querySelector(".utility-links").style.display = "none";
                if (document.getElementById("mobileline")) {
                    document.getElementById("mobileline").style.display = "none";
                }

            }

            document.querySelector(".mobi-nav-wrapper").innerHTML = mainNav;
        });

        document.getElementById("business-mobile-topmenu")?.addEventListener("click", function () {
            var utilityLinks = document.querySelectorAll(".utility-links-global-nav ul li");

            utilityLinks.forEach(function (element) {
                element.classList.remove("selected-menu");
            });

            this.classList.add("selected-menu");

            document.querySelector(".mobi-nav-wrapper").innerHTML = "";

            var selectedMenu = document.querySelector(".top-bg .nav .selected-menu");
            var selectedId = selectedMenu.getAttribute('id');
            var mainNav = "";

            if (selectedId.includes("business")) {
                mainNav = document.querySelector(".top-menu").innerHTML;
                document.querySelector(".utility-links").style.display = "table";
                document.querySelector(".utility-links").style.paddingTop = "25px";
                if (document.getElementById("mobileline")) {
                    document.getElementById("mobileline").style.display = "table";
                }

            } else {
                var businessTopmenuLink = document.querySelector("#business-topmenu a");
                var get = businessTopmenuLink.getAttribute('href');
                window.location.href = get;

                document.querySelector(".utility-links").style.display = "none";
                if (document.getElementById("mobileline")) {
                    document.getElementById("mobileline").style.display = "none";
                }

            }

            document.querySelector(".mobi-nav-wrapper").innerHTML = mainNav;
        });

        document.getElementById("corporate-mobile-topmenu")?.addEventListener("click", function () {
            // Remove the "selected-menu" class from all elements with class "utility-links-global-nav ul li"
            var utilityLinks = document.querySelectorAll(".utility-links-global-nav ul li");
            utilityLinks.forEach(function (element) {
                element.classList.remove("selected-menu");
            });

            // Add the "selected-menu" class to the clicked element
            this.classList.add("selected-menu");

            // Clear the content of elements with class "mobi-nav-wrapper"
            document.querySelector(".mobi-nav-wrapper").innerHTML = "";

            // Get the ID attribute of the selected menu item with class "selected-menu"
            var selectedid = document.querySelector(".top-bg .nav .selected-menu").id;
            var mainNav = "";

            if (selectedid.includes("corporate")) {
                mainNav = document.querySelector(".top-menu").innerHTML;
                document.querySelector(".utility-links").style.display = "table";
                document.querySelector(".utility-links").style.paddingTop = "25px";
                if (document.getElementById("mobileline")) {
                    document.getElementById("mobileline").style.display = "table";
                }

            } else {
                var corporateChildMenuItems = document.querySelectorAll('#corporate-childmenu > li');
                if (corporateChildMenuItems.length > 0) {
                    mainNav = corporateChildMenuItems[0].innerHTML;
                } else {
                    mainNav = document.querySelector("#corporate-childmenu").innerHTML;
                }
                document.querySelector(".utility-links").style.display = "none";
                if (document.getElementById("mobileline")) {
                    document.getElementById("mobileline").style.display = "none";
                }

            }

            document.querySelector(".mobi-nav-wrapper").innerHTML = mainNav;
        });

        document.getElementById("advisor-mobile-topmenu")?.addEventListener("click", function () {
            // Remove the "selected-menu" class from all elements with class "utility-links-global-nav ul li"
            var utilityLinks = document.querySelectorAll(".utility-links-global-nav ul li");
            utilityLinks.forEach(function (element) {
                element.classList.remove("selected-menu");
            });

            // Add the "selected-menu" class to the clicked element
            this.classList.add("selected-menu");

            // Clear the content of elements with class "mobi-nav-wrapper"
            document.querySelector(".mobi-nav-wrapper").innerHTML = "";

            // Get the ID attribute of the selected menu item with class "selected-menu"
            var selectedid = document.querySelector(".top-bg .nav .selected-menu").id;
            var mainNav = "";

            if (selectedid.includes("advisor")) {
                mainNav = document.querySelector(".top-menu").innerHTML;
                document.querySelector(".utility-links").style.display = "table";
                document.querySelector(".utility-links").style.paddingTop = "25px";
                if (document.getElementById("mobileline")) {
                    document.getElementById("mobileline").style.display = "table";
                }

            } else {
                var corporateChildMenuItems = document.querySelectorAll('#advisor-childmenu > li');
                if (corporateChildMenuItems.length > 0) {
                    mainNav = corporateChildMenuItems[0].innerHTML;
                } else {
                    mainNav = document.querySelector("#advisor-childmenu").innerHTML;
                }
                document.querySelector(".utility-links").style.display = "none";
                if (document.getElementById("mobileline")) {
                    document.getElementById("mobileline").style.display = "none";
                }

            }

            document.querySelector(".mobi-nav-wrapper").innerHTML = mainNav;
        });



        document.getElementById("Career-mobile-topmenu")?.addEventListener("click", function () {
            var utilityLinks = document.querySelectorAll(".utility-links-global-nav ul li");
            utilityLinks.forEach(function (item) {
                item.classList.remove("selected-menu");
            });
            this.classList.add("selected-menu");

            document.querySelector(".mobi-nav-wrapper").innerHTML = "";

            var selectedid = document.querySelector(".top-bg .nav .selected-menu").getAttribute('id');
            var mainNav = "";

            if (selectedid.includes("Career")) {
                mainNav = document.querySelector(".top-menu").innerHTML;
                document.querySelector(".utility-links").style.display = "table";
                document.querySelector(".utility-links").style.paddingTop = "25px";
                if (document.getElementById("mobileline")) {
                    document.getElementById("mobileline").style.display = "table";
                }

            } else {
                var careerChildMenuItems = document.querySelectorAll('#Career-childmenu > li');
                if (careerChildMenuItems.length > 0) {
                    mainNav = Array.from(careerChildMenuItems).map(function (item) {
                        return item.innerHTML;
                    }).join("");
                } else {
                    var get = document.querySelector("#Career-topmenu a").getAttribute('href');
                    window.location.href = get;
                }

                document.querySelector(".utility-links").style.display = "none";
                if (document.getElementById("mobileline")) {
                    document.getElementById("mobileline").style.display = "none";
                }

            }

            document.querySelector(".mobi-nav-wrapper").innerHTML = mainNav;
        });




        const liMainJS = () => {

            // Select the elements with the class "header-title-arrow" and add a click event listener to them
            var headerTitleArrows = document.querySelectorAll("span.header-title-arrow");

            headerTitleArrows.forEach(function (element) {
                element.addEventListener("click", function () {
                    // Toggle the "active" class on the clicked element
                    element.classList.toggle("active");

                    // Clear the content of elements with class "mobi-nav-wrapper"
                    var mobiNavWrapper = document.querySelector(".mobi-nav-wrapper");
                    mobiNavWrapper.innerHTML = "";

                    // Copy the content from ".main-nav-wrapper nav" to ".mobi-nav-wrapper"
                    var mainNavigation = document.querySelector(".main-nav-wrapper nav").innerHTML;
                    mobiNavWrapper.innerHTML = mainNavigation;

                    // Toggle the "active" and "main-nav-active" classes on the element with id "mobi-navigation"
                    var mobiNavigation = document.getElementById("mobi-navigation");
                    mobiNavigation.classList.toggle("active");
                    mobiNavigation.classList.toggle("main-nav-active");

                    // Add the class "mobile-menu-active" to the body element
                    document.body.classList.add("mobile-menu-active");
                });
            });

            function setLoggedInArrow() {
                var loggedinItem = document.querySelectorAll(".loggedin-item");
                if (loggedinItem.length > 0) {
                    var loginItemWidth = loggedinItem[0].offsetWidth;
                    var setWidth = loginItemWidth / 2 + 5;
                    var arrowUp = document.querySelector(".login-dropdowm > .arrow_up");
                    arrowUp.style.right = setWidth + "px";
                }
            }

            function headerClick() {
                var headerTitles = document.querySelectorAll(".header-title");

                headerTitles.forEach(function (title) {
                    title.addEventListener("click", function () {
                        var _thisele = this;

                        if (!_thisele.classList.contains("disable")) {
                            _thisele.classList.toggle("active");

                            var mobiNavWrapper = document.querySelector(".mobi-nav-wrapper");
                            mobiNavWrapper.innerHTML = "";

                            var mainNavigation = document.querySelector(".main-nav-wrapper nav").innerHTML;
                            mobiNavWrapper.innerHTML = mainNavigation;
                        }
                    });
                });
            }

            // Call the function to add the event listeners to header titles
            headerClick();

            function bannerHeight() {
                var viewportWidth = window.innerWidth;
                var header = document.querySelector("header");
                var bannerContentWrapper = document.querySelector(".banner-content-wrapper");
                var bannerComponent = document.querySelector(".banner-component");
                var bannerWrapper = document.querySelector(".banner-wrapper");

                var headerHeight = header ? header.offsetHeight : 0;
                var bannerContentHeight = bannerContentWrapper ? bannerContentWrapper.offsetHeight : 0;
                var totalHeight = headerHeight + bannerContentHeight;

                if (viewportWidth < 1021) {
                    if (bannerComponent) {
                        bannerComponent.style.height = bannerContentHeight + "px";
                    }
                } else {
                    if (bannerComponent) {
                        bannerComponent.style.height = "";
                    }
                }

                if (bannerWrapper) {
                    bannerWrapper.style.height = totalHeight + "px";
                    bannerWrapper.style.minHeight = totalHeight + "px";
                }
            }

            // Call the function when the window is resized
            window.addEventListener("resize", bannerHeight);

            // Call the function initially
            bannerHeight();

            /* DOM CONTENT LOADED STARTS */

            // document.addEventListener("DOMContentLoaded", function () {

            // set up arrow to the center of the name
            setLoggedInArrow();

            var viewportWidth = window.innerWidth;

            setTimeout(function () {
                bannerHeight();
            }, 1000);

            if (document.querySelector(".searchContentWrapper")) {
                document.querySelector(".main-content").classList.add("HideOverflow");
            }

            var errorLabels = document.querySelectorAll(".error-lbl");
            errorLabels.forEach(function (label) {
                label.style.display = "none";
            });

            var validateInputs = document.querySelectorAll(".validate");
            validateInputs.forEach(function (input) {
                input.addEventListener("keyup", function (e) {
                    var isValid = true;
                    var textInputs = document.querySelectorAll('input[type="text"]');
                    textInputs.forEach(function (textInput) {
                        if (textInput.value.trim() === "hello") {
                            isValid = false;
                            errorLabels.forEach(function (label) {
                                label.style.display = "block";
                            });
                            textInput.style.border = "1px solid #bd2b2b";
                            textInput.style.background = "#bd2b2b1f";
                            textInput.style.color = "#bd2b2b";
                        } else if (textInput.value.trim() === "hi") {
                            isValid = false;
                            textInput.style.border = "";
                            textInput.style.background = "";
                            textInput.style.color = "";
                            document.querySelector(".validate").classList.add("validate-icon");
                        } else {
                            textInput.style.border = "";
                            textInput.style.background = "";
                            textInput.style.color = "";
                        }
                    });

                    if (!isValid) {
                        e.preventDefault();
                    } else {
                        errorLabels.forEach(function (label) {
                            label.style.display = "none";
                        });
                        document.querySelector(".validate").classList.remove("validate-icon");
                    }
                });
            });

            /* Toggle Navigation in Responsive */
            var mobileMenuWrapper = document.querySelector(".mobile-menu-wrapper");
            mobileMenuWrapper && mobileMenuWrapper.addEventListener("click", function (e) {

                mobileMenuWrapper.classList.toggle("active");
                /* Main Navigation */
                document.querySelector(".primary-nav__mobile") && document.querySelector(".primary-nav__mobile").classList.add("hide");
                document.querySelector(".menu-header") && document.querySelector(".menu-header").classList.remove("hide");
                document.querySelector(".menu-content") && document.querySelector(".menu-content").classList.remove("hide");
                document.querySelector(".menu-footer") && document.querySelector(".menu-footer").classList.remove("hide");
                document.querySelector(".close-menu") && document.querySelector(".close-menu").classList.remove("hide");
                if (document.querySelector("#mobi-navigation")) {
                    document.querySelector("#mobi-navigation").style.maxWidth = "";
                }
                if (document.querySelector(".mobi-nav-wrapper")) {
                    document.querySelector(".mobi-nav-wrapper").innerHTML = "";
                }


                if (document.querySelector(".top-menu") && document.querySelector(".mobi-nav-wrapper")) {
                    var mainNav = document.querySelector(".top-menu").innerHTML;
                    document.querySelector(".mobi-nav-wrapper").innerHTML = mainNav;

                }


                document.querySelector("#mobi-navigation") && document.querySelector("#mobi-navigation").classList.toggle("active");
                document.body && document.body.classList.add("mobile-menu-active");
            });

            if (document.querySelector(".header-title")) {

                if (viewportWidth < 1020) {
                    document.querySelector(".header-title").classList.remove("disable");
                } else {
                    document.querySelector(".header-title").classList.add("disable");
                }


            }




            headerClick();

            var closeMenuButtons = document.querySelectorAll(".close-menu, .primary-nav__close");
            closeMenuButtons.forEach(function (button) {
                button.addEventListener("click", function () {
                    document.body.classList.remove("mobile-menu-active");
                    mobileMenuWrapper.classList.remove("active");
                    document.querySelector("#mobi-navigation").classList.remove("active");
                    document.querySelector(".menu-content").classList.remove("hide");
                    setTimeout(function () {
                        document.querySelector("#mobi-navigation") && document.querySelector("#mobi-navigation").classList.remove("main-nav-active");
                        document.querySelector(".mobi-header-title") && document.querySelector(".mobi-header-title").remove();
                    }, 500);
                    document.querySelector(".header-title") && document.querySelector(".header-title").classList.remove("active");
                    var mobiFooterLinks = document.querySelectorAll(".mobi-footer-links ul li.has-children");
                    mobiFooterLinks.forEach(function (link) {
                        link.classList.remove("active");
                        link.querySelector("ul").style.display = "none";
                    });
                });
            });

            /* Mobile Link Toggle */
            var mobiFooterLinks = document.querySelectorAll(".mobi-footer-links li.has-children");
            mobiFooterLinks.forEach(function (link) {
                link.addEventListener("click", function () {
                    link.classList.toggle("active");
                    link.querySelector("ul").style.display = link.classList.contains("active") ? "block" : "none";
                });
            });

            /* Mobile Search Toggle */
            var mobiSearchIcon = document.querySelector(".mobi-search-icon");

            mobiSearchIcon && mobiSearchIcon.addEventListener("click", function () {
                mobiSearchIcon.classList.toggle("active");
                var searchWrapper = mobiSearchIcon.nextElementSibling;
                if (searchWrapper) {
                    searchWrapper.style.display = mobiSearchIcon.classList.contains("active") ? "block" : "none";
                }
            });

            /* Share Toggle */
            var shareWrappers = document.querySelectorAll(".share-wrapper");
            shareWrappers.forEach(function (wrapper) {
                wrapper.addEventListener("click", function (e) {
                    var shareContent = wrapper.nextElementSibling;
                    if (shareContent) {
                        shareContent.style.display = shareContent.style.display === "block" ? "none" : "block";
                        e.stopPropagation();
                    }
                });
            });

            document.addEventListener("click", function () {
                document.querySelectorAll(".trending-widget-banner-wrapper .share-content").forEach(function (content) {
                    content.style.display = "none";
                });
            });

            document.addEventListener("touchstart", function (event) {
                if (!event.target.closest(".share-content")) {
                    document.querySelectorAll(".share-content").forEach(function (content) {
                        content.style.display = "none";
                    });
                }
            });

            /* Share Toggle */
            var authorClicks = document.querySelectorAll(".author-click");
            authorClicks.forEach(function (click) {
                click.addEventListener("click", function () {
                    click.classList.toggle("active");
                    var authorContent = click.parentNode.querySelector(".author-content");
                    if (authorContent) {
                        authorContent.style.display = click.classList.contains("active") ? "block" : "none";
                    }
                });
            });

            /* Loader for subscribe form */
            var frmSubscribe = document.querySelector(".frm-subscribe");
            frmSubscribe && frmSubscribe.addEventListener("click", function () {
                // append loader on form click
                var frmLoading = document.querySelector("#frm-loading");
                if (frmLoading) {
                    frmLoading.classList.remove("hide");
                    frmLoading.classList.add("show");
                }
            });

            setTimeout(function () {
                document.querySelectorAll(".share-component").forEach(function (shareComponent) {
                    var shareCountLabel = shareComponent.querySelector(".sharethis-inline-share-buttons .st-label");
                    var shareCount = shareCountLabel ? shareCountLabel.innerHTML : "";
                    if (shareCount) {
                        shareComponent.querySelector(".count").innerHTML = shareCount;
                    }
                });
            }, 1500);
            // trendingArticleHeight();
            // });

            /* DOM CONTENT LOADED ENDS */

            window.addEventListener('load', function () {
                setTimeout(function () {
                    bannerHeight();
                }, 1000);

                var loading = document.getElementById('loading');
                if (loading) {
                    loading.classList.add('hide');
                }

                setTimeout(function () {
                    var shimmerLoading = document.getElementById('shimmerloading');
                    if (shimmerLoading) {
                        shimmerLoading.classList.add('hide');
                    }
                }, 1000);

                /* Banner Height Adjust */
                contentBannerHeight();

                function wordLimitBannerTitle(data) {
                    var txt = data.textContent;
                    if (txt.length > 105) {
                        data.textContent = txt.substring(0, 100) + "...";
                    }
                }

                function wordLimit(data, limit) {
                    var elements = Array.from(data);
                    elements.forEach(function (element) {
                        if (element && element.textContent) {
                            var len = element.textContent.trim().length;
                            if (len > limit) {
                                element.textContent = element.textContent.trim().substr(0, limit) + "…";
                            }

                        }

                    });
                }


                var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
                if (viewportWidth < 768) {
                    //wordLimitBannerTitle(".banner-subtitle");
                }

                wordLimit(".breadcrumb span:last-child", 33);
                wordLimit(".article-desc h3 a", 82);
                wordLimit(".banner-component:not(.dark-banner) .banner-subtitle", 68);
                wordLimit(".banner-content p", 135);
                wordLimit(".trending-widget-banner-wrapper .trending-item .article-desc h3", 65);

                // Rest of the code...

                setTimeout(function () {
                    var shareComponents = document.querySelectorAll('.share-component');
                    shareComponents.forEach(function (shareComponent) {
                        var shareLabel = shareComponent.querySelector('.sharethis-inline-share-buttons .st-label');
                        if (shareLabel) {
                            var shareCount = shareLabel.innerHTML;
                            var countElement = shareComponent.querySelector('.count');
                            if (countElement) {
                                countElement.innerHTML = shareCount;
                            }
                        }
                    });
                }, 1500);
            });

            // Function to handle window resize event
            function handleResize() {
                // Terms and Condition
                var viewportWidth = window.innerWidth;

                var termsConditionsDiv = document.querySelector(".terms-conditions-div");
                var ConHei, ConWid;

                if (viewportWidth < 768 && termsConditionsDiv) {
                    ConHei = window.innerHeight / 2 - 15;

                    ConWid = termsConditionsDiv && termsConditionsDiv.offsetWidth / 2;
                    termsConditionsDiv.style.marginTop = -ConHei + "px";
                    termsConditionsDiv.style.marginLeft = -ConWid + "px";
                } else {
                    if (termsConditionsDiv) {
                        ConHei = termsConditionsDiv.offsetHeight / 2;
                        ConWid = termsConditionsDiv.offsetWidth / 2;
                        termsConditionsDiv.style.marginTop = -ConHei + "px";
                        termsConditionsDiv.style.marginLeft = -ConWid + "px";

                    }

                }

                // Call the setLoggedInArrow() function
                setLoggedInArrow();

                setTimeout(function () {
                    bannerHeight();
                }, 1000);

                if (viewportWidth > 1020) {
                    var articleTitleLinks = document.querySelectorAll(".article-title-link");
                    articleTitleLinks.forEach(function (link) {
                        link.setAttribute("disabled", "disabled");
                    });
                } else {
                    var articleTitleLinks = document.querySelectorAll(".article-title-link");
                    articleTitleLinks.forEach(function (link) {
                        link.removeAttribute("disabled");
                    });
                }

                if (viewportWidth < 1020) {
                    var headerTitleLinks = document.querySelectorAll(".header-title a");
                    headerTitleLinks.forEach(function (link) {
                        link.setAttribute("disabled", "disabled");
                    });
                } else {
                    var headerTitleLinks = document.querySelectorAll(".header-title a");
                    headerTitleLinks.forEach(function (link) {
                        link.removeAttribute("disabled");
                    });
                }

                if (viewportWidth < 1020) {
                    var headerTitle = document.querySelector(".header-title");
                    if (headerTitle) {
                        headerTitle.classList.remove("disable");
                    }


                    // Mobile Menu Remove
                    if (window.innerWidth > 1020) {
                        document.body.classList.remove("mobile-menu-active");
                        var mobileMenuWrapper = document.querySelector(".mobile-menu-wrapper");
                        mobileMenuWrapper.classList.remove("active");
                        var mobiNavigation = document.getElementById("mobi-navigation");
                        mobiNavigation.classList.remove("active");
                        setTimeout(function () {
                            mobiNavigation.classList.remove("main-nav-active");
                        }, 500);
                    }
                    if (headerTitle) {
                        headerTitle.classList.remove("active");
                    }


                    var mobiFooterLinks = document.querySelectorAll(".mobi-footer-links ul li.has-children");
                    mobiFooterLinks && mobiFooterLinks.forEach(function (li) {
                        li && li.classList.remove("active");
                        var ul = li.querySelector("ul");
                        if (ul) {
                            ul.style.display = "none";
                        }

                    });

                    // primary nav
                    if (viewportWidth < 767) {
                        var mobiNavigation = document.getElementById("mobi-navigation");
                        mobiNavigation.style.maxWidth = "100%";
                    } else {
                        var mobiNavigation = document.getElementById("mobi-navigation");
                        mobiNavigation.style.maxWidth = "320px";
                    }
                }

                bannerHeight();
                contentBannerHeight();

                if (viewportWidth < 768) {
                    // Call wordLimitBannerTitle(".banner-subtitle");
                }

                // Call jQueryEqualHeight for various elements
                // jQueryEqualHeight(".article-details .article-desc h3");
                // jQueryEqualHeight(".article-details .article-tag");
                // jQueryEqualHeight(".trending-widget-banner-wrapper .trending-item .article");
                // jQueryEqualHeight(".trending-widget-banner-wrapper .trending-item");
                // var TrendingHei = $('.trending-item').height();
                // $('.trending-widget-banner-wrapper .trending-item .article').height(TrendingHei);
            }

            // Add an event listener for window resize
            window.addEventListener("resize", handleResize);

            // Initial execution of the handleResize function
            handleResize();

            function contentBannerHeight() {
                var viewportWidth = window.innerWidth;

                var header = document.querySelector("header");
                var darkBanner = document.querySelector(".dark-banner");
                var bannerContentWrapper = document.querySelector(".dark-banner .banner-content-wrapper");
                var bannerWrapper = document.querySelector(".dark-banner .banner-wrapper");

                var headerHeight = header.offsetHeight;
                if (bannerContentWrapper) {
                    var bannerContentHeight = bannerContentWrapper.offsetHeight;
                    var totalHeight = headerHeight + bannerContentHeight;

                    if (viewportWidth < 1021) {
                        darkBanner.style.height = bannerContentHeight + "px";
                    } else {
                        darkBanner.style.height = "";
                    }

                }
                if (bannerWrapper) {
                    if (viewportWidth < 768) {
                        bannerWrapper.style.top = headerHeight - 10 + "px";
                    } else {
                        bannerWrapper.style.top = "0";
                    }

                    bannerWrapper.style.height = totalHeight + "px";
                    bannerWrapper.style.minHeight = totalHeight + "px";

                }



            }


            var isMobile;

            document.addEventListener("DOMContentLoaded", function () {
                //bannerHeight();

                var firstGreenCategoryCTA = document.querySelector(".two-columns .category.green:first-child .category-cta");
                if (firstGreenCategoryCTA) {
                    var blockHeading = document.querySelector(".two-columns .col-lg-4.col-md-12 > .block-heading");
                    blockHeading.classList.add("marginTop86");
                    blockHeading.style.marginTop = "86px";
                }
                //Added spacing on first div of the main content (block heading)
                // document.querySelectorAll(".main-content .outerpadding").forEach(function (outerpadding) {
                //   var blockHeading = outerpadding.querySelector(".container-fluid > .outerpadding .block-heading");
                //   if (blockHeading) {
                //     blockHeading.style.marginTop = "25px";
                //     blockHeading.style.display = "inline-block";
                //   }
                // });

                //Footer category
                var categoryTitleLinks = document.querySelectorAll(".category-title-link");
                categoryTitleLinks.forEach(function (link) {
                    link.addEventListener("click", function (e) {
                        e.preventDefault();
                        link.classList.toggle("active");
                        var categoryContent = link.nextElementSibling;
                        if (link.classList.contains("active")) {
                            categoryContent.style.display = "block";
                        } else {
                            categoryContent.style.display = "none";
                        }
                    });
                });

                //Pagination JS Starts
                var viewportWidth = window.innerWidth;

                var totalPages = document.getElementById("totalNoPages").value;
                var currentPage = document.getElementById("currentPageNo").value;

                var paginationOptions = {
                    totalPages: totalPages,
                    currentPage: currentPage,
                };

                if (viewportWidth < 1025) {
                    paginationOptions.showBefore = 0;
                    paginationOptions.showAfter = 1;
                } else {
                    paginationOptions.showBefore = 2;
                    paginationOptions.showAfter = 3;
                }

                customPagination(document.querySelector(".pagination"), paginationOptions);
                //Pagination Ends

                /*-------------- Mobi Detect Starts -------------------*/
                isMobile = {
                    Android: function () {
                        return navigator.userAgent.match(/Android/i);
                    },
                    BlackBerry: function () {
                        return navigator.userAgent.match(/BlackBerry/i);
                    },
                    Opera: function () {
                        return navigator.userAgent.match(/Opera Mini/i);
                    },
                    Windows: function () {
                        return navigator.userAgent.match(/IEMobile/i);
                    },
                    iOS: function () {
                        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                    },
                    any: function () {
                        return (
                            isMobile.Android() ||
                            isMobile.BlackBerry() ||
                            isMobile.Opera() ||
                            isMobile.Windows() ||
                            isMobile.iOS()
                        );
                    },
                };
                /*----------------- Mobi Detect Ends ----------------*/

                /*----- mobile device tel link starts -------------*/
                var telLinks = document.querySelectorAll('a[href^="tel"]');
                telLinks.forEach(function (telLink) {
                    if (!isMobile.any()) {
                        telLink.addEventListener("click", function (e) {
                            e.preventDefault();
                        });
                    } else {
                        telLink.classList.add("mobile-tel-link");
                    }
                });
                /*----- mobile device tel link ends -------------*/
            });









        }

        /* SEARCH FUNCTIONALITY BEGINS*/

        function openSearchDesk() {
            const searchBtn = document.querySelector('.primary-nav__link--search-btn');
            const searchForm = document.querySelector('.abc-form--search');
            const selectSearchHeader = document.querySelector('#select-search-header');
            const autocomplete = document.querySelector('.ui-autocomplete');

            searchBtn?.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                searchForm?.classList.add('abc-form--search-active');
                selectSearchHeader.focus();
                autocomplete?.classList.add('hide');
                if (autocomplete) {
                    setTimeout(function () {
                        autocomplete.style.left = selectSearchHeader.getBoundingClientRect().left + 'px';
                        autocomplete.classList.remove('hide');


                    }, 500);

                }

            });

            const primaryNavLinks = document.querySelectorAll('.primary-nav__link');
            primaryNavLinks.forEach(function (navLink) {
                navLink?.querySelector('.abc-form')?.addEventListener('click', function (e) {
                    e.stopPropagation();
                });
            });

            document.addEventListener('click', function (e) {
                searchForm.classList.remove('abc-form--search-active');
            });
        }

        if (window.innerWidth > 1020) {
            openSearchDesk()
        }


        /* SEARCH FUNCTIONALITY ENDS */


        globalNavEvts()
        if (window.innerWidth < 1020) {
            websiteMobileNav();
        }
        liMainJS()





    }, [])


    return (



        headerProps ? (

            <header>
                <div className="container-fluid">
                    <div className="outerpadding">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12">

                                {/* Top Global Nav Starts  */}
                                <div className="row top-global-nav">
                                    <div className="col-md-6">
                                    </div>
                                    <div className="col-md-6">
                                        <div className="top-bg pull-right">
                                            <ul className="nav header-dropdown" id="header-dropdown">

                                                {



                                                    headerProps?.data?.attributes?.TopGlobalItems?.data?.map((item, index) => (
                                                        // console.log("top global sol list",item.attributes.TopGlobalSolutionList)
                                                        <li key={index} id={index === 0 ? 'personal-topmenu' : index === 1 ? 'business-topmenu' : index === 2 ? 'corporate-topmenu' : index === 3 ? 'advisor-topmenu' : index === 4 ? 'Career-topmenu' : ''} className={index === 0 ? 'selected-menu' : 'scnd_center'}>
                                                            <a href={item.attributes.TopGlobalURL} title={item.attributes.TopGlobalItem}>{item.attributes.TopGlobalItem}
                                                                {
                                                                    ((index === 2) || (index === 3)) ? (
                                                                        <span className="icon-arrow icon">
                                                                            <span className="visuallyhidden">arrow</span>
                                                                        </span>

                                                                    ) : null
                                                                }

                                                            </a>
                                                            <span className="vertical-line"></span>

                                                            {
                                                                item.attributes.TopGlobalSolutionList ? (
                                                                    <ul className="dropdown-menu" id={index === 2 ? "corporate-childmenu" : index === 3 ? "advisor-childmenu" : undefined}
                                                                        style={{ display: 'none' }}>
                                                                        <li style={{ padding: 0 }}>
                                                                            <ul className="col-section-container">

                                                                                {
                                                                                    item?.attributes?.TopGlobalSolutionList.map((solutionItm, solListIndex) => (
                                                                                        // console.log("map item",solutionItm?.TopGlobalListInfo)
                                                                                        // console.log("map item title",solutionItm?.TopGlobalSolutionTitle,index)
                                                                                        <React.Fragment key={solListIndex}>

                                                                                            <li className={solListIndex === 0 ? 'level1 pink-link-section' : solListIndex === 1 ? 'level1 green-link-section' : solListIndex === 2 ? 'level1 yellow-link-section' : solListIndex === 3 ? 'level1 red-link-section' : ''}>

                                                                                                <span className={solListIndex === 0 ? 'pink-link-heading' : solListIndex === 1 ? 'green-link-heading' : solListIndex === 2 ? 'yellow-link-heading' : solListIndex === 3 ? 'red-link-heading' : ''}>{solutionItm.TopGlobalSolutionTitle}</span>
                                                                                                <ul className="list-unstyled">

                                                                                                    {

                                                                                                    }
                                                                                                    {solutionItm?.TopGlobalListInfo.map((innerItm, innerIdx) => (

                                                                                                        <li key={innerIdx} className="level2">
                                                                                                            <a href={innerItm?.Description} className="">
                                                                                                                {innerItm?.Title}
                                                                                                            </a>
                                                                                                        </li>

                                                                                                    ))}




                                                                                                </ul>
                                                                                            </li>


                                                                                        </React.Fragment>


                                                                                    ))

                                                                                }

                                                                            </ul>
                                                                        </li>
                                                                    </ul>

                                                                ) : null
                                                            }

                                                        </li>
                                                    ))

                                                }

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Top Global Nav Ends */}



                                <div className="top-header-wrapper capital-red-bg">


                                    <div className="logo">
                                        <a href={headerProps?.data?.attributes?.HeaderLogoURL} aria-label="Link to ABC website">
                                            <picture className="">
                                                <source media="(min-width: 1021px)" srcSet={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${headerProps?.data?.attributes?.ABCLLogoTablet?.data?.attributes?.url}`} />
                                                <source media="(min-width: 768px) and (max-width: 1020px)" srcSet={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${headerProps?.data?.attributes?.ABCLLogoMobile?.data?.attributes?.url}`} />
                                                <source media="(max-width: 767px)" srcSet={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${headerProps?.data?.attributes?.ABCLLogoSmallScreen?.data?.attributes?.url}`} />
                                                <img className="lazy" src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${headerProps?.data?.attributes?.ABCLLogoDesktop?.data?.attributes?.url}`} alt={`${headerProps?.data?.attributes?.ABCLLogoDesktop?.data?.attributes?.alternativeText}`} />
                                            </picture>
                                        </a>
                                    </div>

                                    <div className="top-menu">


                                        <ul>

                                            {
                                                globalNavItems?.data?.map((item, index) => (
                                                    //    console.log("item check",item.attributes.HeaderNavListTitle)

                                                    <li key={index} className={index === 0 ? 'level1 has-children pink-link' : index === 1 ? 'level1 has-children green-link' : index === 2 ? 'level1 has-children yellow-link' : index === 3 ? 'level1 has-children red-link' : ''}>

                                                        <span title={item.attributes.HeaderNavListTitle}>{item.attributes.HeaderNavListTitle}</span>
                                                        <span className="icon-arrow icon"><span className="visuallyhidden">arrow</span></span>
                                                        <ul>
                                                            <HeaderWrapperManager headerWrapperManagerProps={item?.attributes?.ABCLHeaderBlock} />


                                                        </ul>
                                                    </li>





                                                ))
                                            }
                                        </ul>

                                    </div>




                                    <div className="top-right-wrapper">
                                        <span className="top-right-item phone-link">

                                            <a href={`tel:${headerProps?.data?.attributes?.ContactNo}`}>
                                                <span className="iconText">{headerProps?.data?.attributes?.ContactNo}</span>
                                                <span className="icon icon-phone">
                                                    <span className="visuallyhidden">telephone</span>
                                                </span>
                                            </a>

                                        </span>
                                        <span className="top-right-item home-link">
                                            <a href={headerProps?.data?.attributes?.HeaderLogoURL}>
                                                <span className="iconText">Home</span>
                                                <span className="icon icon-home">
                                                    <span className="visuallyhidden">
                                                        Home
                                                    </span>
                                                </span>
                                            </a>
                                        </span>
                                        <span className="top-right-item login-link">
                                            <a href={headerProps?.data?.attributes?.LoginURL}>
                                                <span className="iconText">Login</span>
                                                <span className="icon icon-login">
                                                    <span className="visuallyhidden">Login</span>
                                                </span>
                                            </a>
                                        </span>

                                    </div>
                                    <div className="utility-links hide">
                                        <a className="icon-home icon" href={headerProps?.data?.attributes?.HeaderLogoURL}>
                                            <span className="visuallyhidden">Home</span>
                                        </a>
                                        <a className="icon-phone icon" href={headerProps?.data?.attributes?.ContactNo}>
                                            <span className="visuallyhidden">telephone</span>
                                        </a>
                                        <a className="icon-login icon" href={headerProps?.data?.attributes?.LoginURL}>
                                            <span className="visuallyhidden">LOGIN</span>
                                        </a>
                                    </div>
                                    {/* <script>
                                        {
                                            function logoutRequest() {
                                                $.ajax({
                                                    method: "POST",
                                                    url: "/api/sitecore/Login/LogOut",
                                                    async: false,
                                                    success: function (data) {
                                                        window.location = data;
                                                    },
                                                    error: function (result) {
                                                        console.log("Error loading the data" + result.responseText);
                                                    }
                                                })
                                            }

                                        }

                                    </script> */}


                                </div>



                                <div className="primary-nav primary-nav--website wb-header-pink-bg">
                                    <div className="col-md-12">
                                        <ul className="primary-nav__list">
                                            <li className="primary-nav__title">
                                                <a href="/" className="bold">{headerProps?.data?.attributes?.ABSLIHeaderMenu?.ABSLITitle}</a>


                                            </li>

                                            {
                                                headerProps?.data?.attributes?.PrimaryNav?.headerCategories.data.map((item, index) => (

                                                    <li key={index} className="primary-nav__link primary-nav__link--level1 primary-nav__link--has-child">
                                                        <a href="#javascript" className="" onClick={disableLinkRedirection} target="_self">{item?.attributes?.ABSLIPrimaryNavTitle}<span className="icon-arrow icon"></span></a>
                                                        <ul>

                                                            <PrimaryHeaderBlockManager primaryHeaderProps={item?.attributes?.ABSLIHeaderCategoryBlock} />



                                                        </ul>
                                                    </li>




                                                ))
                                            }

                                            {
                                                headerProps?.data?.attributes?.OtherMenuItem.map((otherMenuItem, otherMenuIndex) => (

                                                    <li key={otherMenuIndex} className="primary-nav__other-link primary-nav__other-link--typ2">

                                                        <a href={otherMenuItem?.Description} className="bold" target="_self">{otherMenuItem?.Title}</a>
                                                    </li>


                                                ))

                                            }



                                            <li className="primary-nav__other-link">
                                                <a href={headerProps?.data?.attributes?.PayPremiumURL} className="bold" target="_self">{headerProps?.data?.attributes?.PayPremiumTitle}</a>
                                            </li>
                                            <li className="primary-nav__other-link primary-nav__other-link--typ2">
                                                <a href={headerProps?.data?.attributes?.MMPURL} className="bold" target="_self">{headerProps?.data?.attributes?.MMPTitle}</a>
                                            </li>
                                            <li className="primary-nav__link primary-nav__link--search">
                                                <a href="#" className="bold primary-nav__link--search-btn"><span className="icon icon-seach"></span></a>
                                                <form className="abc-form abc-form--search" method="post" action="/api/sitecore/LiSearch/SubmitSearchRequest">
                                                    <div className="form-group form-group--search">
                                                        <div className="input-group input-group--search">
                                                            <input type="hidden" id="searchPageUrl" value="/search-results" />
                                                            <input type="text" name="searchterm" value="" onChange={headerSearchFn} className="form-control form-group__placeholder ui-autocomplete-input" autoComplete="off" id="select-search-header" />
                                                            <input type="hidden" id="recentsearches" name="recentsearches" value="" />
                                                            <span className="input-group-addon input-group-addon--clear"><span className="icon icon-cancel"></span></span>
                                                            <span className="input-group-btn">
                                                                <span className="bubble"></span>
                                                                <button className="btn icon-btn" type="submit" aria-label="SearchButton"><span className="icon icon-seach"></span></button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </form>
                                                <input type="hidden" value="/search-results" id="hdnSearchPageUrl" />
                                            </li>
                                            <li className="primary-nav__other-link primary-nav__other-hamburger">
                                                <a href="#javascript" onClick={disableLinkRedirection} className="bold wb-hamburger" aria-label="Menu Icon">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>



                                <div className="wb-mob-nav-wrap">
                                    <a href="#" title="dummy title text" className="wb-mob-nav-wrap__close"><span className="icon icon-cancel"></span></a>
                                    <div className="search-wrap">
                                        <form className="abc-form abc-form--search" method="post" action="/register/PostForgotPassword/LiSearch/SubmitSearchRequest">
                                            <div className="form-group form-group--search">
                                                <div className="input-group input-group--search">
                                                    <input type="text" name="searchterm" className="form-control form-group__placeholder ui-autocomplete-input" autoComplete="off" id="select-search-header-mob" />
                                                    <span className="input-group-addon input-group-addon--clear"><span className="icon icon-cancel"></span></span>
                                                    <span className="input-group-btn">
                                                        <button className="btn icon-btn" type="submit" aria-label="MobileSearchButton"><span className="icon icon-seach"></span></button>
                                                    </span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="search-overlay"></div>
                                    <a href="#" title="dummy title text" className="wb-mob-nav-wrap__search-goback button button-link"><span className="icon icon-left-arrow"></span>Go Back</a>
                                    <div className="wb-mob-nav" style={{ overflowX: 'hidden', overflowY: 'auto' }}>
                                        <div className="wb-mob-nav__head">

                                            <div className="wb-mob-nav__title headline-4" data-default="Menu">
                                                <span className="wb-mob-nav__title--default">Menu</span>
                                                <a href="#" title="dummy title text" className="wb-mob-nav__title--link"></a>
                                            </div>
                                            <a href="#" className="wb-mob-nav__go-back"><span className="icon icon-left-arrow"></span></a>
                                        </div>
                                        <ul className="wb-mob-nav__link-list wb-mob-nav__link-list--level1">

                                            {
                                                headerProps?.data?.attributes?.PrimaryNav?.headerCategories.data.map((item, index) => (

                                                    <li key={index} className="wb-mob-nav__link first-level">
                                                        <a href="#javascript" className="" onClick={disableLinkRedirection}>
                                                            {item?.attributes?.ABSLIPrimaryNavTitle}<span className="icon-arrow icon"></span></a>
                                                        <ul className="wb-mob-nav__link-list wb-mob-nav__link-list--level2">


                                                            <MobPrimaryHeaderBlockManager mobPrimaryHeaderProps={item?.attributes?.ABSLIHeaderCategoryBlock} />

                                                        </ul>
                                                    </li>




                                                ))
                                            }



                                            {
                                                headerProps?.data?.attributes?.OtherMenuItem.map((otherMenuItem, otherMenuIndex) => (

                                                    <li key={otherMenuIndex} className="wb-mob-nav__link wb-mob-nav__link--typ2">

                                                        <a href={otherMenuItem?.Description} target="_self">{otherMenuItem?.Title}</a>
                                                    </li>


                                                ))

                                            }

                                            <li className="wb-mob-nav__link wb-mob-nav__link--typ2">

                                                <a href={headerProps?.data?.attributes?.MMPURL} target="_self">{headerProps?.data?.attributes?.MMPTitle}</a>
                                            </li>



                                        </ul>
                                    </div>
                                    <span className="wb-mob-nav-wrap__copyright"></span>
                                </div>


                                <div className="company-info brand-capital-red-bg">
                                    <div className="company-info__desc">{headerProps?.data?.attributes?.ABSLIOrganizationName}</div>
                                </div>


                                {/* Mobile Navigation <Start> */}
                                <div className="mobile-menu-wrapper">
                                    <div className="hamburger hamburger--elastic" tabIndex="0" aria-label="Menu" role="button" aria-controls="mobi-navigation" aria-expanded="false">
                                        <div className="hamburger-box">
                                            <div className="hamburger-inner">
                                                <span className="visuallyhidden">Move</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="mobi-navigation" style={{ display: 'none', maxWidth: '320px' }}>
                                    <div className="close-menu">
                                        <div className="hamburger hamburger--elastic is-active" tabIndex="0" aria-label="Menu" role="button" aria-controls="revamp-mobNav" aria-expanded="false">
                                            <div className="hamburger-box" id="revamp-mobNav">
                                                <div className="hamburger-inner">
                                                    <span className="visuallyhidden">Close</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-header">
                                        <div className="logo">
                                            <a href={headerProps?.data?.attributes?.HeaderLogoURL} aria-label="Link to ABC website">
                                                <picture className="">
                                                    <source media="(min-width: 1021px)" srcSet={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${headerProps?.data?.attributes?.ABCLLogoTablet?.data?.attributes?.url}`} />
                                                    <source media="(min-width: 768px) and (max-width: 1020px)" srcSet={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${headerProps?.data?.attributes?.ABCLLogoMobile?.data?.attributes?.url}`} />
                                                    <source media="(max-width: 767px)" srcSet={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${headerProps?.data?.attributes?.ABCLLogoSmallScreen?.data?.attributes?.url}`} />
                                                    <img className="lazy" src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${headerProps?.data?.attributes?.ABCLLogoDesktop?.data?.attributes?.url}`} alt={`${headerProps?.data?.attributes?.ABCLLogoDesktop?.data?.attributes?.alternativeText}`} />
                                                </picture>
                                            </a>
                                        </div>
                                        <div className="utility-links-global-nav">

                                            <ul>
                                                {
                                                    headerProps?.data?.attributes?.TopGlobalItems?.data?.map((item, index) => (
                                                        <li key={index} id={index === 0 ? 'personal-mobile-topmenu' : index === 1 ? 'business-mobile-topmenu' : index === 2 ? 'corporate-mobile-topmenu' : index === 3 ? 'advisor-mobile-topmenu' : index === 4 ? 'Career-mobile-topmenu' : ''} className={index === 0 ? 'selected-menu' : 'scnd_center'}>
                                                            <a>{item.attributes.TopGlobalItem}</a>
                                                            <span></span>
                                                        </li>
                                                    ))
                                                }

                                            </ul>


                                        </div>

                                        <div className="utility-links">
                                            <a className="icon-home icon" href={headerProps?.data?.attributes?.HeaderLogoURL}>
                                                <span className="visuallyhidden">Home</span>
                                            </a>
                                            <a className="icon-phone icon" href={`tel:${headerProps?.data?.attributes?.ContactNo}`}>
                                                <span className="visuallyhidden">telephone</span>
                                            </a>
                                            <a className="icon-login icon" href={headerProps?.data?.attributes?.LoginURL}>
                                                <span className="visuallyhidden">LOGIN</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="menu-content-wrapper">


                                        <div className="menu-content">
                                            <div className="mobi-nav-wrapper"></div>
                                            <div className="mobi-top-navigation">
                                                <div>
                                                    <ul>
                                                        {
                                                            headerProps?.data?.attributes?.MobileTopNavigation.map((mobTopNavListItem, mobTopNavListIndex) => (
                                                                <React.Fragment key={mobTopNavListIndex}>
                                                                    <li>
                                                                        <a href={mobTopNavListItem.Description} title={mobTopNavListItem.Title}>
                                                                            {mobTopNavListItem.Title}
                                                                        </a>
                                                                    </li>
                                                                </React.Fragment>

                                                            ))
                                                        }

                                                    </ul>

                                                </div>
                                            </div>
                                            <div className="mobi-footer-links">

                                                <ul>

                                                    {
                                                        headerProps?.data?.attributes?.ABCLMobileFooterLinks?.map((footerLinkItem, footerLinkIndex) => (

                                                            <li className={footerLinkIndex === 0 ? 'has-children' : ''} key={footerLinkIndex}>
                                                                {
                                                                    footerLinkItem?.ABCLFooterLinkURL ? (
                                                                        <a href={footerLinkItem?.ABCLFooterLinkURL} target="_self" title={footerLinkItem?.ABCLFooterLinkTitle}>
                                                                            {footerLinkItem?.ABCLFooterLinkTitle}
                                                                        </a>

                                                                    ) : (
                                                                        <a href="#javascript" onClick={disableLinkRedirection} target="_self" title={footerLinkItem?.ABCLFooterLinkTitle}>
                                                                            {footerLinkItem?.ABCLFooterLinkTitle}
                                                                        </a>

                                                                    )
                                                                }
                                                                {
                                                                    //  console.log("testing",footerLinkItem?.ABCLFooterLinkList)
                                                                    footerLinkItem?.ABCLFooterLinkList ? (

                                                                        <>
                                                                            <span className="icon-arrow icon">
                                                                                <span className="visuallyhidden">arrow</span>
                                                                            </span>

                                                                            <ReactMarkdown
                                                                                rehypePlugins={[rehypeRaw]}
                                                                                components={{
                                                                                    a: ({ node, ...props }) => <a {...props} />
                                                                                }}
                                                                            >
                                                                                {footerLinkItem?.ABCLFooterLinkList}
                                                                            </ReactMarkdown>









                                                                        </>


                                                                    ) : null

                                                                }

                                                            </li>

                                                        ))
                                                    }

                                                </ul>

                                            </div>

                                        </div>
                                        <div className="menu-footer">
                                            <p className="caption">
                                                <span>
                                                    © <span className="footer__year">{currentYear}</span>, Aditya Birla Capital Ltd.
                                                </span>
                                                <span>
                                                    All Rights Reserved.
                                                </span>
                                            </p>

                                        </div>
                                    </div>
                                </div>

                                { /* Mobile Navigation <End> */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        ) : null

    )
}

export default Header