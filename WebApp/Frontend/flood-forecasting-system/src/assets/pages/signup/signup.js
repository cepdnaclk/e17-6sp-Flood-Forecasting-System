import "./styles.css"

export default function Signup(){
	
	const handleSubmit = e => {

	}

	const handleChange = e => {
		
	}

	return(
		<div id='signup-form'>
     
      	<form onSubmit={handleSubmit} id='l-form'>
        	<div className="text-center"> 
          		<h1>
              		Sign Up
          		</h1>
        	</div>

        	<div className="mb-3">
          		<label htmlFor="name" className="form-label">Full Name</label>
          		<input type="text" className="form-control" id="name" name="name" onChange={handleChange} required></input>
        	</div>
        
        	<div className="mb-3">
          		<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          		<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handleChange} required></input>
        	</div>

        	<div className="mb-3">
          		<label htmlFor="mobile" className="form-label">Mobile</label>
          		<input type="phone" className="form-control" id="mobile" name="mobile" onChange={handleChange} required></input>
        	</div>
  
 	        <div className="mb-3" id="loginPW-field">
        	  	<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
     	    	<input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={handleChange} required></input>
        	</div>

        	<div className="mb-3" id="loginPW-field">
        	  	<label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
     	    	<input type="password" className="form-control" id="exampleInputPassword2" name="password" onChange={handleChange} required></input>
        	</div>
        
        	<div className="d-grid gap-2">
          		<button type="submit" className="btn btn-block" id="button-signup">Signup</button>
        	</div>

      </form> 
      </div>
	);
}