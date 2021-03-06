import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import ReactDOM from "react-dom"
import { styled } from '@mui/material/styles'
import GroupedButtons from "./GroupedButtons"
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Candle from './CandleChart'
import Candle2 from './CandleChart2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'History price change',
    },
  },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [33, 53, 85, 41, 44, 65, 70, 80, 10, 30, 77, 12],
      fill: true,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [33, 25, 35, 51, 54, 76, 53, 85, 65, 70, 65, 70],
      fill: true,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

const about = () => {
  return (

    <div>
      <Box sx={{ height: '20vh' }}></Box>
      {/* <Line options={options} data={data} /> */}
      <Candle></Candle>
      <Candle2></Candle2>
    </div>

  )
}

export default about