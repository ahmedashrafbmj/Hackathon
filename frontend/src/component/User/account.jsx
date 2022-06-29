import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loader from '../Home Layout/loader'
import Product from '../Home Layout/product'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './user.css'
import { delFunc, editFunc, getProduct } from '../../store/action/productAction'
import CreatePost from '../Product Details/createProduct'

function Account() {
    let data = JSON.parse(localStorage.getItem("login"))
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const { product, isLoading } = useSelector(state => state.postReducer)
    useEffect(() => {
        if (!localStorage.getItem('login')) {
            navigate('/login')
            alert("Login First")
        } else {
            dispatch(getProduct())
        }
    }, [])
    function logout() {
        localStorage.removeItem('login')
        navigate('/products')
    }
    function delPost(v) {
        dispatch(delFunc(v))
    }
    function editPost(v) {
        dispatch(editFunc(v))
    }
    function checkBooking() {
        navigate('/mybooking')
    }
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="caroWidth"
                        src="https://i.ytimg.com/vi/b8lhcBGdzss/maxresdefault.jpg"
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
                        src="https://img.freepik.com/free-vector/flat-design-hotel-banner-template_23-2148920462.jpg?w=2000"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            {data.role == 'user' ? <button className='myBooking' onClick={() => checkBooking()}>My Bookings</button> : null}

            <button className='logoutBtn' onClick={() => logout()}>Logout</button>
            <center><h2>Account - Your Hotel Ad</h2></center>
            <div className='details'>
                <h4>User Details:</h4>
                <h5>{data.email}</h5>
                <h5>{data._id}</h5>
            </div>
            {isLoading ? <Loader /> : product && product.map((v, i) => {
                if (v.userId == data._id) {
                    return (
                        <center><div className='accountMain' key={i}>
                            <Product homeProducts={v} />
                            <button onClick={() => delPost(v)}>Delete</button>
                            <button onClick={() => editPost(v)}>Edit</button>
                        </div>
                        </center>
                    )
                }
            })
            }
        </div>
    )
}
export default Account