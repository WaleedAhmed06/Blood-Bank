import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import { useEffect, useState } from 'react';
import { fbGet } from '../config/firebasemethods';
import CPButton from '../component/CPbutton';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [data , setData] = useState<any>([]);
  const navigate = useNavigate();
  const getData = () => {
    fbGet("users")
    .then((res : any) => {
      console.log(res);
      setData([...res])
    })
    .catch((err) =>{
     console.log(err)
    });
  };
useEffect(() => {
  getData();
},[])
const acceptor = () => {
  navigate("/acceptor")
}
const donor = () => {
  navigate("/donor")
}
  return (
    <div>
      <div className='container' >
        <h1>Blood Bank Application</h1>
      </div>
      <CPButton style={{color:"white" , backgroundColor:"black",margin:"5px" }} label="Blood Need" onClick={acceptor}/>
      <CPButton style={{color:"white" , backgroundColor:"black"}} label="Blood Donate" onClick={donor}/>
        <div className='cards'>
          {data.map((x:any) =>
          <div className='cardin'>
            <p><BloodtypeIcon/></p>
            <h5>Name: {x.name}</h5>
            <p>Blood Group: {x.bloodG}</p>
          </div>
          )}
        </div>
    </div>
  )
}
