import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Button} from "../styled-components/button/button.jsx";
import {Input} from "../styled-components/input/input.jsx";
import {Label} from "../styled-components/label/label.jsx"
import styles from "./login.module.css";
import {SignIn} from "../../scripts/services/UserSign.js"
import { useAuthentication } from '../../Contexts/LoginContext'






function Login() {


	const navigate = useNavigate();
	const auth = useAuthentication()

	
	const [value, setValue] = useState({});
	function handleOnChange(e) {
		setValue({ ...value, [e.target.name]: e.target.value });
	  }

	async function login(e){
		e.preventDefault();
	

		let resultado = await SignIn(value)

		if(resultado.data.data.length === 1){

			navigate("/avalicao")
		}

		console.log(resultado.data.data.length);

	}
    return(
		<div className={styles.principal}>

				<div className={styles.propaganda}>
					<h2>Hello World!</h2>
				</div>

				<div className={styles.login}>

					<h1>Fazer Login!</h1>

					<form className={styles.form} onSubmit={(e) => login(e)}>
							
						<Label className={[styles.label, styles.email ].join(' ')}>
							Digite seu E-mail:																				
							<Input type="email" 														
							placeholder = "E-mail"
							className={styles.input}
							onChange={handleOnChange}
							name = "email"
							value={value.email}
							required
							/>														
						</Label>
							
						<Label className={[styles.label, styles.senha ].join(' ')}>
								Digite sua senha: 
							
								<Input type="text"
								placeholder = "Password"
								className={styles.input}
								onChange={handleOnChange}
								name = "senha"
								value={value.senha}
								required
								/>							
						<div className={styles.cadastro}>
						<Link className={styles.tagA} to="/Cadastro">Novo Cadastro...</Link>
						<Link className={styles.tagA} to="">Recuperar Senha...</Link>
						</div>
							
						</Label>
						
						<div className={styles.rodaPe}>
							<Button type="submit" className={styles.botao}>Entrar</Button>												
						</div>			
					</form>
				</div>
		</div>
    );
}

export default Login;
