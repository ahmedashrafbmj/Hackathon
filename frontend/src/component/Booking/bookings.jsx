import React from 'react'
import '../Home Layout/layout.css'
import ReactStars from 'react-rating-stars-component'
import {Link} from 'react-router-dom'

function Bookings({booked}) {
    const options = {
        edit:false,
        color:"rgba(20,20,20,0.1)",
        activeColor:"tomato",
        size:22,
        isHalf: false,
        value:Math.floor(Math.random()*5)
    }
    return (
        <Link className='productMain' to={`/booking/${booked._id}`}>
            <img style={{width:"100%",height:"80%"}} src={booked.image} />
            <h3 style={{marginTop:"10px",marginBottom:"10px"}}>{booked.hotelName}</h3>
            <div style={{display:"flex",alignItems:"center",padding:"3px",marginTop:"10px",marginBottom:"10px"}}>
            </div>
            <h4>{`Rs ${booked.price}`}</h4>
        </Link>
    )
}

export default Bookings