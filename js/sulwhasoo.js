const updateSwiperA11y = function (swiper) {
    for (let i = 0; i < swiper.slides.length; i++) {
      const slide = swiper.slides[i];
      const slideLinks = slide.querySelectorAll(
        "[tabindex], a, button, input, select, details, textarea"
      );
  
      if (swiper.activeIndex === i) {
        slideLinks.forEach(function (item) {
          item.setAttribute("tabindex", 0);
        });
        slide.setAttribute("aria-hidden", "false");
      } else {
        slideLinks.forEach(function (item) {
          item.setAttribute("tabindex", -1);
        });
        slide.setAttribute("aria-hidden", "true");
      }
    }
  };
  
  const updateCarouselSwiperA11y = function (swiper) {
    for (let i = 0; i < swiper.slides.length; i++) {
      const slide = swiper.slides[i];
      const slideLinks = slide.querySelectorAll(
        "[tabindex], a, button, input, select, details, textarea"
      );
      if (
        swiper.activeIndex === i ||
        Math.min(swiper.slides.length, swiper.activeIndex + 1) === i ||
        Math.min(swiper.slides.length, swiper.activeIndex + 2) === i
      ) {
        slideLinks.forEach(function (item) {
          item.setAttribute("tabindex", 0);
        });
        slide.setAttribute("aria-hidden", "false");
      } else {
        slideLinks.forEach(function (item) {
          item.setAttribute("tabindex", -1);
        });
        slide.setAttribute("aria-hidden", "true");
      }
    }
  };
  
  const MAIN2022 = (function () {
    "use strict";
  
    const mainSwipers = [];
    const modules = {};
  
    modules.keyVisualBanner = {
      element: {
        root: document.querySelector(".renew2022-kv-section"),
        swiper: null,
        pagination: null,
        prevButton: null,
        nextButton: null,
        playButton: null,
        totalIndex: null,
        currentIndex: null,
      },
      state: {
        prevRealIndex: 0,
      },
      onInitLoader: function () {
        const instance = this;
        if (instance.element?.root) {
          const root = instance.element.root;
          instance.element.swiper = root.querySelector(".renew2022-swiper-kv");
          instance.element.items = root.querySelectorAll(".swiper-slide");
          instance.element.pagination = root.querySelector(".swiper-pagination");
          instance.element.prevButton = root.querySelector(".swiper-button-prev");
          instance.element.nextButton = root.querySelector(".swiper-button-next");
          instance.element.playButton = root.querySelector(".control-btn");
          instance.element.playText =
            instance.element.playButton.querySelector(".a11y-text");
  
          if (instance.element.items.length > 1) {
            const swiper = new Swiper(instance.element.swiper, {
              effect: "fade",
              speed: 1000,
              loop: true,
              slidesPerView: 1,
              autoplay: {
                delay: 4000,
                disableOnInteraction: false,
              },
              pagination: {
                el: instance.element.pagination,
                type: "progressbar",
              },
              navigation: {
                nextEl: instance.element.nextButton,
                prevEl: instance.element.prevButton,
              },
              threshold: 5,
              on: {
                init: function () {
                  /* Tab 접근성 */
                  const activeIndex = this.realIndex + 1;
                  for (let i = 0; i < this.slides.length; i++) {
                    this.slides[i]
                      .querySelector("a")
                      .setAttribute("tabindex", -1);
                  }
                  this.slides[activeIndex]
                    .querySelector("a")
                    .removeAttribute("tabindex");
                  instance.state.prevRealIndex = activeIndex;
                  updateSwiperA11y(this);
                },
                slideChange: function () {
                  /* Tab 접근성 */
                  const activeIndex = this.realIndex + 1;
                  this.slides[instance.state.prevRealIndex]
                    .querySelector("a")
                    .setAttribute("tabindex", -1);
                  this.slides[activeIndex]
                    .querySelector("a")
                    .removeAttribute("tabindex");
                  instance.state.prevRealIndex = activeIndex;
                  updateSwiperA11y(this);
                },
              },
            });
  
            instance.element.playButton.addEventListener("click", function (e) {
              e.preventDefault();
              const target = instance.element.playButton;
              if (!target.classList.contains("on")) {
                target.classList.add("on");
                swiper.autoplay.stop();
                instance.element.playText.innerText = "재생";
              } else {
                target.classList.remove("on");
                swiper.autoplay.start();
                instance.element.playText.innerText = "정지";
              }
            });
  
            mainSwipers.push({
              element: this.element.root,
              controller: swiper,
            });
          } else {
            root.querySelector(".pagination-container").remove();
            instance.element.prevButton.remove();
            instance.element.nextButton.remove();
          }
        }
      },
    };
  
    modules.recommendProduct = {
      element: {
        root: document.querySelector(".renew2022-main-section--recommend"),
        swiper: null,
        pagination: null,
        prevButton: null,
        nextButton: null,
        playText: null,
      },
  
      onInitLoader: function () {
        const instance = this;
        if (instance.element?.root) {
          const root = instance.element.root;
          instance.element.swiper = root.querySelector(
            ".renew2022-swiper-recommend"
          );
          instance.element.items = root.querySelectorAll(".swiper-slide");
          instance.element.pagination = root.querySelector(".swiper-pagination");
          instance.element.prevButton = root.querySelector(
            ".swiper-button__prev"
          );
          instance.element.nextButton = root.querySelector(
            ".swiper-button__next"
          );
          instance.element.playButton = root.querySelector(".control-btn");
          instance.element.playText =
            instance.element.playButton.querySelector(".a11y-text");
  
          if (instance.element.items.length > 1) {
            const swiper = new Swiper(instance.element.swiper, {
              slidesPerView: 3,
              spaceBetween: 24,
              breakpoints: {
                720: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  slidesPerGroup: 1,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                  slidesPerGroup: 3,
                },
              },
              slidesPerGroup: 3,
              loop: true,
              loopFillGroupWithBlank: true,
              speed: 1000,
              autoplay: {
                delay: 5000,
                disableOnInteraction: false,
              },
              pagination: {
                el: instance.element.pagination,
                type: "progressbar",
              },
              navigation: {
                nextEl: instance.element.nextButton,
                prevEl: instance.element.prevButton,
              },
              watchOverflow: true,
              threshold: 5,
              on: {
                init: function () {
                  updateCarouselSwiperA11y(this);
                },
                slideChange: function () {
                  updateCarouselSwiperA11y(this);
                },
              },
            });
  
            instance.element.playButton.addEventListener("click", function (e) {
              e.preventDefault();
              const target = instance.element.playButton;
              if (!target.classList.contains("on")) {
                target.classList.add("on");
                swiper.autoplay.stop();
                instance.element.playText.innerText = "재생";
              } else {
                target.classList.remove("on");
                swiper.autoplay.start();
                instance.element.playText.innerText = "정지";
              }
            });
  
            mainSwipers.push({
              element: this.element.root,
              controller: swiper,
            });
          } else {
            root.querySelector(".pagination-container").remove();
            instance.element.prevButton.remove();
            instance.element.nextButton.remove();
          }
        }
      },
    };
  
    modules.recommendSeason = {
      element: {
        root: document.querySelector(".renew2022-main-section--season"),
        swiper: null,
        pagination: null,
        prevButton: null,
        nextButton: null,
        playText: null,
      },
  
      onInitLoader: function () {
        const instance = this;
        if (instance.element?.root) {
          const root = instance.element.root;
          instance.element.swiper = root.querySelector(
            ".renew2022-swiper-season"
          );
          instance.element.items = root.querySelectorAll(".swiper-slide");
          instance.element.pagination = root.querySelector(".swiper-pagination");
          instance.element.prevButton = root.querySelector(
            ".swiper-button__prev"
          );
          instance.element.nextButton = root.querySelector(
            ".swiper-button__next"
          );
          instance.element.playButton = root.querySelector(".control-btn");
          instance.element.playText =
            instance.element.playButton.querySelector(".a11y-text");
  
          if (instance.element.items.length > 1) {
            const swiper = new Swiper(instance.element.swiper, {
              slidesPerView: "auto",
              spaceBetween: 24,
              slidesPerGroup: 1,
              breakpoints: {
                720: {
                  spaceBetween: 10,
                },
                1024: {
                  spaceBetween: 18,
                },
              },
              loop: true,
              loopFillGroupWithBlank: true,
              speed: 1000,
              autoplay: {
                delay: 5000,
                disableOnInteraction: false,
              },
              pagination: {
                el: instance.element.pagination,
                type: "progressbar",
              },
              navigation: {
                nextEl: instance.element.nextButton,
                prevEl: instance.element.prevButton,
              },
              watchOverflow: true,
              threshold: 5,
              on: {
                init: function () {
                  updateSwiperA11y(this);
                },
                slideChange: function () {
                  updateSwiperA11y(this);
                },
              },
            });
  
            instance.element.playButton.addEventListener("click", function (e) {
              e.preventDefault();
              const target = instance.element.playButton;
              if (!target.classList.contains("on")) {
                target.classList.add("on");
                swiper.autoplay.stop();
                instance.element.playText.innerText = "재생";
              } else {
                target.classList.remove("on");
                swiper.autoplay.start();
                instance.element.playText.innerText = "정지";
              }
            });
  
            mainSwipers.push({
              element: this.element.root,
              controller: swiper,
            });
          } else {
            root.querySelector(".pagination-container").remove();
            instance.element.prevButton.remove();
            instance.element.nextButton.remove();
          }
        }
      },
    };
  
    modules.header = {
      element: {
        body: document.body,
        root: document.querySelector(".renew2022-header"),
      },
      config: {
        transparentClass: "header-transparent",
        activeClass: "is-active",
      },
      onInitLoader: function () {
        this.element.body.classList.add(this.config.transparentClass);
      },
      onInit: function () {
        const instance = this;
  
        if (this.element.body.classList.contains(this.config.transparentClass)) {
          const root = instance.element.root;
          const clickElements = [
            "[tabindex]",
            "a",
            "button",
            "input",
            "select",
            "details",
            "textarea",
          ];
          const focusElements = root.querySelectorAll(clickElements);
          const activeClass = instance.config.activeClass;
  
          for (let i = 0; i < focusElements.length; i++) {
            focusElements[i].addEventListener("focus", function () {
              if (!root.classList.contains(activeClass)) {
                root.classList.add(activeClass);
              }
            });
            focusElements[i].addEventListener("blur", function () {
              if (i !== focusElements.length - 1) {
                if (root.classList.contains(activeClass)) {
                  root.classList.remove(activeClass);
                }
              }
            });
          }
        }
      },
    };
  
    function onInitLoader() {
      modules.header.onInitLoader();
      modules.keyVisualBanner.onInitLoader();
      modules.recommendProduct.onInitLoader();
      modules.recommendSeason.onInitLoader();
    }
    function onInit() {
      modules.header.onInit();
  
      if (mainSwipers.length) {
        for (let i = 0; i < mainSwipers.length; i++) {
          mainSwipers[i].controller.update();
        }
      }
    }
    function onResize() {
      if (mainSwipers.length) {
        for (let i = 0; i < mainSwipers.length; i++) {
          mainSwipers[i].controller.update();
        }
      }
    }
  
    return {
      onInit: onInit,
      onInitLoader: onInitLoader,
      onResize: onResize,
      mainSwipers: mainSwipers,
      modules: modules,
    };
  })();
  document.addEventListener("readystatechange", function (event) {
    if (event.target.readyState === "interactive") {
      MAIN2022.onInitLoader();
    } else if (event.target.readyState === "complete") {
      MAIN2022.onInit();
    }
  });
  window.addEventListener("resize", _.debounce(MAIN2022.onResize, 100));
  