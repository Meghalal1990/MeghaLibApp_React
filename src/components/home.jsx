import { Box, Card, CardActions, CardContent, Grid2, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";


const Home = () => {
    const [data,setdata]=useState([]);
    useEffect(()=>{
        axios.get("https://www.freetestapi.com/api/v1/books").then((res)=>{
            setdata(res.data);
        })
    })
    
   return (
    


    <Box sx={{ flexGrow: 1 }}>
    <Grid2 container spacing={2}> 
      {data.map((item)=>(<Grid2 item xs={4} >
      <Card sx={{ minWidth: 275 }} >
      <CardContent >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom align='center' >
        {item.id}
        </Typography>
        <Typography variant="h5" component="div" color='purple' align='center'>
          {item.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="red" align='center' >
         <b>{item.author}</b> 
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="red" align='center' >
         <b>{item.publication_year}</b> 
        </Typography>
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
    </Grid2>
      ))}
    </Grid2>
  </Box>
  )
}


export default Home;