import React,{useEffect,useState} from 'react'
import "./ProfileTop.scss"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ClipLoader } from 'react-spinners';
import { setUserLoadingFalse,setUserLoadingTrue } from '../../Redux/customSlice';
import { useNavigate } from 'react-router-dom';

const ProfileTop = ({setEvents}) => {
  const override = {
    display: "block",
    margin: "0 auto",
    width: "50px",
    height: "50px",
    border: "3px solid #EA662F",
    borderRadius: "50%",
    borderTopColor: "#fff",
};
    
 const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 const [phoneno,setPhoneno]=useState("");
 const [regdno,setRegdno]=useState("");
 const [xtasyid,setXtasyid]=useState("");

 const nav = useNavigate();
 

 let {accessToken} = useSelector((state)=>state.custom)
 const isProfileLoading = useSelector((state) => state.custom.isProfileLoading)
 const dispatch = useDispatch();

 useEffect(() => {
  if (phoneno) {
    dispatch(setUserLoadingFalse())
  } else {
    dispatch(setUserLoadingTrue())
  }
}, [phoneno])

const handleLogout = () => {
  const newToken = localStorage.getItem('token')
  if (newToken) {
    localStorage.removeItem('token');
    nav("/");
  }
}


 const handleGetData=async()=>{
    try {

      if(!accessToken){
        accessToken = localStorage.getItem("token")
      }
        const response = await axios.get(
          `https://aryashreyas.me/api/user/details`,
          { 
            headers : {
                Authorization : `Bearer ${accessToken}`
            }
          },
        );
        const getData=response.data.data;
          console.log(getData)
        const eventData = await axios.get(`https://aryashreyas.me/api/event/registeredEvents`,{
          headers : {
            Authorization : `Bearer ${accessToken}`
          }
        })
        setEvents(eventData.data.data)
        // console.log(eventData.data.data)
        setName(getData.name);
        setEmail(getData.email);
        setPhoneno(getData.phoneNumber);
        setRegdno(getData.registrationNumber);
        
        const getId=getData?._id.substring(getData._id.length-7)
        
        if(getId)setXtasyid(getId);

      } catch (err) {
        throw new Error(err.message);
      }
 }
 useEffect(()=>{
    handleGetData();
 },[]);

 return (
  <div className='profileContainer'>
    {isProfileLoading && <ClipLoader
      color={'#EA662F'}
      loading={isProfileLoading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />}
    {!isProfileLoading && <>
    <div className='profile'>
      <div className="profileCard">
        <div className='profileImgContainer'>
          <div className='profileImg'>
          </div>
          <div  class="logout123"style={{ display: "flex", justifyContent: "center", paddingTop: "2rem" }}>
            <button onClick={handleLogout} style={{ marginBottom: "0rem" }}>Logout</button>
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
    </>}
  </div>
)

}

export default ProfileTop