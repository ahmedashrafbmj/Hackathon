import ActionType from "../constants/contant";
import axios from "axios";

let getProduct = () => {
    return (dispatch) => {
        dispatch({ type: ActionType.All_PRODUCT_REQUESTED })
        axios({
            method: "GET",
            url: "http://localhost:8080/products/",
        })
            .then((success) => {
                console.log("success", success);
                dispatch({ type: ActionType.All_PRODUCT_SUCCESS, payload: success.data.getAllProduct })
            })
            .catch((error) => {
                dispatch({ type: ActionType.All_PRODUCT_FAIL })
                console.log("error", error);
            })
    }
}
let getProductDetail = (id) => {
    return (dispatch) => {
        dispatch({ type: ActionType.PRODUCT_DETAIL_REQUESTED })
        axios({
            method: "GET",
            url: `http://localhost:8080/products/product/${id}`,
        })
            .then((success) => {
                console.log("success", success);
                dispatch({ type: ActionType.PRODUCT_DETAIL_SUCCESS, payload: success.data.getProduct })
            })
            .catch((error) => {
                dispatch({ type: ActionType.PRODUCT_DETAIL_FAIL })
                console.log("error", error);
            })
    }
}
let postFunc = (post, id,navigate) => {
    return (dispatch) => {
        axios({
            method: "POST",
            url: "http://localhost:8080/products/new",
            data: {
                name: post.name,
                image: post.image,
                detail: post.detail,
                price: post.price,
                userId: id,
                edit: false
            }
        })
            .then((success) => {
                console.log("success", success);
                dispatch({ type: ActionType.All_PRODUCT_SUCCESS, payload: success.data.product, uid: id, edit: success.edit })
                navigate('/account')
            })
            .catch((error) => {
                console.log("error", error);
                navigate('/account')
            })
    }
}

let delFunc = (v) => {
    return (dispatch) => {
        axios({
            method: "DELETE",
            url: `http://localhost:8080/products/product/${v._id}`,
        })
            .then((success) => {
                console.log("success", success);
                dispatch({ type: ActionType.All_PRODUCT_SUCCESS, payload: success.data.getDataAfterDel })
            })
            .catch((error) => {
                console.log("error", error);
            })
    }
}

let editFunc = (v) => {
    return (dispatch) => {
        console.log(v)
        let postName = prompt("Enter Updated Value", v.name)
        let postDetail = prompt("Enter Updated Value", v.detail)
        let postImage = prompt("Enter Updated Value", v.image)
        let postPrice = prompt("Enter Updated Value", v.price)
        const updatedData = {
            name: postName, detail: postDetail, price: postPrice, image: postImage
        }
        axios({
            method: "PUT",
            url: `http://localhost:8080/products/product/${v._id}`,
            data: updatedData
        })
            .then((success) => {
                console.log("success", success);
                dispatch({ type:ActionType.All_PRODUCT_SUCCESS, payload:success.data.getDataAfterUpdate })
            })
            .catch((error) => {
                console.log("error", error);
            })
    }
}

export { getProduct, getProductDetail, postFunc, delFunc, editFunc }