"use client"
import React, { ChangeEvent ,FormEvent,useState} from 'react'
import axios from 'axios'

export default function AddUser() {
    
    const initialState = {
        'name':'',
        'email':'',
        'phone':''
    }

    const [user,setUser] = useState(initialState)
    const [message, setMessage] = useState('');

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = {'sheet1':user};
        try {
            const response = await axios.post(' https://api.sheety.co/4db58997dd33ab7eaa3d621c48bdea06/contact/sheet1', data);
        
            console.log(response.data);
            setMessage('Data sucessfully posted')
            setUser(initialState)
            
          } catch (error) {
            console.error('Error:', error);
            setMessage('An error has occured')
          }

    }
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h2>Add User</h2>
        <input type="text" name='name' placeholder='Enter user name'
        value={user.name} onChange={handleChange}/>
        <input type="email" name='email' placeholder='Enter user email'
        value={user.email}  onChange={handleChange}/>
        <input type="phone" name='phone' placeholder='Enter user phone'
        value={user.phone}  onChange={handleChange}/>
        <button type='submit'>Send Info</button>
        <p>{message}</p>
        </form>
    </div>
  )
}
