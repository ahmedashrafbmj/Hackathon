import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loader from '../Home Layout/loader'
import Bookings from './bookings'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { delFunc, getBooking , editFunc} from '../../store/action/bookAction'

function MyBooking() {
    let data = JSON.parse(localStorage.getItem("login"))
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const { booking,isLoading } = useSelector(state => state.bookReducer)
    useEffect(() => {
        dispatch(getBooking())
    }, [])
    function logout() {
        localStorage.removeItem('login')
        navigate('/products')
    }
    function delBooking(v) {
        dispatch(delFunc(v))
    }
    function editBooking(v) {
        dispatch(editFunc(v))
    }
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="caroWidth"
                        src="https://img.freepik.com/free-vector/flat-design-hotel-banner-template_23-2148920462.jpg?w=2000"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="caroWidth"
                        src="https://img.freepik.com/free-vector/flat-hotel-banner-template-with-photo_23-2148927865.jpg?w=2000"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img  
                        className="caroWidth"
                        src="https://i.ytimg.com/vi/b8lhcBGdzss/maxresdefault.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <center><h2>My Booking</h2></center>
            <button className='logoutBtn' onClick={() => logout()}>Logout</button>
            <div className='details'>
                <h4>User Details:</h4>
                <h5>{data.email}</h5>
                <h5>{data._id}</h5>
            </div>
            {isLoading ? <Loader /> : booking && booking.map((v, i) => {
                if (v.userId == data._id) {
                    return (
                        <center key={i}><div className='accountMain' >
                            <Bookings booked={v} />
                            <div>
                                <button onClick={() => delBooking(v)}>Delete</button>
                                <button onClick={() => editBooking(v)}>Edit</button>
                            </div>
                        </div>
                        </center>
                    )
                }
            })
            }
        </div>
    )
}
export default MyBooking