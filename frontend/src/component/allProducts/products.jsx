import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Home Layout/loader'
import { useNavigate } from 'react-router-dom'
import Product from '../Home Layout/product'
import { getProduct } from '../../store/action/productAction'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './allpro.css'
function Products() {
    let data = JSON.parse(localStorage.getItem('login'))
    const navigate = useNavigate()
    function createProduct() {
        if (data.role == 'admin') {
            navigate('/create')
        } else if (!data) {
            alert("Login In First")
        } else {
            alert("You Are Not A Admin")
        }
    }
    const { product, isLoading } = useSelector(state => state.postReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])
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
                        src="https://img.freepik.com/free-vector/flat-design-hotel-banner-template_23-2148920462.jpg?w=2000"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="caroWidth"
                        src="https://img.freepik.com/free-vector/flat-hotel-banner-template-with-photo_23-2148927865.jpg?w=2000"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            {
                isLoading ? <Loader /> : <div className='allProMain'>
                    <h2 className='feature'>Products</h2>
                    <div className='container'>
                        {product && product.map((v, i) => {
                            return <Product key={i} homeProducts={v} />
                        })}
                    </div>
                    <div style={{ textAlign: "center", marginTop: "10%" }}>
                        <button className='createBtn' onClick={() => createProduct()}>Create Hotel</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Products

