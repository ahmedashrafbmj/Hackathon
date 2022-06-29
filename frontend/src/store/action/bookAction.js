import ActionType from "../constants/contant";
import axios from "axios";
let bookFunc = (oneProduct, dataId, booking, price, navigate) => {
    return (dispatch) => {
        axios({
            method: "POST",
            url: "http://localhost:8080/booking/new",
            data: {
                hotelName: oneProduct.name,
                image: oneProduct.image,
                detail: oneProduct.detail,
                price: price,
                userId: dataId._id,
                personName: booking.personName,
                number: booking.number,
                cnic: booking.cnic,
                rooms: booking.rooms,
                days: booking.days,
                fromDate: booking.fromDate,
                toDate: booking.toDate,
                option:booking.option,
                cardNo:booking.cardNo
            }
        })
            .then((success) => {
                console.log("success", success);
                navigate('/mybooking')
                dispatch({ type: ActionType.All_BOOKING_SUCCESS, payload: success.data.booking })
            })
            .catch((error) => {
                console.log("error", error);
            })
    }
}

let getBooking = () => {
    return (dispatch) => {
        dispatch({ type: ActionType.All_BOOKING_REQUESTED })
        axios({
            method: "GET",
            url: "http://localhost:8080/booking/",
        })
            .then((success) => {
                console.log("success", success);
                dispatch({ type: ActionType.All_BOOKING_SUCCESS, payload: success.data.getAllBooking })
            })
            .catch((error) => {
                dispatch({ type: ActionType.All_BOOKING_FAIL })
                console.log("error", error);
            })
    }
}

let getBookingDetail = (id) => {
    return (dispatch) => {
        dispatch({ type: ActionType.BOOKING_DETAIL_REQUESTED })
        axios({
            method: "GET",
            url: `http://localhost:8080/booking/book/${id}`,
        })
            .then((success) => {
                console.log("success", success);
                dispatch({ type: ActionType.BOOKING_DETAIL_SUCCESS, payload: success.data.oneBookings })
            })
            .catch((error) => {
                dispatch({ type: ActionType.BOOKING_DETAIL_FAIL })
                console.log("error", error);
            })
    }
}

let delFunc = (v) => {
    return (dispatch) => {
        axios({
            method: "DELETE",
            url: `http://localhost:8080/booking/delete/${v._id}`,
        })
            .then((success) => {
                console.log("success", success);
                dispatch({ type: ActionType.All_BOOKING_SUCCESS, payload: success.data.getBookingAfterDel })
            })
            .catch((error) => {
                console.log("error", error);
            })
    }
}

let editFunc = (v) => {
    return (dispatch) => {
        let personName = prompt("Enter Updated Value", v.personName)
        let cnic = prompt("Enter Updated Value", v.cnic)
        let number = prompt("Enter Updated Value", v.number)
        let rooms = prompt("Enter Updated Value", v.rooms)
        let days = prompt("Enter Updated Value", v.days)
        let fromDate = prompt("Enter Updated Value", v.fromDate)
        let toDate = prompt("Enter Updated Value", v.toDate)
        const updatedData = {
            personName, cnic, number, rooms, days, fromDate, toDate,price:v.price*rooms*days
        }
        axios({
            method: "PUT",
            url: `http://localhost:8080/booking/edit/${v._id}`,
            data: updatedData
        })
            .then((success) => {
                console.log("success", success);
                dispatch({ type: ActionType.All_PRODUCT_SUCCESS, payload: success.data.getBookingAfterUpdate })
            })
            .catch((error) => {
                console.log("error", error);
            })
    }
}
export { bookFunc, getBooking, delFunc, editFunc ,getBookingDetail}