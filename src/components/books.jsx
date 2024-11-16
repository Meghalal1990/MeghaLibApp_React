import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'


export const books = () => {
    var[books, setProducts]=useState([])
        useEffect(()=>{
         axios.get("https://localhost:7076/api/Books")
         .then((responsevariable)=>{console.log(responsevariable)
             setProduct(responsevariable.data)
         })
         .catch((error)=>{console.log(error)}
         )
        },[])
  return (
    <TableContainer><Table>
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>   { books.map((val,i)=>{
    return(
        <TableRow>
            <TableCell>{val.Id}</TableCell>
            <TableCell>{val.Title}</TableCell>
            <TableCell>{val.Description}</TableCell>
            <TableCell>{val.AuthorId}</TableCell>
            <TableCell>{val.CategoryId}</TableCell>
        </TableRow>
    )
    })
}</TableBody>
     
        </Table></TableContainer>
  )
}

export default books;