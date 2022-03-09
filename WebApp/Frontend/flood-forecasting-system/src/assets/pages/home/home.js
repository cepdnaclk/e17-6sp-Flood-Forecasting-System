//styles
import './styles.css';

export default function Home(){
	return(
		<div className="row homeWindow">
			<div className="col-8 map">
			</div>
			<div className="col-4 right">
				<div className="warningBox">
					<div className="topic">
						<h5>FLOOD WARNINGS</h5>
					</div>
					<div className="body">
					</div>
				</div>
				
				{<Alert/>}

			</div>
		</div>
	);
}

/*sms alert signup form*/
function Alert(){
	return(
		<div className="smsAlert">
			<h5>Register to get SMS alerts</h5>

			<form className="alertForm">
          		<input type="text" placeholder="Name"/>
          		<br/>
          		<input type="text" placeholder="T.P. Number"/>
          		
          		<br/><br/>
        		<button type="submit">REGISTER</button>
      		</form>
		</div>
	);
}