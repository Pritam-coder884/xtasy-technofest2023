import React,{useEffect,useState} from 'react'
import "./ProfileTop.scss"
import { useSelector } from "react-redux";
import axios from "axios";

const ProfileTop = () => {
    
 const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 const [phoneno,setPhoneno]=useState("");
 const [regdno,setRegdno]=useState("");
 const [xtasyid,setXtasyid]=useState("");
 

 const {accessToken} = useSelector((state)=>state.custom)

 const handleGetData=async()=>{
    try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/user/details`,
          {
            headers : {
                Authorization : `Bearer ${accessToken}`
            }
          },
        );
        const getData=response.data.data;
        console.log(getData);
        setName(getData.name);
        setEmail(getData.firebaseUid);
        setPhoneno(getData.phoneNumber);
        setRegdno(getData.registrationNumber);
        
        const getId=getData._id.substring(getData._id.length-7)
        setXtasyid(getId);

      } catch (err) {
        throw new Error(err.message);
      }
 }
 useEffect(()=>{
    handleGetData();
 },[]);

  return (
    <div className='profileContainer'>
    <div  className='profile'>
        <div className="profileCard">
            <div className='profileImgContainer'>
            <div className='profileImg'>
            </div>
            </div>
            <div className='userDetail'>
                <div className='userName'>
                   {name}
                </div>
                <div className='userEmailId'>
                    {email}
                </div>
                <div className='detailBox'>
                    <div className='detail'>
                        <div className='detailHeading'>phone number</div>
                        <div>{phoneno}</div>
                    </div>
                    <div className='detail'>
                        <div className='detailHeading'>registration number</div>
                        <div>{regdno}</div>
                    </div>
                    <div className='detail'>
                        <div className='detailHeading xtasyid'>xtasy id</div>
                        <div className='xtasyid'>x{xtasyid}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      <div className='regEvents'>
      <div className='eventHeading'>REGISTERED EVENTS</div>

  </div>
  </div>
  )
}

export default ProfileTop