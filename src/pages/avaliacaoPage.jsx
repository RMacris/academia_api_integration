import React, { useEffect, useState } from 'react'
import { AvaliacaoForm } from '../components/avaliacao-form'
import { FormHeader } from '../components/styled-components/form/form-header'
import { Label } from '../components/styled-components/label/label'
import { Input } from '../components/styled-components/input/input'
import { ContainerRow } from '../components/styled-components/form/form-container'
import { ContainerColumn } from '../components/styled-components/form/form-container'
import { StatisticsComponent } from '../components/statistics/statistics-component.jsx'
import { StatisticsChart } from '../components/statistics/StatisticsChart'
import { FormOverlay } from '../components/form-overlay/form-overlay'
import { OverlayList } from '../components/overlay-list/OverlayList'
import { AiOutlineBarChart } from 'react-icons/ai'
import { MdTableRows } from 'react-icons/md'

import './avaliacaoPage.css'

export default function AvaliacaoPage() {
    
    const [isViewingStats, setViewingStats] = useState(true)
    const [statsFormStyle, setStatsFormStyle] = useState(["-9000px",'hidden'])
    const [formAvalStyle, setFormAvalStyle] = useState("-900px")
    useEffect(() => { 
        // SetInitialState() 
        return () => { }
    },[])
    function SetInitialState () {
        HideExtra()
    }    
    function HandleViewingStats (e) {
        setViewingStats(!isViewingStats)
        if(isViewingStats) {
            ShowExtra()
        }
        else{
            HideExtra()
        }
        
    }
    function ShowExtra()  {
        setStatsFormStyle([0, 'visible'])
        setFormAvalStyle(0)
    }
    function HideExtra() {
        const statistics = document.getElementById('Statistics')
        const avalFormWidth =  GetAvaliacaoFormWidth()
        setStatsFormStyle([`${-statistics.offsetWidth}px`, 'hidden'])
        setFormAvalStyle(`${-avalFormWidth}px`)
    }
    function GetAvaliacaoFormWidth() { 
        const avalForm = document.getElementById('AvalForm')
        console.log(avalForm.offsetWidth)
        return avalForm.offsetWidth
    }
    return (
        <div>
            <div className='form-stats-container'>
                <div className='form-container'>
                <FormHeader id="FormContainer">
                    <ContainerColumn columnStart={1}  columnEnd={2} rowStart={1} rowEnd={2}>
                        <h1> Avaliação </h1>
                        
                    </ContainerColumn>
                    <ContainerRow margin={'0 0 0 auto'} columnStart={1}  columnEnd={3} rowStart={2} rowEnd={3}>
                        <Label className='align label-highlight' htmlFor='RadioForm'>
                            <MdTableRows size={32}></MdTableRows>
                            <input id="RadioForm" type="radio" name="displayType" onClick={HandleViewingStats} value="1" defaultChecked/>
                        </Label>
                        <Label className='align label-highlight' htmlFor='RadioTableDisplay'>
                            <AiOutlineBarChart size={32}></AiOutlineBarChart>   
                            <input id="RadioTableDisplay" type="radio" name="displayType" onClick={HandleViewingStats} value="2"/>
                        </Label>
                    </ContainerRow>
                </FormHeader>
                <AvaliacaoForm >
                    <FormOverlay leftPos={formAvalStyle}>
                        <OverlayList ></OverlayList>
                    </FormOverlay>
                </AvaliacaoForm>
                </div>
                <StatisticsComponent id='Statistics'  formSize={'475px'} leftPos={statsFormStyle[0]} visibility={statsFormStyle[1]} > 
                    <StatisticsChart></StatisticsChart>
                </StatisticsComponent>
            </div>
        </div>
    )
}
