import React from "react";
import {MdOutlineSearch} from "react-icons/md"
export const SearchBar = () => {
  return (
    <div id="searchbar">
      <div>
        <img src={"https://acharyaprashant.org/images/ic_videoseries.png"} alt="logo" width={'10%'}/>
        <span>
          <select>
            <option>All</option>
          </select>
          <input placeholder="Search for video series" />
       <div className="search-icon">
       <MdOutlineSearch/>

       </div>
        </span>
      </div>

      <div>
        <button>Login</button>
      </div>
    </div>
  );
};
