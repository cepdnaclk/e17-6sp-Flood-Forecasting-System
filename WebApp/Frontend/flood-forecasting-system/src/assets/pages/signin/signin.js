import "./styles.css";

export default function Signin(){
	
	const handleSubmit = e => {

	}

	const handleChange = e => {
		
	}

	return(
		<div id='login-form'>
     
      	<form onSubmit={handleSubmit} id='l-form'>
        	<div className="text-center"> 
          		<h1>
              		Sign in
          		</h1>
        	</div>
        
        	<div className="mb-3">
          		<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          		<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handleChange} required></input>
        	</div>
  
 	        <div className="mb-3" id="loginPW-field">
        	  	<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
     	    	<input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={handleChange} required></input>
        	</div>
        
        	<div className="d-grid gap-2">
          		<button type="submit" className="btn btn-block" id="button-login">Signin</button>
        	</div>

      </form> 
      </div>
	);
}