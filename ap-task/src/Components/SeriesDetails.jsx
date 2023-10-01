import React from 'react'
import {RiFacebookFill} from 'react-icons/ri'
import {BsLinkedin, BsTwitter, BsWhatsapp} from 'react-icons/bs'
export const SeriesDetails = ({CourseDetails}) => {
console.log(CourseDetails)
  const  {description,subtitle,title,thumbnail
  }=CourseDetails
  // const {aspectRatio,basePath,domain,id,key}=thumbnail
  // const imageUrl =;
  console.log(thumbnail)
    return (
    <div id="seriesdetails">
        <div>
            <h4>{title}</h4>
            {thumbnail&&
            <img src={ `${thumbnail.domain}/${thumbnail.basePath}/20/${thumbnail.key}`}  />
            
            }

        </div>
        <div>
          <h3>{subtitle}</h3>
          <p>
            {description}
          </p>
        </div>
        <p>share this series:</p>
        <div className='social-icons'>
          <RiFacebookFill/>
          <BsTwitter/>
          <BsWhatsapp/>
          <BsLinkedin/>
        </div>


    </div>
  )
}
