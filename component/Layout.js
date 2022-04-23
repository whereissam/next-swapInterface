import Footer from "./Footer"
import Navbar from "./Navbar"
import Chart from "./Chart"
import LeftController from "./LeftController"

import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
// import Paper from '@mui/material/Paper'
// import { styled } from '@mui/material/styles'

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }))


const Layout = ({ children }) => {
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: '#363737', height: '100vh' }}>

          <Grid container spacing={2}>
            <Grid item xs={6} md={4}>
              <div className="content">
                {/* <Navbar /> */}
                <LeftController></LeftController>
                {children}
                {/* <Footer></Footer> */}
              </div>
            </Grid>
            <Grid item xs={6} md={8}>
              {/* <Item>xs=6 md=4</Item> */}
              <Chart></Chart>
            </Grid>
          </Grid>
        </Box>
      </Container>


    </React.Fragment>


  )
}

export default Layout