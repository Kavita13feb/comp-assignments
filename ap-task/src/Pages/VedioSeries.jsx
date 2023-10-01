import React, { useEffect, useState } from 'react'
import { SearchBar } from '../Components/SearchBar'
import { Banner } from '../Components/Banner'
import "../Styles/videoSeries.css"
import { SeriesDetails } from '../Components/SeriesDetails'
import axios from 'axios'
import { Courses } from '../Components/Courses'
import { RelatedContents } from '../Components/RelatedContents'
import { Navbar } from '../Components/Navbar'
export const VedioSeries = () => {
const [CourseDetails,setDetails]=useState({})
const [courses,setCourses]=useState([])
const [relatedContents,setRelatedContents]=useState([])



const getSeriesData=()=>{
  axios.get(`https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3`).then((res)=>{
    console.log(res)
    setDetails(res.data.details)
    setCourses(res.data.courses)
setRelatedContents(res.data.relatedContent)


  }).catch((er)=>{
    console.log(er)
  })

}

useEffect(()=>{
  getSeriesData()
},[])
  return (
    <div>
      <Navbar/>
      <div className='bluebar'> 
       <div className='circle'></div>
       <p>Grateful for Acharya Prashant's videos? Help us build a robust IT system!Click</p>
       <button>Click here</button>
      </div>
        <SearchBar/>
        {/* <p style={{display:"flex"}}>filter details</p> */}
        <SeriesDetails CourseDetails={CourseDetails}/>
        <Courses courses={courses}/>
        <div style={{marginTop:"5%"}}></div>
        <RelatedContents relatedContents={relatedContents}/>
    </div>
  )
}
