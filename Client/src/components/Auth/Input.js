import { Grid, IconButton, InputAdornment, TextField } from '@material-ui/core'
import React from 'react'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const Input = ({half, name, label, handleChange, autoFocus, type, handleShowPassword}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
        <TextField 
            name={name}
            onChange={handleChange}
            variant="outlined"
            required
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type}
            inputProps={name==="password" && {
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                            {type==="password" ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    </Grid>
  )
}

export default Input