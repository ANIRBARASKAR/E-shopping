import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from 'react-router-dom'
import { Badge, Box } from '@mui/material'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from "react-redux"
import { logoutAction } from '../store/actions/userAction'
import PersonIcon from '@mui/icons-material/Person';
export default function Navbar() {
  const dispatch = useDispatch()


  const { cartItem } = useSelector(state => state.cart)


  const { login } = useSelector(state => state.user)
  return (
    <>
      <Box sx={{ mb: "75px" }}>

        <AppBar position="fixed" color=""  className="bg-dark text-light mb-5" >
          <Toolbar>

          <Typography variant="h4">#Shopping</Typography>

            <Typography variant="h6">
              <Link className="ms-5 text-light " sx={{ mx: "75px" }} to={'/'}>
                <Button
                  variant="text"
                  color='inherit'
                  startIcon={<HomeOutlinedIcon />}>
                  Home
                </Button>
              </Link>
              <Button
                  variant="text"
                  color='inherit'
                  startIcon={<PersonIcon />}>
                              
                            
                             { login?.name}
                              

                </Button>
              {
                
               

                login?.name
                  ? ""
                  : <Link className="mx-5 text-light " sx={{ mx: "75px" }} to={'/login'}>
                    <Button
                      variant="text"
                      color='inherit'
                      startIcon={<HomeOutlinedIcon />}>
                      Login
                    </Button>
                  </Link>
              }
              <Link className="ms-5 text-light " sx={{ mx: "75px" }} to={'/register'}>
                <Button
                  variant="text"
                  color='inherit'
                  startIcon={<HomeOutlinedIcon />}>
                  Register
                </Button>
              </Link>
              <Link className="ms-5 text-light " sx={{ mx: "75px" }} to={'/addProduct'}>
                <Button
                  variant="text"
                  color='inherit'
                  startIcon={<HomeOutlinedIcon />}
                  >
                 Add-Product
                </Button>
              </Link>
              <Link className="ms-5 text-light " sx={{ mx: "75px" }} to={'/cart'}>
                {/* <Button
                  variant="text"
                  color='inherit'
                  startIcon={<HomeOutlinedIcon />}>
                  Cart
                </Button> */}
                <Badge badgeContent={cartItem.reduce((total, item) => total + item.qty, 0)} color="primary">
                  <ShoppingCartIcon color="light" />
                </Badge>
              </Link>
              <Link className="ms-5 text-light " sx={{ mx: "75px" }} to={'/login'}>
                <Button
                  onClick={e => dispatch(logoutAction())}
                  variant="text"
                  color='inherit'
                  startIcon={<HomeOutlinedIcon />}>
                  Logout

                </Button>
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

    </>
  )
}
