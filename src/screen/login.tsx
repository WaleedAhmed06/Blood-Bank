import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CPButton from "../component/CPbutton";
import CPInput from "../component/CPinput";
import { fbLogin } from "../config/firebasemethods";
import { useDispatch } from "react-redux";
import { user } from "../config/redux/reducers/userslice";

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
  padding: '40px',
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
  margin: '10px 0 0 0 ',
  transition: 'all 0.1s ease',
  backgroundColor:"gray",
  width:"17%",
};

export default function Login() {
  const [model, setModel] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fillModel = (key: string, val: any) => {
    setModel({ ...model, [key]: val });
  };

  const loginUser = () => {

    fbLogin(model)
      .then((res:any) => {
        console.log(res);
        dispatch(user(res))
        navigate(`/`)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const goBackToSignUp = () => {
    navigate(`/signup`);
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <div style={{ padding: '20px' }}>
          <h1 style={headingStyle}>Login</h1>
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
        <div style={{ padding: '16px' }}>
          <CPButton onClick={loginUser} label="Login" customStyle={loginButtonStyle} />
          <p style={{ ...loginButtonStyle}} onClick={goBackToSignUp}>Sign Up</p>
        </div>
      </div>
    </div>
  );
}
