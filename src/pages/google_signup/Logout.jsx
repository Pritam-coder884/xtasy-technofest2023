import React from 'react'
import "../signup/signup.style.scss"

const Logout = () => {
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div>
            <h1>Home Page</h1>
            <button className='submitbtn' onClick={logout}>Logout</button>
        </div>
    );
}

export default Logout