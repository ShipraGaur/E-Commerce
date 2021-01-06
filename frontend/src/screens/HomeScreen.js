import React, { useEffect, useState } from 'react'
import { Row , Col } from 'react-bootstrap'
import ProductComp from '../components/ProductComp'
import axios from 'axios'

const HomeScreen = () => {
    const [products,setProducts] = useState([])

    useEffect( () => {
        const fetchProducts = async () => {
            const res = await axios.get('/api/products')
            setProducts(res.data)
        }
        fetchProducts()
    }, [])

    return (
        <React.Fragment>
            <h1>Latest Products </h1>
            <Row>
                {products.map ( product => {
                    return(
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                            <ProductComp product={product} />
                        </Col>
                    );
                })}
            </Row>
        </React.Fragment>
    )
}

export default HomeScreen
