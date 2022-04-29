import React, { useEffect, useState } from 'react'
import { AvaliacaoTemplate } from '../../scripts/ClassTemplate/AvaliacaoTemplate'
import { PostAvaliacao, GetLastUserAvaliacao, UpdateAvaliacaoByID } from '../../scripts/services/avaliacaoCRUD'
import './avaliacao-form.css'


import { Label } from '../styled-components/label/label'
import { Input } from '../styled-components/input/input'
import { Button } from '../styled-components/button/button'
import { FormWraper } from '../styled-components/form/form-wraper.jsx'
import { ContainerColumn, ContainerRow } from '../styled-components/form/form-container.jsx'

import { useLoginData, useCurrentAval } from '../../Contexts/LoginContext'

export const AvaliacaoForm = ({ children }) => { 
    const [state, setState] = useState(new AvaliacaoTemplate())
    const userData = useLoginData()
    const currentAval = useCurrentAval()
    
    useEffect(() => { 
        // LoadLastUserAvalOnStart()
        console.warn(currentAval)
        setState(currentAval.aval)
    },[currentAval.aval])


    function SetNewAval(){
         setState()
    }
    // async function LoadLastUserAvalOnStart() {
    //     const userId = userData.user.id
    //     const result = await GetLastUserAvaliacao(userId)
    //     if(result.data.data.length === 0) {
    //         currentAval.setCurrentAval(new AvaliacaoTemplate())
    //         return 
    //     }
    //     currentAval.setCurrentAval(result.data.data[0])
    // }
    function HandleChange(e) {
        const newState = new AvaliacaoTemplate({...state})
        newState.setValue(e.target.name, (e.target.value))
        console.log(newState)
        setState({ ...newState })
    }
    async function HandleUpdate(e) {
        const data = {...state}
        const final = new AvaliacaoTemplate(data)
        final['user_id'] = userData.user.id
        const result = await UpdateAvaliacao(data.id,final)
        setState(result.data.data[0])
        alert("Atualizado Com Sucesso")

    }
        
    function UpdateAvaliacao(id, data) {
        return UpdateAvaliacaoByID(id,data)
    }
    function SubmitAvaliacao(data) { 
        return PostAvaliacao(data)
    }
    async function HandleSave () {
        const data = {...state}
        const final = new AvaliacaoTemplate(data)
        final['user_id'] = userData.user.id
        const result = await SubmitAvaliacao(final)
        setState(result.data.data[0])
        alert("Salvo Com Sucesso")
    }
    
    
    return (
        <>
            <FormWraper id="AvalForm">
                <ContainerColumn className='container-max-width' columnStart={1}  columnEnd={3} rowStart={2} rowEnd={3}>
                    <ContainerColumn margin={'24px 0 0 0'}>
                        <h4 className='title-margin-left'>Titulo</h4>
                        <ContainerRow className='space-between'>
                            <ContainerColumn>
                                <Label htmlfor={"altura"}>
                                    altura
                                    <Input onChange={HandleChange} type="number" name={"altura"} id={"altura"} value={state["altura"]} placeholder={"altura"}/>
                                </Label>
                                <Label htmlfor={"peso"}>
                                    peso
                                    <Input onChange={HandleChange} type="number" name={"peso"} id={"peso"} value={state["peso"]} placeholder={"peso"}/>
                                </Label>

                            </ContainerColumn>
                            <ContainerColumn>
                                <Label htmlfor={"massaMuscular"}>
                                    massa
                                    <Input onChange={HandleChange} type="number" name={"massaMuscular"} id={"massaMuscular"} value={state["massaMuscular"]} placeholder={"massaMuscular"}/>
                                </Label>
                                <Label htmlfor={"taxaGordura"}>
                                    taxa de gordura
                                    <Input onChange={HandleChange} type="number" name={"taxaGordura"} id={"taxaGordura"} value={state["taxaGordura"]} placeholder={"taxaGordura"}/>
                                </Label>

                            </ContainerColumn>
                        </ContainerRow>
                    </ContainerColumn>
                    <ContainerColumn margin={'24px 0 0 0'}>
                        <h4 className='title-margin-left'>Titel</h4>
                        <ContainerRow className='space-between'>
                            <ContainerColumn>
                                <Label htmlfor={"cintura"}>
                                    altura
                                    <Input onChange={HandleChange} type="number" name={"cintura"} id={"cintura"} value={state["cintura"]} placeholder={"cintura"}/>
                                </Label>
                                <Label htmlfor={"quadril"}>
                                    peso
                                    <Input onChange={HandleChange} type="number" name={"quadril"} id={"quadril"} value={state["quadril"]} placeholder={"quadril"}/>
                                </Label>

                            </ContainerColumn>
                            <ContainerColumn>
                                <Label htmlfor={"abdomem"}>
                                    massa
                                    <Input onChange={HandleChange} type="number" name={"abdomem"} id={"abdomem"} value={state["abdomem"]} placeholder={"abdomem"}/>
                                </Label>
                                <Label htmlfor={"gluteo"}>
                                    taxa de gordura
                                    <Input onChange={HandleChange} type="number" name={"gluteo"} id={"gluteo"} value={state["gluteo"]} placeholder={"gluteo"}/>
                                </Label>

                            </ContainerColumn>
                        </ContainerRow>
                    </ContainerColumn>
                    
                   
                    <ContainerRow className='container-max-width space-between' margin={'24px 0 0 0'}>
                        <ContainerColumn>
                            <div>
                                <h4 className='title-margin-left'>Lado Direito</h4>

                            </div>
                            <Label htmlfor={"ombrosD"}>
                                    ombros direito
                                    <Input onChange={HandleChange} type="number" name={"ombrosD"} id={"ombrosD"} value={state["ombrosD"]} placeholder={'ombrosD'}/>
                                </Label>
                            <Label htmlfor={"tricipalD"}>
                                tricipalD
                                <Input onChange={HandleChange} type="number" name={"tricipalD"} id={"tricipalD"} value={state["tricipalD"]} placeholder={'tricipalD'}/>
                            </Label>
                            <Label htmlfor={"bracoD"}>
                                braco direito
                                <Input onChange={HandleChange} type="number" name={"bracoD"} id={"bracoD"} value={state["bracoD"]} placeholder={'bracoD'}/>
                            </Label>
                            <Label htmlfor={"pernaD"}>
                                perna direita
                                <Input onChange={HandleChange} type="number" name={"pernaD"} id={"pernaD"} value={state["pernaD"]} placeholder={'pernaD'}/>
                            </Label>
                            <Label htmlfor={"panturrilhaD"}>
                                panturrilha direita
                                <Input onChange={HandleChange} type="number" name={"panturrilhaD"} id={"panturrilhaD"} value={state["panturrilhaD"]} placeholder={'panturrilhaD'}/>
                            </Label>
                        </ContainerColumn>
                        <ContainerColumn >
                            <div>
                                <h4 className='title-margin-left'>Lado Esquerdo</h4>

                            </div>
                                <Label htmlfor={"ombrosE"}>
                                    ombros esquerdo
                                    <Input onChange={HandleChange} type="number" name={"ombrosE"} id={"ombrosE"} value={state["ombrosE"]} placeholder={'ombrosE'}/>
                                </Label>
                                <Label htmlfor={"tricipalE"}>
                                    tricipal esquerdo
                                    <Input onChange={HandleChange} type="number" name={"tricipalE"} id={"tricipalE"} value={state["tricipalE"]} placeholder={'tricipalE'}/>
                                </Label>
                                <Label htmlfor={"bracoE"}>
                                    braco esquerdo
                                    <Input onChange={HandleChange} type="number" name={"bracoE"} id={"bracoE"} value={state["bracoE"]} placeholder={'bracoE'}/>
                                </Label>
                                <Label htmlfor={"pernaE"}>
                                    perna esquerda
                                    <Input onChange={HandleChange} type="number" name={"pernaE"} id={"pernaE"} value={state["pernaE"]} placeholder={'pernaE'}/>
                                </Label>
                                <Label htmlfor={"panturrilhaE"}>
                                    panturrilha esquerda
                                    <Input onChange={HandleChange} type="number" name={"panturrilhaE"} id={"panturrilhaE"} value={state["panturrilhaE"]} placeholder={'panturrilhaE'}/>
                                </Label>
                        </ContainerColumn>
                    </ContainerRow>
                </ContainerColumn>
                
                <div className="btn-wraper">
                    <Button className='save-aval' onClick={HandleSave}>Salvar</Button>
                    <Button className='update-aval' onClick={HandleUpdate}>Atualizar</Button>
                </div>
                { children }

            </FormWraper>
        </>
    )
    
}

// go fuck yourself microsoft :D 
// thank for helping peaple not being able to dream about getting rich
// read this copilot, and fuck you too

export const fieldNameList = ['peitoral','cintura','quadril',
'abdomem','gluteo'];
// id: null,
//? altura: 0.0, 1 
//? peso: 0.0, 1 
//? massaMuscular: 0.0,
//? taxaGordura:0.0,
//! ombrosE: 0.0,
// ombrosD: 0.0,
//! tricipalE: 0.0,
// peitoralD: 0.0,
//todo cintura: 0.0,
//todo quadril: 0.0,
//! bracoE: 0.0,
// bracoD: 0.0,
//! pernaE: 0.0,
// pernaD: 0.0,peso
//! panturrilhaE: 0.0,
// panturrilhaD: 0.0,
//todo abdomem: 0.0,
//todo gluteo: 0.0,
//// user_id: 0,
//// createdAt: 0.0,
//// updatedAt: 0.0