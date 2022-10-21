import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import { placeOrderAction } from "../store/actions/orderAction";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Payment() {


  const dispatch = useDispatch()
 const navigate = useNavigate()


  const {cartItem} = useSelector( state => state.cart )
  const {login} = useSelector( state => state.user )
  const {placeOrder} = useSelector(state => state.order)
   useEffect(() => {
        placeOrder && navigate("/order-success")
   },[placeOrder]) // [placeOrder ] is called as dependency Array

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Payment Method
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            // defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="male" control={<Radio />} label="COD" />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="UPI / Netbanking"
            />
          </RadioGroup>
        </FormControl>
      </CardContent>
      <CardActions>
          <Button size="small" onClick={ e  => dispatch(placeOrderAction(
          {  userId: login.id , 
            order:cartItem
          }
          )) }>Place Order</Button>
      </CardActions>
    </Card>
  );
}
