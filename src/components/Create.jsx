import React, { useState } from 'react'
import Axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

function Create() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!name || !userName || !email) {
            alert("All fields are required!")
            return
        }
        Axios.post('https://68777638dba809d901ef78ea.mockapi.io/curd', {name:name, username:userName, email:email})
        .then(()=>{
                navigate('/')
        })

    }
  return (
    <div className='container col-12  d-flex flex-column justify-content-center align-items-center' style={{height: '100vh'}}>
        <div>
            <Link to='/' className='btn btn-primary mb-3'>Read</Link>
        </div>
        <div className='form-group border border-2 p-3 m-3 col-6 '>
            <h1 className='bg-primary text-center p-1'>Create </h1>
            <form onSubmit={handleSubmit} >
                <div className='form-group d-flex flex-column mb-3'>
                    <label>Enter Name:</label>
                    <input 
                    type="text"
                    value={name}
                    onChange={(e)=> setName(e.target.value)} 
                    required
                    
                    />
                </div>
                <div className='form-group d-flex flex-column mb-3'>
                    <label>Enter userName:</label>
                    <input
                    type="text"
                    value={userName}
                    onChange={(e)=> setUserName(e.target.value)}
                    required
                    />
                </div>
                <div className='form-group d-flex flex-column mb-3'>
                    <label>Enter Email:</label>
                    <input 
                    type="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required

                    />
                </div>
                <button className='btn btn-primary col-6' >Submit</button>

            </form>
        </div>
      
    </div>
  )
}

export default Create
