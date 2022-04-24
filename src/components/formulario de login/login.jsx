import React from "react";
import {Button} from "../styled-components/button/button.jsx";
import {Input} from "../styled-components/input/input.jsx";
import {Label} from "../styled-components/label/label.jsx"
import styles from "./login.module.css";

function Login() {
    
    return(

		<div className={styles.principal}>

			<div className={styles.propagada}>

			<img className={styles.imagem} src="https://i.pinimg.com/originals/ae/bb/95/aebb950866dfc6c867f80a80cc27f370.jpg" alt="Casal Saúdavel"/>		

			</div>

			<form className={styles.form}>
				<div className={styles.home}>
					<Label >
						<div className={styles.corpo}>
							<p>Digite seu e-mail: </p>
							<Input type="email" className={styles.input} placeholder = "E-mail"/>
							<p >Digite sua senha: </p>
							<Input type="password" className={styles.input} placeholder = "Password"/>
						</div>
						<div className={styles.rodaPe}>
							<Button type="submit" className={styles.botao}>Entrar</Button>
							<Button type="submit" className={styles.botao}>Esqueci Senha</Button>
							<Button type="submit" className={styles.botao}>Criar conta</Button>
						</div>			
					</Label>
				</div>
			</form>

			<div className={styles.propagada}>

			<img className={styles.imagem} src="https://i.pinimg.com/originals/ae/bb/95/aebb950866dfc6c867f80a80cc27f370.jpg" alt="Casal Saúdavel"/>		
			
			</div>

		</div>
    );
}

export default Login;
