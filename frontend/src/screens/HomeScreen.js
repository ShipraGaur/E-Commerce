import React from 'react'
import { Row , Col } from 'react-bootstrap'
import products from '../products'
import ProductComp from '../components/ProductComp'

const HomeScreen = () => {
    return (
        <React.Fragment>
            <h1>Latest Products </h1>
            <Row>
                {products.map( product => {
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
