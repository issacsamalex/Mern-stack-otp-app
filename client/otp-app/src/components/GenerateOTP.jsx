import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import {
    Grid,
    Typography,
    TextField,
    Button,
    Container,
    FormGroup,
    FormControl,
  } from "@mui/material";
  import axios from 'axios'

const GenerateOTP = () => {

    const [ email, setEmail ] = useState('')
    const navigate = useNavigate()

    const onSubmit = async () => {
        try {
            const submit = await axios.post('http://localhost:3001/api/user/send-otp', { email }).then((response) => {
                if(response){
                    navigate('/verify-otp')
                }
            })
            
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
    <div className="outercontainer">
    <Container className="outerbox">
          <Typography variant="h4">Please Enter Mail ID</Typography>
          <FormGroup>
            <FormControl>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    variant="outlined"
                    label="email"
                    name="email"
                    fullWidth
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Grid>
                <Grid className="buttoncontainer" item xs={12} sm={12} md={12}>
                  <Button onClick={onSubmit} id="ctaprimary" variant="contained">
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Submit
                    </Link>
                  </Button>
                </Grid>
              </Grid>
            </FormControl>
          </FormGroup>
        </Container>
        </div>
    </>
  )
}

export default GenerateOTP