import React from 'react'
import { Link } from 'react-router-dom'

const Logout = () => {
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div>
            <Link to="/"><h1>Home Page</h1></Link>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Logout