import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import './detail.css';

const Detail = () => {
    const [product,setProduct]=useState({})
    const {productId}=useParams();

    useEffect(()=>{
        axios.get('http://localhost:3001/products/'+productId)
            .then(result=>{setProduct(result.data)})
    },[productId])

    return (
        <div>
            <h1>Chi tiết sản phẩm</h1>
            <p>Tên sản phẩm: {product.name}</p>
            <p>Giá(đ): {product.price}</p>
            <p>Tồn kho: {product.stock}</p>
            <hr/>
            <p>Mô tả:</p>
            <p>{product.description}</p>
        </div>
    );
};

export default Detail;