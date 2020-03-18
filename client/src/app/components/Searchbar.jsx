import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField';


const Searchbar = ({filterProducts, products}) => {

  
    return (
    <FormControl fullWidth>
      <TextField onChange={e => filterProducts(e, products)}  id="standard-basic" label="Search..." />
    </FormControl>
    )
}


export default Searchbar