import React from 'react'
import { useEffect } from 'react'
import './layout.css'
import Product from './product'
import MetaData from './metaData'
import { getProduct } from '../../store/action/productAction'
import { useDispatch, useSelector } from "react-redux"
import Loader from './loader'
import { useNavigate } from 'react-router-dom'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



function Main() {
    let data = JSON.parse(localStorage.getItem('login'))
    const navigate = useNavigate()
    function createProduct() {
        if (data.role == 'admin') {
            navigate('/create')
        }else if(!data){
            alert("Login In First")
        } else {
            alert("You Are Not A Admin")
        }
    }
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])
    const { product, isLoading } = useSelector(state => state.postReducer)
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="caroWidth"
                        src="https://img.freepik.com/free-vector/flat-hotel-banner-template-with-photo_23-2148927865.jpg?w=2000"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="caroWidth"
                        src="https://i.ytimg.com/vi/b8lhcBGdzss/maxresdefault.jpg"
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
            {
                isLoading ? <Loader /> : <div className='main'>
                    <MetaData title="Ecommerce" />
                    <u><h3 className='feature'>Featured Hotels</h3></u>
                    <div className="container">
                        {product && product.map((v, index) => {
                            for (let i = index; i < 3; i++) {
                                return <Product key={index} homeProducts={v} />
                            }
                        })}
                    </div>
                    <div style={{textAlign:"center",marginTop:"10%"}}>
                        <button className='createBtn' onClick={() => createProduct()}>Create Hotel</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Main
