import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Button} from "../styled-components/button/button.jsx";
import {Input} from "../styled-components/input/input.jsx";
import {Label} from "../styled-components/label/label.jsx"
import styles from "./login.module.css";
import {SignIn} from "../../scripts/services/UserSign.js"
import { useAuthentication, useLoginData } from '../../Contexts/LoginContext'
import { SetAuthorizationLocalStorage } from "../../scripts/utils/authenticationHelper.js";




export function Login() {
	const navigate = useNavigate();
	const auth = useAuthentication()
	const user = useLoginData()
	const [value, setValue] = useState({});
	
	function handleOnChange(e) {
		setValue({ ...value, [e.target.name]: e.target.value });
	  }

	async function authenticate(event){
		event.preventDefault();
		let resultado = await SignIn(value)
		if(resultado.data.data.length === 1){
			auth.setAuth(true,resultado.data.data[0])
			navigate("/")
		}
	}
    return(
		<div className={styles.principal}>

				<div className={styles.propaganda}>
					<h2 className={styles.text}>Foco, "Força" e Fé</h2>
				</div>

				<div className={styles.login}>

					<h1>Fazer Login!</h1>

					<form className={styles.form} onSubmit={(event) => authenticate(event)}>
							
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
						<Link className={styles.tagA} to="/signup">Cadastro...</Link>
						<Link className={styles.tagA} to="">Recuperar Conta...</Link>
						</div>
							
						</Label>
						
						<div className={styles.rodaPe}>
							<Button className={styles.botao}>Entrar</Button>												
						</div>			
					</form>
				</div>
		</div>
    );
}

