import React from 'react';
import './Login.css';


class LoginForm extends React.Component {
	render() {
		return (
				<div className="login">
					<div className="login_official_icon">
						<img id = "icon" src="https://pbs.twimg.com/profile_images/975778338412335104/adGFFEyx_400x400.jpg" />
					</div>
					<div className="login_wrap">
						<br />
						<br />
						<br />
						<br />
						<div className="login_field">
							<div className="login_field_user">
								<input className="login_icon login_icon_username"  type="text" placeholder="Username" />
							</div>
							<div className="login_field_password">
								<input className="login_icon login_icon_password"  type="text" placeholder="Password" />
							</div>
							<div className="login_field__submit">
								<input type='submit' value='Log In' />
								<div className="login_field__forgot">
									<a href='#'>Forgotten password?</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
	}
}


export default LoginForm