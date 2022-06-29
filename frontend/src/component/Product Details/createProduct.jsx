import { useState } from "react"
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { postFunc } from "../../store/action/productAction"
export default function CreatePost() {
    let navigate = useNavigate()
    
    let data = JSON.parse(localStorage.getItem('login'))
    const dispatch = useDispatch()
    const [post, SetPost] = useState({
        name: "",
        image: "",
        detail: "",
        price: ""
    })
    let setField = (e, propname) => {
        SetPost({ ...post, [propname]: e })
    }
    let addPost = () => {
        dispatch(postFunc(post, data._id,navigate))

    }
    return (
        <div className="createMain">
            <h2 style={{textAlign:"center",padding:"20px"}}>Create Hotel Add</h2>
            <input type="text" placeholder="Name" onChange={(e) => setField(e.target.value, "name")} value={post.name} />
            <input type="text" placeholder="Image" onChange={(e) => setField(e.target.value, "image")} value={post.image} />
            <input type="text" placeholder="Detail" onChange={(e) => setField(e.target.value, "detail")} value={post.detail} />
            <input type="number" placeholder="Price" onChange={(e) => setField(e.target.value, "price")} value={post.price} />
            <button onClick={() => addPost()}>Add Hotel</button>
        </div>
    )
}