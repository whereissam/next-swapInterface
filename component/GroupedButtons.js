import * as React from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

class GroupedButtons extends React.Component {
  state = { counter: 0 };

  handleIncrement = () => {
    this.setState(state => ({ counter: state.counter + 1 }))
  };

  handleDecrement = () => {
    this.setState(state => ({ counter: state.counter - 1 }))
  };
  render () {
    // const displayCounter = this.state.counter > 0

    return (

      <ButtonGroup
        size="large"
        aria-label="outlined button group"
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Button style={{ maxHeight: '20px', minWidth: '100px' }} onClick={this.handleIncrement}>+</Button>
          </Grid>
          <Grid item xs={4}>
            <h1 align="center" style={{ minWidth: '0px' }}>{this.state.counter}</h1>
          </Grid>
          <Grid item xs={4}>
            <Button style={{ maxHeight: '20px', minWidth: '100px' }} onClick={this.handleDecrement}>-</Button>
          </Grid>

        </Grid>
      </ButtonGroup>
    )
  }
}

export default GroupedButtons