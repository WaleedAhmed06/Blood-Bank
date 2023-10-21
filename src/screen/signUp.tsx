import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CPButton from "../component/CPbutton";
import CPInput from "../component/CPinput";
import {  fbSignUp } from "../config/firebasemethods";
import CPSelect from "../component/CPselect";

const containerStyle = {
  background: 'linear-gradient(to right, #f1f1f1, #d4d4d4)',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const formStyle = {
  width: '500px',
  backgroundColor: '#ffffff',
  padding: '20px',
  borderRadius: '15px',
};

const headingStyle = {
  border: '2px solid #333',
  fontFamily: 'serif',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '2.5rem',
  fontWeight: '500',
  color: '#333',
};

const loginButtonStyle = {
  cursor: 'pointer',
  fontFamily: 'serif',
  color: 'white',
  padding: '5px 10px',
  margin: '0 0 0 0 ',
  transition: 'all 0.1s ease',
  backgroundColor:"gray",
  width:"9%",
};

export default function SignUp() {
  const [model, setModel] = useState<any>({});
  const navigate = useNavigate();
  const fillModel = (key: string, val: any) => {
    setModel({ ...model, [key]: val });
  };

  const handleSubmit  = () => {
    fbSignUp(model).then((res:any) => {
      console.log(...res)
      navigate(`/login`)
    }) .catch((err:any) =>{
      console.log(err)
    } )

  }

  const handleLogin = () => {
    navigate(`/login`)
  }

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <div style={{ padding: '20px' }}>
          <h1 style={headingStyle}>Sign Up</h1>
        </div>

        <div style={{ padding: '20px' }}>
          <CPInput
            value={model.name}
            onChange={(e: any) => fillModel("name", e.target.value)}
            label="Name"
            style={{ width: '100%' }}
          />
            </div>
            <div style={{ padding: '20px' }}>
          <CPInput
            value={model.email}
            onChange={(e: any) => fillModel("email", e.target.value)}
            label="Email"
            style={{ width: '100%' }}
          />
            </div>
        <div style={{ padding: '20px' }}>
          <CPInput
            value={model.password}
            onChange={(e: any) => fillModel("password", e.target.value)}
            label="Password"
            type="password"
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ padding: '20px' }}>
        <CPSelect
              label="Blood Group"
              onChange={(e:any) => fillModel("bloodG", e.target.value)}
              options={[
                {       
                 displayName: "none"
               },
               {
                 value: "O",
                 displayName: "O",
               },
               {
                 value: "A",
                 displayName: "A",
               },
               {
                 value: "B",
                 displayName: "B",
               },
               {
                 value: "AB",
                 displayName: "AB",
               },
             ]}
            />
        </div>
        <div style={{ padding: '16px' }}>
          <CPButton onClick={handleSubmit} label="Sign Up" customStyle={loginButtonStyle} />
          <p style={{ ...loginButtonStyle}} onClick={handleLogin}>Login</p>
        </div>
      </div>
    </div>
  );
}
