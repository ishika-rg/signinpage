import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Stack,
  Container,
  Box,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
  useMediaQuery,
} from "@mui/material";

import heroImg from "../assests/heroImg.png";
import Union from "../assests/Union.png";
import hero from "../assests/hero2.png";

const SignupForm = () => {
  const isSmallScreen = useMediaQuery("(max-width: 899px)");

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = () => {
    console.log("submit btnnnn");
  };
  return (
    <>
      <Box
        sx={{
          height: "100vh",
        }}
      >
        <Grid container>
          <Grid
            xs={12}
            md={8}
            position="relative"
            sx={{
              height: "100vh",
              width: "100%",
            }}
          >
            {isSmallScreen ? (
              <img
                src={hero}
                alt="Small Screen Image"
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <img
                src={heroImg}
                alt="Large Screen Image"
                style={{ width: "100%", height: "100%" }}
              />
            )}

            <Typography
              variant="h4"
              component="div"
              sx={{
                position: "absolute",
                top: "3%",
                left: "5%",
                color: `var(--lightBg)`,
              }}
            >
              Welcome to PANDA
            </Typography>
          </Grid>

          <Grid xs={12} md={4}>
            <Container maxWidth="md">
              <Stack
                direction="row"
                spacing={2}
                pt={5}
                mx={5}
                justifyContent="center"
                borderBottom={`2px solid #F5F1ED`}
              >
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: `var(--textColor)`,
                      "&:hover": {
                        borderBottom: `3px solid var(--textRed)`,
                        cursor: "pointer",
                      },
                      borderBottom: `3px solid var(--textRed)`,
                    }}
                  >
                    Join PANDA
                  </Typography>
                </Link>

                <Typography sx={{ color: `var(--lightBg) ` }}>or </Typography>
                <Link to="/signin" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: `var(--textColor)`,
                      "&:hover": {
                        borderBottom: `3px solid var(--textRed)`,
                        cursor: "pointer",
                      },
                    }}
                  >
                    Sign in
                  </Typography>
                </Link>
              </Stack>
            </Container>

            <Container maxWidth="md">
              <Box
                mt={5}
                my={3}
                sx={{
                  border: "1px solid var(--lightBg)",
                  borderRadius: "450px 450px 0 0",
                }}
              >
                <Box>
                  <img
                    src={Union}
                    style={{ marginTop: "30px", marginBottom: "20px" }}
                  />
                  <Typography variant="h6" fontWeight={"bold"}>
                    Create your free account{" "}
                  </Typography>
                  <Typography fontWeight={"bold"} sx={{ fontSize: "16px" }}>
                    Takes less than{" "}
                    <span style={{ color: `var(--textRed)` }}>5 minutes</span>
                    ...
                  </Typography>
                </Box>

                <Box sx={{ mx: 5 }}>
                  <form
                    type="submit"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    <TextField
                      sx={{
                        mb: 1,
                        mt: 1,
                        "& label": {
                          fontSize: "14px",
                        },
                        "& input": {
                          fontSize: "14px",
                        },
                      }}
                      size="small"
                      id="email"
                      label="Enter email"
                      variant="standard"
                      inputProps={{ style: { color: `var(--textGolden)` } }}
                    />
                    <TextField
                      sx={{
                        mb: 1,
                        "& label": {
                          fontSize: "14px",
                        },
                        "& input": {
                          fontSize: "14px",
                        },
                      }}
                      type="password"
                      size="small"
                      id="password"
                      label="Enter password"
                      variant="standard"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">Show</InputAdornment>
                        ),
                        style: { color: `var(--textRed)` },
                      }}
                    />
                    <TextField
                      sx={{
                        mb: 4,
                        "& label": {
                          fontSize: "14px",
                        },
                        "& input": {
                          fontSize: "14px",
                        },
                      }}
                      size="small"
                      id="confirm_password"
                      label="Confirm password"
                      variant="standard"
                      type="password"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">Show</InputAdornment>
                        ),
                        style: { color: `var(--textRed)` },
                      }}
                    />
                  </form>
                </Box>
              </Box>

              <Box
                mx={5}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                sx={{ fontColor: `var(--textColor)`, fontSize: "10px" }}
              >
                <FormGroup>
                  <FormControlLabel
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: "14px",
                      },
                    }}
                    control={<Checkbox size="small" />}
                    label="I'm an expert"
                  />
                  <FormControlLabel
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: "14px",
                      },
                    }}
                    control={
                      <Checkbox
                        size="small"
                        checked={checked}
                        onChange={handleChange}
                      />
                    }
                    label="I'm an Organization in Africa"
                  />
                </FormGroup>
                <Link to="/home">
                  <Button
                    variant="outlined"
                    onClick={handleSubmit}
                    sx={{
                      borderRadius: "20px",
                      borderColor: `var(--textLight)`,
                      color: `var(--textColor)`,
                      margin: "10px auto",
                    }}
                  >
                    Join PANDA
                  </Button>
                </Link>

                <Typography
                  sx={{ color: `var(--textLight)`, fontSize: "12px" }}
                >
                  By clicking on "Create an account", you agree to our terms of
                  use and privacy policy.
                </Typography>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SignupForm;
