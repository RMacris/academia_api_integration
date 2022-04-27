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
import './avaliacaoPage.css'

export default function AvaliacaoPage() {
    
    const [isViewingStats, setViewingStats] = useState(false)
    const [statsFormStyle, setStatsFormStyle] = useState("0")
    useEffect(() => { 
    
        return () => { }
    },[])
    function HandleViewingStats (e) {
        const statistics = document.getElementById('Statistics')
        console.log(statistics.offsetWidth)
        if(e.target.value === '1'){
            setStatsFormStyle([`${-statistics.offsetWidth}px`, 'hidden'])
        }
        else{
            //width of the container
            setStatsFormStyle([0, 'visible'])
        }
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
                        <Label htmlFor='RadioForm'>
                            Input
                            <Input id="RadioForm" type="radio" name="displayType" onClick={HandleViewingStats} value="1" defaultChecked/>
                        </Label>
                        <Label htmlFor='RadioTableDisplay'>
                            Table   
                            <Input id="RadioTableDisplay" type="radio" name="displayType" onClick={HandleViewingStats} value="2"/>
                        </Label>

                    </ContainerRow>
                </FormHeader>
                <AvaliacaoForm>
                    <FormOverlay></FormOverlay>
                </AvaliacaoForm>
                </div>
                <StatisticsComponent id='Statistics'  formSize={'475px'} leftPos={statsFormStyle[0]} visibility={statsFormStyle[1]} > 
                    <StatisticsChart></StatisticsChart>
                </StatisticsComponent>
            </div>

        </div>
    )
}
