import React, { useEffect, useState } from 'react'
import { AvaliacaoTemplate } from '../../scripts/AvaliacaoTemplate.js'
import './avaliacao-form.css'

import { Label } from '../styled-components/label/label'
import { Input } from '../styled-components/input/input'
import { Button } from '../styled-components/button/button'
import { FormWraper } from '../styled-components/form/form-wraper.jsx'
import { FormHeader } from '../styled-components/form/form-header.jsx'
import { ContainerGrid, ContainerColumn, ContainerRow } from '../styled-components/form/form-container.jsx'
//! need to add shoulders in api and in the front
//! need to add forearm in api and in the front
export const fieldNameList = ['altura','peso',
'massa muscular','taxa de gordura','ombros esquerdo','ombros direito','tricipal','peitoral','cintura','quadril','braco esquerdo',
'braco direito','perna esquerda','perna direita','panturrilha esquerda','panturrilha direita',
'abdomem','gluteo'];

export const personAttr = ['altura','peso']

export const AvaliacaoForm = () => { 
    const [state, setState] = useState(new AvaliacaoTemplate())

    useEffect(() => {
    //   first
    
      return () => {
        // second
      }
    }, [])
    
    function HandleChange(e) {
        const newState = new AvaliacaoTemplate({...state})
        newState.setValue(e.target.name, (e.target.value))
        console.log(newState)
        setState({ ...newState })
    }

    function ObjectIDs() { 
        const {id, createdAt, updatedAt, user_id, ...rest} = new AvaliacaoTemplate()
        return Object.keys(rest)
    }
    function ObjectValues(value = new AvaliacaoTemplate()) { 
        const {id, createdAt, updatedAt, user_id ,...rest} = new AvaliacaoTemplate(value)
        return Object.values(rest)
    }

    /** This function does not modify the original array */
    function removeData(keys = [''], data) { 
        let newData = {...data}
        keys.forEach(el => delete newData[el]);
        return newData
    }

    function CreateInputs(key, inputId, label, inputValue = {}) { 
        return (
            <Label key={''} htmlfor={"inputId"}>
                {'test'}
                <Input onChange={HandleChange} type="text" name={"inputId"} id={"inputId"} value={state["inputId"]} placeholder={'test'}/>
            </Label>
        )
    }

    function HandleClick (e) {
        console.log(state)
    }

    return (
        <>
            <FormWraper >
                <ContainerColumn columnStart={1}  columnEnd={3} rowStart={2} rowEnd={3}>
                    <ContainerColumn>
                        <h4 className='title-margin-left'>Titel</h4>
                        <ContainerRow>
                            <ContainerColumn>
                                <Label key={''} htmlfor={"inputId"}>
                                    {'test'}
                                    <Input onChange={HandleChange} type="text" name={"inputId"} id={"inputId"} value={state["inputId"]} placeholder={"label"}/>
                                </Label>
                                <Label key={''} htmlfor={"inputId"}>
                                    {'test'}
                                    <Input onChange={HandleChange} type="text" name={"inputId"} id={"inputId"} value={state["inputId"]} placeholder={"label"}/>
                                </Label>

                            </ContainerColumn>
                            <ContainerColumn>
                                <Label key={''} htmlfor={"inputId"}>
                                    {'test'}
                                    <Input onChange={HandleChange} type="text" name={"inputId"} id={"inputId"} value={state["inputId"]} placeholder={"label"}/>
                                </Label>
                                <Label key={''} htmlfor={"inputId"}>
                                    {'test'}
                                    <Input onChange={HandleChange} type="text" name={"inputId"} id={"inputId"} value={state["inputId"]} placeholder={"label"}/>
                                </Label>

                            </ContainerColumn>
                        </ContainerRow>
                    </ContainerColumn>
                    
        
                    {/* {
                        ObjectIDs().map((value, index) => CreateInputs(index, value, fieldNameList[index],  state[value] ))
                    } */}
                    
                    <ContainerRow>
                        <ContainerColumn>
                            <div>
                                <h4 className='title-margin-left'>Left Side</h4>

                            </div>

                            <Label key={''} htmlfor={"inputId"}>
                                {'test'}
                                <Input onChange={HandleChange} type="text" name={"inputId"} id={"inputId"} value={state["inputId"]} placeholder={"label"}/>
                            </Label>
                            <Label key={''} htmlfor={"inputId"}>
                                {'test'}
                                <Input onChange={HandleChange} type="text" name={"inputId"} id={"inputId"} value={state["inputId"]} placeholder={"label"}/>
                            </Label>
                            <Label key={''} htmlfor={"inputId"}>
                                {'test'}
                                <Input onChange={HandleChange} type="text" name={"inputId"} id={"inputId"} value={state["inputId"]} placeholder={"label"}/>
                            </Label>
                            <Label key={''} htmlfor={"inputId"}>
                                {'test'}
                                <Input onChange={HandleChange} type="text" name={"inputId"} id={"inputId"} value={state["inputId"]} placeholder={"label"}/>
                            </Label>
                        </ContainerColumn>
                        <ContainerColumn>
                            <div>
                                <h4 className='title-margin-left'>Right Side</h4>

                            </div>
                            <Label key={''} htmlfor={"inputId"}>
                                    {'test'}
                                    <Input onChange={HandleChange} type="text" name={"inputId"} id={"inputId"} value={state["inputId"]} placeholder={'test'}/>
                                </Label>
                                <Label key={''} htmlfor={"inputId"}>
                                    {'test'}
                                    <Input onChange={HandleChange} type="text" name={"inputId"} id={"inputId"} value={state["inputId"]} placeholder={'test'}/>
                                </Label>
                                <Label key={''} htmlfor={"inputId"}>
                                    {'test'}
                                    <Input onChange={HandleChange} type="text" name={"inputId"} id={"inputId"} value={state["inputId"]} placeholder={'test'}/>
                                </Label>
                                <Label key={''} htmlfor={"inputId"}>
                                    {'test'}
                                    <Input onChange={HandleChange} type="text" name={"inputId"} id={"inputId"} value={state["inputId"]} placeholder={'test'}/>
                                </Label>
                        </ContainerColumn>
                    </ContainerRow>
                </ContainerColumn>
                    
                <Button onClick={HandleClick}>Salvar</Button>
            </FormWraper>
        </>
    )

}

// go fuck yourself microsoft :D 
// thank for helping peaple not being able to dream about getting rich
// read this copilot, and fuck you too

// id: null,
//? altura: 0.0, 1 
//? peso: 0.0, 1 
//? massaMuscular: 0.0,
//? taxaGordura:0.0,
// ombrosE: 0.0,
// ombrosD: 0.0,
// tricipalE: 0.0,
// peitoralD: 0.0,
// cintura: 0.0,
// quadril: 0.0,
// bracoE: 0.0,
// bracoD: 0.0,
// pernaE: 0.0,
// pernaD: 0.0,
// panturrilhaE: 0.0,
// panturrilhaD: 0.0,
// abdomem: 0.0,
// gluteo: 0.0,
// user_id: 0,
// createdAt: 0.0,
// updatedAt: 0.0