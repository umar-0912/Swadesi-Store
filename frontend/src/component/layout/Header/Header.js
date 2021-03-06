import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import {FaUserCircle, FaSearch, FaCartPlus} from "react-icons/fa"

const options = {
  burgerColorHover: "red",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "white",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "rgb(17, 91, 108)",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "rgb(17, 91, 108)",
  searchIconColorHover: "rgb(17, 91, 108)",
  cartIconColorHover: "rgb(17, 91, 108)",
  cartIconMargin: "1vmax",
  ProfileIconElement: FaUserCircle,
  profileIcon: `${true}`,
  SearchIconElement: FaSearch,
  searchIcon: `${true}`,
  CartIconElement: FaCartPlus,
  cartIcon: `${true}`,
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
