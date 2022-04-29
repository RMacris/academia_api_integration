import React from "react";
import {Button} from "../styled-components/button/button.jsx";
import {Input} from "../styled-components/input/input.jsx";
import {Label} from "../styled-components/label/label.jsx"
import {SignUp} from "../../scripts/services/UserSign"
import { useState } from "react";


function Cadastro(){

    const [value, setValue] = useState({});
	function handleOnChange(e) {
		setValue({ ...value, [e.target.name]: e.target.value });
	}
    

   async function cadastro(e){
		e.preventDefault();
		
       let resultado = await SignUp(value)
		
       console.log(resultado);
    }


    return(

        <div>
            <form onSubmit={(e) => cadastro(e)}>

                <Label>
                    Digite seu nome:
                    <Input
                    type="text"
                    name = "nome"
                    onChange={handleOnChange}
                    />
                </Label>

                <Label>
                    Digite seu E-mail:
                    <Input
                    type="email"
                    name = "email"
                    onChange={handleOnChange}
                    />
                </Label>

                <Label>
                    Digite sua Senha:
                    <Input
                    type="password"
                    name = "senha"
                    onChange={handleOnChange}
                    />
                </Label>
                <div >
                    <Button type="submit" >Cadastrar</Button>												
                </div>
            </form>
        </div>

    )

}
export default Cadastro;
