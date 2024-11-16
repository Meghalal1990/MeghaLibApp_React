import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
  <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
       
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="lavender">
                Welcome to My LibApp!!!
            </Typography>
            <Link to='/'><Button style={{color:'lavender'}} color="inherit">HOME </Button></Link>
            <Link to='/viewbooks'><Button style={{color:'lavender'}} color="inherit">BOOKS</Button></Link>
            <Link to='/viewauthors'><Button style={{color:'lavender'}} color="inherit">AUTHORS </Button></Link>
            <Link to='/viewcategories'><Button style={{color:'lavender'}} color="inherit">CATEGORY</Button></Link>
            <Link to='/viewbookdtls'><Button style={{color:'lavender'}} color="inherit">BOOKDETAILS</Button></Link>

  
  
  
  
  
          </Toolbar>
        </AppBar>
      </Box>  )
  }
  
  
  export default Nav;