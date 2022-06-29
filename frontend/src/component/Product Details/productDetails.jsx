import React, { Fragment, useEffect } from "react";
import './proDetails.css'
import ReactStars from 'react-rating-stars-component'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetail } from "../../store/action/productAction";
import ReviewCard from './reviewCard'
function ProductDetails() {
    let navigate = useNavigate()
    const data = JSON.parse(localStorage.getItem('login'))
    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: 22,
        isHalf: true,
        value: 2.5
    }
    function book(){
        if(data.role =='admin'){
            alert("You are a admin. You cannot book a hotel")
        }else{
            navigate(`/book/${oneProduct._id}`)
        }
    }
    let { id } = useParams()
    const dispatch = useDispatch()
    const { oneProduct } = useSelector(state => state.postDetailReducer)
    useEffect(() => {
        dispatch(getProductDetail(id))
    }, [dispatch])
    return (
        <Fragment>
            <div className="detailsBlocks">
                <div>
                    <img className="oneProPic" style={{ width: "50vmax", height: "60vh" }} src={oneProduct.image} alt="" />
                </div>
                <div>
                    <div className="detailsBlock-1">
                        <h3>{oneProduct.name}</h3>
                    </div>
                    <div className="detailsBlock-2">
                        <ReactStars {...options} />
                        <h6>({oneProduct.numOfReviews}Reviews)</h6>
                    </div>
                    <div className="detailsBlock-3">
                        <h2>{`Rs ${oneProduct.price}`}</h2>
                    </div>
                    <div className="detailsBlock-4">
                        <p>Description :</p>
                        <p>{oneProduct.detail}</p>
                    </div>
                    <div>
                        {oneProduct.userId == data._id ? null : <button className="bookBtn" onClick={()=>book()}>Book Now</button>}
                    </div>
                </div>
            </div>
            {oneProduct.reviews && oneProduct.reviews[0] ? (
                <div className="reviews">
                    {oneProduct.reviews.map((review) => <ReviewCard review={review} />)}
                </div>
            ) :
                <p>No Reviews Yet</p>
            }
        </Fragment>
    )
}
export default ProductDetails