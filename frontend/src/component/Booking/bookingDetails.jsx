import React, { Fragment, useEffect } from "react";
import ReactStars from 'react-rating-stars-component'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom";
import { getBookingDetail } from "../../store/action/bookAction";
import ReviewCard from '../Product Details/reviewCard'

function BookingDetails() {
    let { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBookingDetail(id))
    }, [dispatch])
    let navigate = useNavigate()
    const data = JSON.parse(localStorage.getItem('login'))
    const { oneBooking } = useSelector(state => state.bookDetailReducer)
    console.log(oneBooking);
    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: 22,
        isHalf: true,
        value: 2.5
    }
    return (
        <Fragment>
            <div className="detailsBlocks">
                <div>
                    <img className="oneProPic" style={{ width: "50vmax", height: "60vh" }} src={oneBooking.image} alt="" />
                </div>
                <div>
                    <div className="detailsBlock-1">
                        <h3>{oneBooking.hotelName}</h3>
                    </div>
                    <div className="detailsBlock-2">
                        <ReactStars {...options} />
                        <h6>({oneBooking.numOfReviews}Reviews)</h6>
                    </div>
                    <div className="detailsBlock-4">
                        <p>Description : {oneBooking.description}</p>
                    </div>
                    <h5>Rooms: {oneBooking.rooms}</h5>
                    <h5>Days: {oneBooking.days}</h5>
                    <h5>From: {oneBooking.fromDate}</h5>
                    <h5>To: {oneBooking.toDate}</h5>
                    <h5>Mode Of Payment: {oneBooking.option}</h5>
                    <h5>Card Number: {oneBooking.cardNo}</h5>
                    <div className="detailsBlock-3">
                        <h2>{`Rs ${oneBooking.price}`}</h2>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default BookingDetails