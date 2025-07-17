import { useEffect, useState } from 'react'
import './App.css'
import  Axios  from 'axios'
import { Link } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const [apiData, setApiData] = useState([])

  const getData = () =>{
    Axios.get('https://68777638dba809d901ef78ea.mockapi.io/curd')
    .then((response)=> {
      setApiData(response.data)
      setLoading(false)  
    })
    .catch((error)=>{
      console.error("Something went wrong!!", error);
      setLoading(false);
    })
  }
  function handleDelete(id){
    Axios.delete(`https://68777638dba809d901ef78ea.mockapi.io/curd/${id}`)
    .then(()=>{
      getData();
    })
  }
  function setData(id, name, email, userName) {
    localStorage.setItem('id', id)
    localStorage.setItem('name', name)
    localStorage.setItem('email', email)
    localStorage.setItem('userName', userName)
  }
  useEffect(()=>{
    getData()
  },[])

  
  return (
    <>
    <div className='container mt-5'>
      <div>
            <Link to='/create' className='btn btn-primary mb-3'>Create</Link>
        </div>
        <table className='table table-striped table-bordered table-dark table-hover'>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>update</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {
              apiData.map((item) =>{
                return (
                  <tr key={item.id} >
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>
                      <Link to="/update">
                        <button className='btn btn-success' onClick={()=>setData(item.id, item.name, item.email, item.username)}>Edit</button>
                      </Link>  
                    </td>
                    <td><button className='btn btn-danger' onClick={()=>{if(window.confirm('Are you want to delete?')) {handleDelete(item.id)}}}>Delete</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
      
    </>
  )
}

export default App
