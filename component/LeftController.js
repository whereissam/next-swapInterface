import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const LeftController = () => {
  return (
    <div>
      <Box sx={{ bgcolor: '#363737', height: '30vh' }}></Box>
      <Box sx={{ bgcolor: '#363737', height: '100vh' }} padding={2}>

        <h1>Crema Swap</h1>

        <Stack spacing={2}>
          <label htmlFor="">Current Price</label>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Stack>

      </Box>
    </div>
  )
}

export default LeftController