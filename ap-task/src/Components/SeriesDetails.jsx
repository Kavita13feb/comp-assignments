import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
export const SeriesDetails = ({ CourseDetails }) => {
  console.log(CourseDetails);
  const { description, subtitle, title, thumbnail } = CourseDetails;
  // const {aspectRatio,basePath,domain,id,key}=thumbnail
  // const imageUrl =;
  console.log(thumbnail);
  return (
    <div style={{ width: "95%", margin: "auto" }}>
      <h3 style={{ textAlign: "start" }}>{title}</h3>
      <div>
        <div id="seriesdetails">
          {thumbnail && (
            <img
              src={`${thumbnail.domain}/${thumbnail.basePath}/20/${thumbnail.key}`}
            />
          )}
          <div>
            <h4>{subtitle}</h4>
            <p>{description}</p>
          </div>
          <div >
        <p>share this series:</p>
        <div className='social-icons'>
        <RiFacebookFill/>
          <BsTwitter/>
          <BsWhatsapp/>
          <BsLinkedin/>
        </div>
        
        </div>
        </div>
      </div>
    </div>
  );
};
