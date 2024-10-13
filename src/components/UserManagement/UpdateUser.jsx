import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import UserService from '../Service/UserService';
import { useNavigate, useParams } from 'react-router-dom';

export const UpdateUser = () => {

    const navigate = useNavigate();
    const {userId} = useParams();

    const [userData,setUserData]=useState({
        name:'',
        email:'',
        role:'',
        city:''
    })

    useEffect(()=>{
        fetchUserDataById(userId);
    },[userId])

    const fetchUserDataById = async(userId)=>{
        try{
            const token = localStorage.getItem('token');
            const response = await UserService.getUserById(userId,token);
            const {name,email,role,city} = response.ourUsers;
            setUserData({name,email,role,city});
        }catch(error){
            console.error('Error fetching user data: ',error)
        }
    };

    const handleInputChange= (e)=>{
        const {name,value} = e.target;
        setUserData((prevUserData)=>({
            ...prevUserData,
            [name]:value
        }));
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try{
            const confirmDelete = window.confirm('Are you sure you want to delete this user?');
            if(confirmDelete){
                const token = localStorage.getItem('token');
                await UserService.updateUser(userId,userData,token)
                navigate("/admin/user-management")
            }
            }catch(error){
                console.error('Error updating user profile: ',error)
                alert(error)
        }
    }

    return (
        <div className='container'>
            <h2>Update User</h2>
            <Form onSubmit={handleSubmit} className='container-fluid d-flex flex-column justify-content-center align-items-center vh-100 bg-body-secondary'>
                <div className='border border-primary rounded p-5'>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" name='username' value={userData.username} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" name='email' value={userData.email} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicRole">
                        <Form.Label>Role</Form.Label>
                        <Form.Select aria-label='Default select example' name='role' value={userData.role} onChange={handleInputChange}>
                            <option >Select role</option>
                            <option value="ADMIN">Admin</option>
                            <option value="USER">User</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Enter City" name='City' value={userData.city} onChange={handleInputChange} />
                    </Form.Group>
                    <Button type="submit">
                        Update
                    </Button>
                </div>
            </Form>
        </div>
    )
}
