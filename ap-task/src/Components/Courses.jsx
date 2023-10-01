import React from 'react'

export const Courses = ({courses}) => {
console.log(courses)
// const hours = Math.floor(totalHours);
// const minutes = (totalHours - hours) * 60;
  return (
    <div>
      <p>video series </p>
      <hr></hr>
      <div className='series-card-container'>
      {
        courses.map((el,i)=>(
       <div >
           <p>{i+1}</p>
           <p>{el.title}</p>
           <p>{el.subtitle}</p>
           <p>{`${Math.floor(el.courseHours)}hours ${Math.round((el.courseHours - Math.floor(el.courseHours)) * 60)}minutes`}</p>
       <p>contribution {el.amount} <span style={{textDecoration:'line-through'}}>{el.originalAmount}</span></p>
       <p>{el.language}</p>
       <button>Add to cart</button>
       <button>Enroll</button>
        </div>
        ))
      }
      </div>
    
    </div>
  )
}
