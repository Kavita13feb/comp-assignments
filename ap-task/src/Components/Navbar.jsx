import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
import React, { useEffect, useState } from "react";

// import { HamBurgerDesktop } from "./Hamburger";
// import { DropDownUi } from "./Dropdown";
import { NavData } from "./NavData";
import { DropDownUi } from "./DropdownUi";
export const Navbar=()=> {
  const [showMenu, setShow] = useState(false);

  const [showDrowpdown1, setDrowpdown1] = useState(false);
  const [showDrowpdown, setDrowpdown] = useState(
    [
      "Home",
      "Live Sessions",
      "Vedio Series",
      "Ap Books",
      "Ap Articles",
      "Invite",
      "In Media",
      "Donate",
    ].map(() => false)
  );

  const handleDropdown = (i) => {
    setShow(false);
    console.log(showDrowpdown);
    const newDropdown = showDrowpdown.map((el, index) => {
      // console.log(showDrowpdown[i], index);
      if (i == index) {
        return !el;
      }
      return false;
    });
    console.log(newDropdown);

    setDrowpdown(newDropdown);
  };

  const handleLogoClick = () => {
    window.location.reload();
  };
  return (
    <div id="navbar">
      <div >
        <img
          src="https://acharyaprashant.org/images/ic_favicon.png"
          alt="logo"
          width="3%"
          onClick={handleLogoClick}

        />
        
          {NavData.map((el, i) => (
            <div>
              <p
              className="flex-center cursor"
              onClick={() => handleDropdown(i)}
              key={i}
            >
              {el.title}

              {
                el.title=="Live Sessions"||el.title=="Invite"? ( showDrowpdown[i] ? (
                  <>
                    <HiOutlineChevronUp />
  
                  </>
                ) : (
                  <HiOutlineChevronDown />
                )):null
              }
             
            </p>

          {
            showDrowpdown[i]&&<DropDownUi menu={el.menu?el.menu:[]} />
          }  

            </div>
          ))}
      
      </div>


    
        
        <div className="right-icons ">
        <p
            className="flex-center cursor"
            onClick={() => setDrowpdown1(!showDrowpdown1)}
          >
            EN
            {showDrowpdown1 ? (
              <>
                <HiOutlineChevronUp />
              </>
            ) : (
              <HiOutlineChevronDown />
            )}
          </p>

          <BiPhone className="" size={25} />
          <GiHamburgerMenu
            size={25}
            onClick={() => {
              setShow(!showMenu);
              setDrowpdown(showDrowpdown.map((el) => false));
            }}
            className="cursor"
          />
          <p>Menu</p>
          {/* {showMenu ? <HamBurgerDesktop /> : null} */}
        </div>
    
    </div>
  );
}

