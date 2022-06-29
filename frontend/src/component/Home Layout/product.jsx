import React from 'react'
import './layout.css'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'

function Product({ homeProducts }) {
    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: 22,
        isHalf: true,
        value: 2.5
    }
    return (
        <Link  className='productMain' to={`/product/${homeProducts._id}`}>
            {/* <div> */}
                <img src={homeProducts.image} />
                <p>{homeProducts.name}</p>
                <div>
                    <ReactStars {...options}  />
                    <p>{`${homeProducts.numOfReviews} Reviews`}</p>
                </div>
                <p>{`Rs ${homeProducts.price}`}</p>
            {/* </div> */}
        </Link>
    )
}

export default Product