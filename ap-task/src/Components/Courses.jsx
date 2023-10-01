import React from 'react'

export const Courses = ({courses}) => {
console.log(courses)
// const hours = Math.floor(totalHours);
// const minutes = (totalHours - hours) * 60;
  return (
    <div id='course-block'>
      <p>video series </p>
      <hr></hr>
      <div className='series-card-container'>
      {
        courses.map((el,i)=>(
       <div className='card cursor' >
           <p>भाग-{i+1}</p>
           <h4>{el.title}</h4>
           <p>{el.subtitle}</p>
           <p>{`${Math.floor(el.courseHours)}hours ${Math.round((el.courseHours - Math.floor(el.courseHours)) * 60)}minutes`}</p>
          <p>Contribution: ₹{el.amount} <span style={{textDecoration:'line-through'}}>₹{el.originalAmount}</span></p>
           <p>{el.language}</p>
       <span style={{color:"#d24115"}}>Add to cart</span>
       <span style={{color:"#d24115",marginLeft:"5%"}}>Enroll</span>
        </div>
        ))
      }
      </div>
    
    </div>
  )
}
