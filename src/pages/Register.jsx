import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Stack, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios"
export default function Register() {
  const [showAlert, setshowAlert] = React.useState(false)
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
      cpassword: "",
    },
    validationSchema: yup.object({
      name:
        yup
          .string()
          .required("name can not be empty"),
      email:
        yup
          .string()
          .email("this is not valid email address")
          .required("email can not be empty"),
      mobile:
        yup
          .string()
          .required("mobile can not be empty")
          .min(10, "enter valid mobile number").max(10, "enter valid mobile number"),
      password:
        yup
          .string()
          .required("password can not be empty")
          .min(3, "password can not be less than 3 charactors"),
      cpassword:
        yup.string()
          .required("confirm password can not be empty")
          .oneOf(
            [yup.ref("password"), null],
            "password and confirm password do not matched"
          ),
    }),
    onSubmit: async ({ name, email, mobile, password }, { resetForm }) => {
      const result = await axios.post("http://localhost:5000/register", { name, email, mobile, password })
      setshowAlert(true)
      setTimeout(() => {
        setshowAlert(false)
      }, 5000);
      resetForm()
    }
  })
  return (
    <Box
      sx={{
        // width: 500,
        padding: "0 25%",
        maxWidth: "100%",
      }}
    >
      {/* {
        JSON.stringify(formik.errors)
      }
      {
        JSON.stringify(formik.values)
      } */}
      <Stack className="mt-5" gap={3}>
        {
          showAlert && <Alert severity="success">You have Register successfully</Alert>
        }
        <form onSubmit={formik.handleSubmit}>
          <TextField 
          className="mt-3"
            error={formik?.errors?.name}
            helperText={formik?.errors?.name}
            name="name"
            fullWidth
            label="Name"
            id="fullWidth1"
            onChange={formik.handleChange}
            value={formik.values.name} />
          <TextField 
          className="mt-3"
            error={formik?.errors?.email}
            helperText={formik?.errors?.email}
            name="email"
            fullWidth
            label="email"
            id="fullWidth2"
            onChange={formik.handleChange}
            value={formik.values.email} />
          <TextField 
          className="mt-3"
            error={formik?.errors?.mobile}
            helperText={formik?.errors?.mobile}
            name="mobile"
            fullWidth
            label="mobile"
            id="fullWidth3"
            onChange={formik.handleChange}
            value={formik.values.mobile} />
          <TextField 
          className="mt-3"
            error={formik?.errors?.password}
            helperText={formik?.errors?.password}
            name="password"
            type="password"
            fullWidth
            label="password"
            id="fullWidth4"
            onChange={formik.handleChange}
            value={formik.values.password} />
          <TextField 
          className="mt-3"
            error={formik?.errors?.cpassword}
            helperText={formik?.errors?.cpassword}
            name="cpassword"
            type="password"
            fullWidth
            label="confirm password"
            id="fullWidth"
            onChange={formik.handleChange}
            value={formik.values.cpassword} />
          
          <Button className="mt-3 w-100 btn-outlined-dark"  type="submit" variant="contained" >
            Register
          </Button>
        </form>
        <div style={{ textAlign: "center" }}>
          {"Already have an Account? "}
          <Link to="/login">Login</Link>
        </div>
      </Stack>
    </Box>
  );
}
