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

const VerifyOTP = () => {

    const [otp, setField] = useState('');
    const navigate = useNavigate()

    const onSubmit = async () => {
        const submit = await axios.post('http://localhost:3001/api/user/verify-otp', {otp}).then((response) => {
            if(response.data.message === 'Valid user'){
                navigate('/welcome-page')
            }else{
                alert(response.data.message)
            }
        })
    }

  return (
    <>
    <div className="outercontainer">
    <Container className="outerbox">
          <Typography variant="h4">Please Enter OTP</Typography>
          <FormGroup>
            <FormControl>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    variant="outlined"
                    label="otp"
                    name="otp"
                    fullWidth
                    required
                    value={otp}
                    onChange={(event) => setField(event.target.value)}
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

export default VerifyOTP