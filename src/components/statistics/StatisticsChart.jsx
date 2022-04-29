
import { GetAllUserAvaliacao } from '../../scripts/services/avaliacaoCRUD';
import { useLoginData, useCurrentAval } from '../../Contexts/LoginContext';
import React, { useEffect, useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import { AvaliacaoTemplate } from '../../scripts/ClassTemplate/AvaliacaoTemplate';
import moment from 'moment'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    // aspectRatio: 1,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
export class DatasetInfo { 
  constructor(label = '', data = [], borderColor = '#ccc', backgroundColor = '#ccF')  {
    this.label = label
    this.data = data
    this.borderColor = borderColor
    this.backgroundColor = backgroundColor
  }
}
export function StatisticsChart() {
  const user = useLoginData()
  const currSelectedAval =  useCurrentAval()
  const [allAval, setAllAval] = useState() 
  const [data, setData] = useState()
  
  
  const chartRef = React.createRef();
  async function GetAllAval() {
    const result = await GetAllUserAvaliacao(user.user.id) 
    console.warn(result.data.data)
    if(result.data.data.length == 0) {
      return [new AvaliacaoTemplate()]
    }
    return result.data.data
  }
  
  function randomRgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
  }
  function GenerateDataObject(avals = [new AvaliacaoTemplate()]) { 
    let label = []
    let datasets = []
    const keysToRead = [
      "altura",       
      "peso",
      "massaMuscular",
      "taxaGordura",
      "ombrosE",
      "ombrosD",
      "tricipalE",
      "tricipalD",
      "peitoral",
      "cintura",
      "quadril",
      "bracoE",
      "bracoD",
      "pernaE",
      "pernaD",
      "panturrilhaE",
      "panturrilhaD",
      "abdomem",
      "gluteo"
    ]
    
    for(let k = 0; k < keysToRead.length; k++) {
      let dataValues = []
      for(let i = 0 ; i < avals.length; i ++ ){
        dataValues.push(avals[i][keysToRead[k]])
      }
      const color = randomRgb()
      let info = new DatasetInfo(keysToRead[k], dataValues, color,color )
      datasets.push({...info})
    }
    for(let i = 0 ; i < avals.length ; i++ ) {
      label.push(moment(avals[i].createdAt).format('L'))
    }
    const result = { labels: label, datasets: datasets }
    return result
  }
  useEffect(() => {
    async function fetchData() {
      const object = await GetAllAval()
      setData(object)
    } 
    fetchData()
      return  () => { 
        
      }
    },[]);

    
  return (
    <Line 
    ref={chartRef} 
    options={options}
    data={GenerateDataObject(data)} />
  )
}
