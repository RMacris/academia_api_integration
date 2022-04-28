import React from "react";
import { useState } from "react";
import {Button} from "../styled-components/button/button.jsx";
import {Input} from "../styled-components/input/input.jsx";
import {Label} from "../styled-components/label/label.jsx"
import styles from "./login.module.css";
import {cadastro} from "../../scripts/services/api.js"

function Login() {
	
	const [value, setValue] = useState({});
	function handleOnChange(e) {
		setValue({ ...value, [e.target.name]: e.target.value });
	  }

	function login(e){
		e.preventDefault();

		cadastro.post("/usuario/login", value).then((response)=>{
			setValue(response.data)
		}).catch((e)=>{
					console.log(e);
		})	
	}

    return(
		<div className={styles.principal}>

			<div className={styles.propaganda}>
					 {/* <img className={styles.imagem} src="https://i.pinimg.com/originals/ae/bb/95/aebb950866dfc6c867f80a80cc27f370.jpg" alt="Casal Saúdavel"/>	 */}
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
							
								<Input type="password"
								placeholder = "Password"
								className={styles.input}
								onChange={handleOnChange}
								name = "senha"
								value={value.senha}
								required
								/>							
						<div className={styles.cadastro}>
						<a className={styles.tagA} href="#">Novo cadastro...</a>
						<a className={styles.tagA} href="#">Recuperar Cadastro...</a>
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
