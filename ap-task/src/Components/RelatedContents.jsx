import React from 'react'

export const RelatedContents = ({relatedContents}) => {
  console.log(relatedContents)
  return (
    <div id="related-block">
      <p>Other Helpful Video Series </p>
      <hr></hr>
      <div className='related-card-container'>
      {
        relatedContents.map((el,i)=>(
       <div className='related-card' >
          <div>
            <img src={ `${el.thumbnail.domain}/${el.thumbnail.basePath}/10/${el.thumbnail.key}`} width={"100%"}/>
            </div>
            <div>
           <h3>{el.title}</h3>
           <p>{el.subtitle}</p>
           <p>{el.coursesCount} Video Seires</p>

            </div>

        </div>
        ))
      }
      </div>
    
    </div>
  )
}
