import React, {useEffect, useState  } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'
function Update() {
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('name'))
        setEmail(localStorage.getItem('email'))
        setUserName(localStorage.getItem('userName'))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.put(`https://68777638dba809d901ef78ea.mockapi.io/curd/${id}`, {name:name, username:userName, email:email})
        .then(() => {
            navigate('/')
        })
    }
  return (
    <div>
         <div className='container col-12  d-flex flex-column justify-content-center align-items-center' style={{height: '100vh'}}>
            <div>
            <Link to='/' className='btn btn-primary mb-3'>Read</Link>
            </div>
            <div className='form-group border border-2 p-3 m-3 col-6 '>
                <h1 className='bg-success p-1 text-center'>update</h1>
                <form onSubmit={handleSubmit} >
                    <div className='form-group d-flex flex-column mb-3'>
                        <label>Enter Name:</label>
                        <input 
                        type="text"
                        value={name}
                        onChange={(e)=> setName(e.target.value)} 
                        />
                    </div>
                    <div className='form-group d-flex flex-column mb-3'>
                        <label>Enter userName:</label>
                        <input
                        type="text"
                        value={userName}
                        onChange={(e)=> setUserName(e.target.value)}
                        />
                    </div>
                    <div className='form-group d-flex flex-column mb-3'>
                        <label>Enter Email:</label>
                        <input 
                        type="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)} 
                        />
                    </div>
                    <button className='btn btn-success col-6' disabled={!name || !userName || !email}>Update</button>

                </form>
            </div>
      
    </div>
      
    </div>
  )
}

export default Update
