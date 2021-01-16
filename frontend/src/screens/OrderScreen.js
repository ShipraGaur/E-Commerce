import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import LoaderComp from '../components/LoaderComp'
import MessageComp from '../components/MessageComp'
import{ getOrderDetails } from '../redux/actions/orderActions'

const OrderScreen = ({ match }) => {
    const orderId = match.params.id
    const dispatch = useDispatch()

    const orderDetails = useSelector((state) => state.orderDetails)
    const { order, loading, error } = orderDetails

    if(!loading){
        const addDecimals = (num) => {
            return (Math.round(num * 100) / 100).toFixed(2)
        }
        order.itemsPrice = addDecimals(order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0))
        order.shippingPrice = addDecimals(Number(order.shippingPrice))
        order.taxPrice = addDecimals(Number(order.taxPrice))
        order.totalPrice = addDecimals(Number(order.totalPrice))
    }
  
    useEffect(() => {
        dispatch(getOrderDetails(orderId))
    }, [dispatch, orderId])
    
    return (
      loading ? <LoaderComp /> : error ? <MessageComp variant='damger'>{error}</MessageComp> :
      <>
        <h1>Order {order._id}</h1>
        <Row>
          <Col md={8}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Shipping</h2>
                <p><strong>Name: </strong> {order.user.name}</p>
                <p><strong>Email: </strong><a href={`mailto: ${order.user.email}`}>{order.user.email}</a></p>
                <p>
                  <strong>Address:</strong>
                  {' '}{order.shippingAddress.address}, {order.shippingAddress.city}{' '}
                  {order.shippingAddress.postalCode},{' '}
                  {order.shippingAddress.country}
                </p>
                <p>
                    {order.isDelivered ?
                        <MessageComp variant='success'>Delivered on {order.deliveredAt}</MessageComp> :
                        <MessageComp variant='danger'>Not Delivered</MessageComp>
                    }
                </p>
              </ListGroup.Item>
  
              <ListGroup.Item>
                <h2>Payment Method</h2>
                <p>
                <strong>Method: </strong>
                {order.paymentMethod}
                </p>
                <p>
                    {order.isPaid ?
                        <MessageComp variant='success'>Paid on {order.paidAt}</MessageComp> :
                        <MessageComp variant='danger'>Not Paid</MessageComp>
                    }
                </p>
              </ListGroup.Item>
  
              <ListGroup.Item>
                <h2>Order Items</h2>
                {order.orderItems.length === 0 ? (
                  <MessageComp>Order is empty</MessageComp>
                ) : (
                  <ListGroup variant='flush'>
                    {order.orderItems.map((item, index) => (
                      <ListGroup.Item key={index}>
                        <Row>
                          <Col md={1}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fluid
                              rounded
                            />
                          </Col>
                          <Col>
                            <Link to={`/product/${item.product}`}>
                              {item.name}
                            </Link>
                          </Col>
                          <Col md={4}>
                            {item.qty} x ${item.price} = ${item.qty * item.price}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h2>Order Summary</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Items</Col>
                    <Col>${order.itemsPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Shipping</Col>
                    <Col>${order.shippingPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Tax</Col>
                    <Col>${order.taxPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Total</Col>
                    <Col>${order.totalPrice}</Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </>
    )
  }

export default OrderScreen

