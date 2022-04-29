
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
  
    
  async function GetAllAval() {
    const result = await GetAllUserAvaliacao(user.user.id) 
    if(result.data.data.length == 0) {
       setAllAval([new AvaliacaoTemplate()])
       return
    }
    setAllAval(result.data.data)
  }
  

  function GenerateDataObject(avals = [new AvaliacaoTemplate()]) { 
    let label = []
    let datasets = []
    
    for(let i = 0 ; i < avals.length; i ++ ){
      label.push(moment(avals[0].createdAt).format('L'))
      let info = new DatasetInfo()
      for(let k = 0 ; k < avals.length; k ++ ){
      }
    }
  }
  const [data, setData] = useState({
        labels: [
          // "id",
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
          // "user_id",
          // "createdAt",
          // "updatedAt"
        ],
        datasets: [
          {
            label: 'Dataset 1',
            data: [1,2,3,4 ],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: [1,2,3,4 ],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      })
    useEffect(() => { 
      // const labels = ['January', 'February', 'March', 'April'];

      // const data = {
      //   labels,
      //   datasets: [
      //     {
      //       label: 'Dataset 1',
      //       data: [1,2,3,4 ],
      //       borderColor: 'rgb(255, 99, 132)',
      //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
      //     },
      //     {
      //       label: 'Dataset 2',
      //       data: [1,2,3,4 ],
      //       borderColor: 'rgb(53, 162, 235)',
      //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
      //     },
      //   ],
      // };
    return () => { 
    

    }
    },[]);
    
  return (
        <Line options={options} data={data} />
  )
}
