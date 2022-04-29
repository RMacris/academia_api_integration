import React, { useEffect, useState } from 'react'
import { useLoginData, useCurrentAval } from '../../Contexts/LoginContext'
import { GetAllUserAvaliacao } from '../../scripts/services/avaliacaoCRUD'
import { AiFillCloseCircle } from "react-icons/ai";
import { DeleteAvaliacaoByID } from '../../scripts/services/avaliacaoCRUD';
import moment from 'moment';

import styles from './sticker.module.css'
export function OverlayList() {
    let [avalsList, setAvals]  = useState([])
    const currAval =  useCurrentAval()
    const userData = useLoginData() 
    useEffect(() => { 
        GetAllAval()
    },[])

    async function GetAllAval()  {
        const result = await GetAllUserAvaliacao(userData.user.id)
        setAvals(result.data.data)
    }

    function HandleDeleteAvaliacao(id) { 
        DeleteAvaliacaoByID(id)
        DeleteFromState(id)
        
    }
    function DeleteFromState(id){ 
        if(window.confirm("Tem Certeza que Deseja excluir esta avaliação?")){ 
            const updatedList = avalsList.filter(function(x) { return x.id !== id; })
            setAvals(updatedList)
            
        }
    }
    function SelectNewAval(element) {

        currAval.setCurrentAval(element)
        console.log(currAval)
    }
    function Card (element) {
        return(
            <div onClick={() => SelectNewAval(element)} className={styles.container}>
                <div className={styles.info}>
                    <p className={styles.createdAt}> <b>Criação: </b> {moment(element.element.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    <p className={styles.updatedAt}><b>Atualização: </b>{moment(element.element.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                </div>
                <AiFillCloseCircle onClick={() => HandleDeleteAvaliacao(element.element.id)} size={42}className={styles.icon}>

                </AiFillCloseCircle>
            </div>
        )
    }
    return (
        <>
            <div>
                {avalsList.length == 0 && <h4> Ops, Nenhuma Avaliação feita</h4>}
                {avalsList.map((el,index) => <Card key={index} element={el} ></Card>).reverse() }
            </div>
        </>
    )
}
