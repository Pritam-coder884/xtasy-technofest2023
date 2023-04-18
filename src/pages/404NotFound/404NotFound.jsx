import { Link } from "react-router-dom";
import "./404NotFound.css";
const NotFound = () => {
    return (
     <>
      <div class="nf_section">
        <h1 class="nf_error">4<span style={{color:"#EA662F"}}>0</span>4</h1>
        <div class="nf_page">Ooops!!! The page you are looking for is not found</div>
        <Link class="nf_back-home" to="/">Back to home</Link>
    </div>
     </>    
    );
  };
  
  export default NotFound;