import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField';


const Searchbar = (props) => {

    return (
    <FormControl fullWidth>
      <TextField  id="standard-basic" label="Search..." />
    </FormControl>
    )
}


export default Searchbar