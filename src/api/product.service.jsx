import axios from "axios";
import Api from ".";

export const getItems = (data, callback) => {
    axios.get(`https://api.slingacademy.com/v1/sample-data/products?limit=50`,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(res.data.data.data)
    }).catch((err) => {
        console.log(err)
    })
}