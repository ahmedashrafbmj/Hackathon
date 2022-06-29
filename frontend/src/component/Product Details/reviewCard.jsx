import React from 'react'
import ReactStars from 'react-rating-stars-component'

function ReviewCard({review}) {
    const options = {
        edit:false,
        color:"rgba(20,20,20,0.1)",
        activeColor:"tomato",
        size:window.innerWidth ? 600 < 20 : 25,
        isHalf: true,
        value:review.rating
    }
    return (
        <div className='reviewCard'>
            <img  alt="user" />
            <h4>{review.name}</h4>
            <ReactStars {...options} />
            <h5>{review.comment}</h5>
        </div>
    )
}

export default ReviewCard