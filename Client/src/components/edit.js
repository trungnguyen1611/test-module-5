import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Edit = () => {
    const {productId}=useParams();
    const navigate = useNavigate();
    const [product,setProduct]=useState({
        name:'',
        price:'',
        stock:'',
        description:'',
    });
    // const [name,setName]=useState({});
    // const [price,setPrice]=useState({});
    // const [stock,setStock]=useState({});
    // const [description],setDescription]=useState({});

    useEffect(()=>{
        axios.get('http://localhost:3001/products/'+productId)
            .then(result=>setProduct(result.data))
    },[productId])

    const handleEdit=(id)=>{
        axios.put('http://localhost:3001/products/'+id,product)
            .then(navigate('/'))
    }

    const handleChange=(e)=>{
        setProduct({...product,[e.target.name]:e.target.value})
    }

    return (
        <div>
            <h1>Cập nhật sản phẩm</h1>
            <form action="">
                <b>Tên sản phẩm:</b> <br/><br/>
                <TextField value={product.name} onChange={handleChange} name='name' placeholder='Tên sản phẩm' style={{width:'500px'}}/><br/><br/>
                <b>Giá sản phẩm:</b> <br/><br/>
                <TextField value={product.price} onChange={handleChange} name='price' placeholder='Giá'/><br/><br/>
                <b>Tồn kho:</b> <br/><br/>
                <TextField value={product.stock} onChange={handleChange} name='stock' placeholder='Tồn kho'/>
                <br/><br/>
                <b>Mô tả sản phẩm:</b> <br/><br/>
                <TextField value={product.description} onChange={handleChange} name='description' placeholder='Mô tả sản phẩm' style={{width:'800px'}}/><br/><br/>
                <Button variant='contained' onClick={()=>handleEdit(product.id)}>Cập nhật</Button>
                <Button variant="outlined" onClick={()=>navigate('/')}>Hủy</Button>
            </form>
        </div>
    );
};

export default Edit;