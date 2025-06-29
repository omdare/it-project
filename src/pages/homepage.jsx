import React, { useState } from "react";
import { FaBars, FaFacebook, FaInstagram, FaLinkedinIn, FaPinterest, FaSearch } from "react-icons/fa";
import { MdOutlineMenu, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import CarCard from "../components/card";
import tesla from '../assets/tesla.png'
import logo from '../assets/logo.webp'
import tesla_image from '../assets/tesla.jpg'
import {IoClose} from "react-icons/io5"
import Navbar from "../components/navbar";


const Homepage = () => {
  
  return (
    <>

      <div className="hero_wrap">
        <div className="hero">
          <div className="info">
            <p>Cars for Rent</p>
            <p>Explore the available cars in different locations</p>
          </div>

          <div className="search_card">
            <div className="top">
              <input
                type="text"
                name=""
                id=""
                className="search"
                placeholder="Car brand, model, and etc."
              />
              <div className="btn">
                <MdSearch />
              </div>
            </div>
            <div className="line"></div>
            <div className="bottom">
              <div className="btn_round black_btn">London</div>
              <div className="btn_round">Dubai</div>
              <div className="btn_round">Rome</div>
              <div className="btn_round">New York</div>
              <div className="btn_round">Abu Dhabi</div>
            </div>
          </div>
        </div>
      </div>

         <div className="cards">
        <CarCard />
          <CarCard
            brandLogo={tesla}
            carImage={tesla_image}
            carName={"2023 Tesla Model Y"}
            brand={"Tesla"}
            modelYear={"2023"}
            bodyType={"Sedan"}
            engine={"Electro"}
            transmission={"8-Speed Automatic"}
            interior_exterior_colours={['red', "black"]}
            seats={5}
            price={56}
            currency={"N"}
          />
            <CarCard />
              <CarCard />
                <CarCard />
                  <CarCard />
      </div>

         <div className="footer">
       <div className="left">
         <div className="head">
            <img src={logo} alt="" />
            <p>bydrive</p>
         </div>
         <p className='address'>
            Storekower Strasse 41 <br />
            Rheriano-Plalz, <br />
            56379, Germany
         </p>
         <div className="socials">
            <FaFacebook />
            {/* <FaXTwitter/> */}
            <FaLinkedinIn />
            <FaInstagram />
            <FaPinterest />
         </div>
       </div>
       <div className="right">
          <div className="row">
            <p>Primary Pages</p>
            <p>Rent Luxury Cars</p>
            <p>Rent Cars</p>
            <p>Car Dealer</p>
            <p>Car Dealer Multi-Brand</p>
            <p>Services</p>
            <p>Contact Us</p>
            <p>Coming Soon</p>
          </div>
          <div className="row">
            <p>Listing</p>
             <p>Rental Cars</p>
            <p>Rental Cars List</p>
            <p>Rental Cars with Map</p>
            <p>Rental Cars with Table</p>
            <p>Dealer Cars List</p>
            <p>Dealer Cars Grid</p>
            <p>Car Reviews</p>
          </div>
          <div className="row">
            <p>Overview & Details</p>
             <p>Rental Car</p>
            <p>Rental Car with Map</p>
            <p>Rental Car with Centered</p>
            <p>Dealer Car</p>
            <p>Dealer Car 2 Columns</p>
           
          </div>
       </div>
    </div>
    </>
  );
};

export default Homepage;
