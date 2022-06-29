import { useEffect, useState } from "react"
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom"
import { bookFunc } from "../../store/action/bookAction"
import { getProductDetail } from "../../store/action/productAction"
function CreateBooking() {
    // const [option,setOption] = useState()
    let navigate = useNavigate()
    const {id} = useParams()
    const { oneProduct } = useSelector(state => state.postDetailReducer)
    let data = JSON.parse(localStorage.getItem('login'))
    const dispatch = useDispatch()
    const [booking, SetBooking] = useState({
        personName: "",
        cnic: "",
        number: "",
        rooms: 1,
        days: 1,
        fromDate:null,
        toDate:null,
        option:"",
        cardNo:""
    })
    let setField = (e, propname) => {
        SetBooking({ ...booking, [propname]: e })
    }
    let addHotel = () => {
        dispatch(bookFunc(oneProduct,data,booking,booking.rooms*oneProduct.price*booking.days,navigate))   
    }
    useEffect(()=>{
        dispatch(getProductDetail(id))
    },[])
    return (
        <div className="createMain">
                <h2 style={{ textAlign: "center", padding: "20px" }}>Book Hotel</h2>
                <h4>{oneProduct.name}</h4>
                <h5>Per Day Price {oneProduct.price}</h5>
                <input type="text" placeholder="Name" onChange={(e) => setField(e.target.value, "personName")} value={booking.personName} />
                <input type="text" placeholder="CNIC" onChange={(e) => setField(e.target.value, "cnic")} value={booking.cnic} />
                <input type="text" placeholder="Number" onChange={(e) => setField(e.target.value, "number")} value={booking.number} />
                <input type="number" placeholder="Rooms" onChange={(e) => setField(e.target.value, "rooms")} value={booking.rooms} />
                <input type="number" placeholder="Days" onChange={(e) => setField(e.target.value, "days")} value={booking.days} />
                <input type="date" placeholder="From date" onChange={(e) => setField(e.target.value, "fromDate")} value={booking.fromDate} />
                <input type="date" placeholder="To date" onChange={(e) => setField(e.target.value, "toDate")} value={booking.toDate} />
                <h5>Select Payment Method</h5>
                <select value={booking.option} onChange={(e)=>setField(e.target.value,"option")}>
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
                <option value="On Arrival">On Arrival</option>
                </select>
                {booking.option == "Card" ? <input placeholder="Enter You Card Number" type='number' onChange={(e)=>setField(e.target.value,"cardNo")} value={booking.cardNo} /> : null}
                <h4>Your Bill {booking.rooms*oneProduct.price*booking.days}</h4>
                <button onClick={() => addHotel()}>Book Hotel</button>
            </div>
    )
}
export default CreateBooking