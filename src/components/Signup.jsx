import React , {useState}   from 'react'
import authService from '../appwrite/auth';
import { Link , useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import { Button, Input, Logo } from './index';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';


function Signup() {
    const navigate = useNavigate()
    const [error ,setError] = useState("")
    const dispatch = useDispatch()
    const {register , handleSubmit} = useForm()


    const create = async(data) =>{
        setError("")

        try {
            const userData = await authService.createAccount(data)
            
        } catch (error) {
            setError
        }
    }
  return (
    <div>Signup</div>
  )
}

export default Signup