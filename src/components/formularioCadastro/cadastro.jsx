import React from "react";
import {Button} from "../styled-components/button/button.jsx";
import {Input} from "../styled-components/input/input.jsx";
import {Label} from "../styled-components/label/label.jsx"

function cadastroUser(){

    return(

        <div>
            <form action="">

                <Label>
                    Digite seu nome:
                    <Input
                    type="text"
                    />

                </Label>

                <Label>
                    Digite seu E-mail:
                    <Input
                    type="email"
                    />

                </Label>

                <Label>
                    Digite sua Senha:
                    <Input
                    type="password"
                    />

                </Label>

                <div >
                    <Button type="submit" >Cadastrar</Button>												
                </div>

            </form>


        </div>

    )

}

export default cadastroUser;