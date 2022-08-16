import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './home.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {Link,useNavigate} from 'react-router-dom';


const Home = () => {
    const navigate=useNavigate();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then(result => {
                setProducts(result.data)
            })
    }, [products]);

    const handleDelete=(id)=>{
        if(window.confirm('Bạn có chắc muốn xóa sản phẩm này?')){
        axios.delete('http://localhost:3001/products/'+id).then()
        }
    }

    const handleEdit=(id)=>{
        navigate(`/edit/${id}`)
    }

    return (
        <div>
            <div>
            <h1>Danh sách sản phẩm</h1>
            <Link to='/add' style={{textDecoration:'none'}}><Button variant='contained'>Thêm sản phẩm</Button></Link>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><b>#</b></TableCell>
                            <TableCell><b>Tên sản phẩm</b></TableCell>
                            <TableCell><b>Giá</b></TableCell>
                            <TableCell><b>Tồn kho</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product, index) => (
                            <TableRow key={product.id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell><Link to={`/detail/${product.id}`}
                                                 style={{textDecoration:'none', color:'black'}}
                                >{product.name}</Link></TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>{product.stock}</TableCell>
                                <TableCell><EditIcon onClick={()=>handleEdit(product.id)}/></TableCell>
                                <TableCell><DeleteIcon onClick={()=>handleDelete(product.id)}/></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Home;