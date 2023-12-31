import React, {useState} from 'react';
import './SignupPage.css';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState(''); //input
    const [password, setPassword] = useState('');   //input
    const [result, setResult] = useState(''); //backend
     const [message, setMessage] = useState(''); //input

/*error is the boolean value we use as flag to display either an error response or success response
submitted is the boolean value we use to indicate if input was valid. It only works for empty string responses for now
these are also stateful values with setter methods
*/
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

const handleUsername = (e) => {
	setUsername(e.target.value);
	setSubmitted(false);
};


const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

    const goToDashboard = (username) => {
        navigate('/resource', {state: {username}})
    // navigate('/dashboard', {state: {username}}); // Navigates to the '/signup' route
  };
const handleSubmit = (e) => {
	e.preventDefault();
	if ((username === '')||(password==='') ) {
	    setMessage("Enter Valid Username and Password")
        openPopup()
	} else {
	setSubmitted(true);
  var fetchURL="/signup/" + username+' '+password
  fetch(fetchURL)

  .then((response) => response.text())
  //.then((data) => console.log(data))
  .then(function(data){
    //data=JSON.parse(data);
    //   if(typeof data ==='string'){
    //       console.log("non json data", data);
    //   }else {
      data=JSON.parse(data);

          if (data.code === 200) {
              // setResult(data.result)
              // setError(false);
              goToDashboard(username);
          } else {
              // setError(true);
              setMessage(data.error)
              openPopup()
              // setResult("response code: " + data.code + " and message received: " + data.error);
          }
      //}
  })
  .catch(function (error){
      // setError(true);
      // setResult("error: "+error.message);
  });

	}
};

/* We use this method when we get a 200 response


*/
const successMessage = () => {
	return (
    <>
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<p >Response from backend: "{result}"</p>
	</div>
  </>
	);
};
/* we use this when we get a 404


*/
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<p >Please enter a new username</p>
	</div>
	);
};


// function LoginPage()



    return (
        <div className="login-container">
            <div className="photo-section">
                {/* You can add an <img> tag here for the photo */}
            </div>
            <div className="form-section">
                <h1>Welcome</h1>
                <p>Create an account</p>

                <div className="input-group">
                    <label>Username</label>
                    <input type="text" id = "username" onChange={handleUsername} placeholder="Enter your username" />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input type="password" id = "password" onChange={handlePassword} placeholder="Enter your password" />
                </div>
                <div className="button1-group">
                    <button onClick={handleSubmit}>Sign Up</button>
                </div>
                {showPopup && (
                    <div className="popup">
                      <div className="popup-content">
                        <span className="close" onClick={closePopup}>
                          &times;
                        </span>
                        <p>{message}</p>
                      </div>
                    </div>
                  )}
            </div>
        </div>
    );
}

