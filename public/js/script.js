"use strict";

// Header

const headerNode = document.querySelector(".header");
const headerInnerNode = document.querySelector(".header__inner");
const heroInnerNode = document.querySelector(".hero__inner");

const HeaderStyles = {
  BACKGROUND_COLOR: "transparent",
  BACKGROUND_COLOR_SCROLLED: "var(--color-grey-900)",
  PADDING_RIGHT: "var(--header-padding-right)",
  PADDING_RIGHT_SCROLLED: "0",
};

const setInitialHeaderStyles = () => {
  headerNode.style.backgroundColor = HeaderStyles.BACKGROUND_COLOR;
  headerInnerNode.style.paddingRight = HeaderStyles.PADDING_RIGHT;
};

const setScrolledHeaderStyles = () => {
  headerNode.style.backgroundColor = HeaderStyles.BACKGROUND_COLOR_SCROLLED;
  headerInnerNode.style.paddingRight = HeaderStyles.PADDING_RIGHT_SCROLLED;
};

const setHeaderStyles = () => {
  if (window.scrollY === 0) {
    setInitialHeaderStyles();
  } else {
    setScrolledHeaderStyles();
  }
};

const handleWindowScroll = () => {
  setHeaderStyles();
};

setHeaderStyles();

window.addEventListener("scroll", handleWindowScroll);
