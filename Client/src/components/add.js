import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Add = () => {
    const navigate=useNavigate()
    const [product,setProduct]=useState({
        name:'',
        price:'',
        stock:'',
        description:''
    });

    const handleAdd=()=>{
        axios.post('http://localhost:3001/products',product)
            .then(navigate('/'))
    }

    const handleChange=(e)=>{
        setProduct({...product,[e.target.name]:e.target.value})
    }


    return (
        <div>
            <h1>Thêm sản phẩm</h1>
            <form action="">
                <b>Tên sản phẩm:</b> <br/><br/>
                <TextField name='name' onChange={handleChange} placeholder='Tên sản phẩm' style={{width:'500px'}}/><br/><br/>
                <b>Giá sản phẩm:</b> <br/><br/>
                <TextField name='price' onChange={handleChange} placeholder='Giá'/><br/><br/>
                <b>Tồn kho:</b> <br/><br/>
                <TextField name='stock' onChange={handleChange} placeholder='Tồn kho'/>
                <br/><br/>
                <b>Mô tả sản phẩm:</b> <br/><br/>
                <TextField name='description' onChange={handleChange} placeholder='Mô tả sản phẩm' style={{width:'800px'}}/><br/><br/>
                <Button variant='contained' onClick={handleAdd}>Thêm mới</Button>
                <Button variant="outlined">Hủy</Button>
            </form>
        </div>
    );
};

export default Add;