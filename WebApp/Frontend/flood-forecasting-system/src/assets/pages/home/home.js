//styles
import "./styles.css";
import { Map } from "@esri/react-arcgis";
import React,{useState} from 'react';
import Warning from './warning';

export default function Home() {
  return (
    <div className="row homeWindow">
      <div className="col-8 map">
        <Map
          style={{}}
          viewProperties={{
            center: [80.1373, 7.9345],
            zoom: 10,
          }}
        />
      </div>
      <div className="col-4 right">
        <div className="warningBox">
          <div className="topic">
            <h5>FLOOD WARNINGS</h5>
          </div>
          <div className="body">
            <Warning/>
          </div>
        </div>

        {<Alert />}
      </div>
    </div>
  );
}

/*sms alert signup form*/
function Alert() {

   //states
   const [data, setData] = useState({

    Name : "" ,
    Number : ""

   });

  //update changes
   const handleChange = e => {
      const { name, value } = e.target;

      let numberCheck = /^\d*$/; //regex
      //validation
      if(name==="Number"){
        if(numberCheck.test(value)){
          document.getElementById('btn-reg').className += ' disabled';
          //document.getElementById('exampleInputEmail1').classList.remove("is-invalid");
          //update
          setData(prevState => ({
              ...prevState,
            [name]: value
            }));
        }else{
          console.log("invalid");
        }
      }else{
        setData(prevState => ({
              ...prevState,
            [name]: value
            }));
      }

      //console.log(name, number);
   }

  //submit - post
  const handleSubmit = (evt) => {

    evt.preventDefault();//stop refreshing 
    console.log(data);

/*
    axios.post(`${URL}api/auth/signin-user`,data)
    .then(function (response) {}).
    .catch(function (error) {});
*/
  }


  return (
    <div className="smsAlert">
      <h5>Register to get SMS alerts</h5>

      <form className="alertForm">
        <input type="text" onChange={handleChange} placeholder="Name" name="Name"/>
        <br />
        <input type="text" onChange={handleChange} placeholder="T.P. Number" name="Number"/>

        <br />
        <br />
        <button type="submit" id="btn-reg" onClick={handleSubmit}>REGISTER</button>
      </form>
    </div>
  );
}
