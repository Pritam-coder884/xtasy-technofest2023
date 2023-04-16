import React from 'react'
import "./Profile.scss"

const Profile = () => {
  return (
    <div  className='profile'>
        <div className="profileCard">
            <div className='profileImgContainer'>
            <div className='profileImg'>
            </div>
            </div>
            <div className='userDetail'>
                <div className='userName'>
                    NAME COMES HERE
                </div>
                <div className='userEmailId'>
                    emailid@mail.com
                </div>
                <div className='detailBox'>
                    <div className='detail'>
                        <div className='detailHeading'>phone number</div>
                        <div>1234567890</div>
                    </div>
                    <div className='detail'>
                        <div className='detailHeading'>registration number</div>
                        <div>1234567890</div>
                    </div>
                    <div className='detail'>
                        <div className='detailHeading xtasyid'>xtasy id</div>
                        <div className='xtasyid'>3243fssd</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile