import { useState } from "react";
import FormInput from '../../component/Form/form';
import RegImg from "../../component/ImgReg/reg_img";
import './reg.style.scss'

const formDefaultInput = {
    displayName: "",
    email: "",
    number: "",
    whtsapp: "",
    reg_number:""
};

const Reg_OUTR = () => {


    const [input, setInput] = useState(formDefaultInput);
    const { displayName, email,number,whtsapp,reg_number } = input;
    const [numberError, setNumberError] = useState("");
    const [regError, setRegError]=("");


    const formHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    };

    const submitHandler = async (e) => {
    e.preventDefault();

    const phone = new RegExp(/^[0-9\b]+$/);
    if (!phone.test(number)) {
        setNumberError("Enter only numbers");
    } else if (number.length !== 10) {
        setNumberError("Please enter valid phone number");
    } else {
        setNumberError("");
    }


    if (!phone.test(whtsapp)) {
        setNumberError("Enter only numbers");
    } else if (whtsapp.length !== 10) {
        setNumberError("Please enter valid phone number");
    } else {
        setNumberError("");
    }
};

    return (
        <div className="regpage">
            <div className='left_section'>
                <div className="head">
                    <h4>RETRO CRAZE</h4>
                    <h1>LIGHTS</h1>
                    <h1>CAMERA</h1>
                    <h1 style={{color:"#EA662F"}}>ACTION</h1>
                </div>
                <div className="rimg">
                    <RegImg/>
                </div>
                <div className="subscript">
                Get ready to enjoy  the unforgetable retro
                </div>
            </div>
            <div className='right_section'>
                <div className="r_head">
                    <h2>YOU ARE ALMOST THERE!!</h2>
                </div>
                <form onSubmit={(e) => submitHandler(e)}>
                    <FormInput
                    placeholder="Name"
                    type="text"
                    required
                    onChange={(e) => {
                    formHandler(e);
                    }}
                    name="displayName"
                    value={displayName}
                />

                    <FormInput
                    placeholder="Email Id"
                    type="email"
                    required
                    onChange={(e) => {
                    formHandler(e);
                    }}
                    name="email"
                    value={email}
                />


                    <FormInput
                    placeholder="Phone Number"
                    type="text"
                    required
                    onChange={(e) => {
                    formHandler(e);
                    }}
                    name="number"
                    value={number}
                    error={numberError}
                />
                <FormInput
                    placeholder="Whatsapp Number"
                    type="text"
                    required
                    onChange={(e) => {
                    formHandler(e);
                    }}
                    name="number"
                    value={whtsapp}
                    error={numberError}
                />
                    <FormInput
                    placeholder="Registration Number"
                    type="text"
                    required
                    onChange={(e) => {
                    formHandler(e);
                    }}
                    name="reg_number"
                    value={reg_number}
                    error={regError}
                />
                <button className="submitbtn" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Reg_OUTR;
