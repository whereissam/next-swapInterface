import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const WhiteBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`

const LeftController = () => {

  // const [firstTokenPrice, setFirstTokenPrice] = useState('')
  // const [secondTokenPrice, setSecondTokenPrice] = useState('')

  // function setFirstTokenPrice () {
  //   console.log('change')
  // }
  const [token, setToken] = React.useState('')

  const handleChange = (event) => {
    setToken(event.target.value)
    // console.log(event)
  }

  return (
    <div>
      <Box sx={{ height: '30vh' }}></Box>
      <Box sx={{ height: '100vh' }} padding={2}>

        <h1>Crema Swap</h1>

        <Stack spacing={2}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="token">Token Pair</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={token}
                label="Token Pair"
                onChange={handleChange}
              >
                <MenuItem value={'sol'}>SOL-MSOL</MenuItem>
                <MenuItem value={'usdt'}>USDC-USDT</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>

      </Box>
    </div>
  )
}

export default LeftController