import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import UserService from '../Service/UserService';

export const SignUp = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'USER',
        city: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await UserService.register(formData);
            setFormData({
                name: '',
                email: '',
                password: '',
                city: ''
            });
            alert('User registered successfully');
            navigate('/homepage');

        } catch (error) {
            console.log('Error registering user: ', error);
            alert(error.message ||'An error occured while registering user')
        }
    }
    return (
        <Form onSubmit={handleSubmit} className='container-fluid d-flex flex-column justify-content-center align-items-center vh-100 bg-body-secondary'>
            <div className='border border-primary rounded p-5'>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" name='name' value={formData.name} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' value={formData.email} onChange={handleInputChange} />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' value={formData.password} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter city" name='city' value={formData.city} onChange={handleInputChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </div>
        </Form>
    );
}

