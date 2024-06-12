import React, {useState, useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'

import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'


function ShippingScreen() {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const navigate = useNavigate();

    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (shippingAddress){
    //         setAddress(shippingAddress.address)
    //         setCity(shippingAddress.city)
    //         setPostalCode(shippingAddress.postalCode)
    //         setCountry(shippingAddress.country)
    //     }
    // }
    // , [shippingAddress])
    
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({address, city, postalCode, country}));
        navigate('/payment');
    }
  return (
    <FormContainer>
        <h1>Shipping</h1>
        <CheckoutSteps step1 step2/>
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='address'>
                <Form.Label>Address</Form.Label>
                <Form.Control required type='address' placeholder='Enter address' value={address ? address : ''} onChange={(e) => setAddress(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='city'>
                <Form.Label>City</Form.Label>
                <Form.Control required type='city' placeholder='Enter city' value={city ? city : ''} onChange={(e) => setCity(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='postalCode'>
                <Form.Label>Postal Code</Form.Label>
                <Form.Control required type='postalCode' placeholder='Enter postal code' value={postalCode ? postalCode : ''} onChange={(e) => setPostalCode(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='country'>
                <Form.Label>Country</Form.Label>
                <Form.Control required type='country' placeholder='Enter country' value={country ? country : ''} onChange={(e) => setCountry(e.target.value)}></Form.Control>
            </Form.Group>
            
            <Button type='submit' variant='primary'>Continue</Button>
        </Form>
    </FormContainer>
  )
}

export default ShippingScreen
