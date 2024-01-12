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
  Button,
  useMediaQuery,
} from "@mui/material";

import heroImg from "../assests/heroImg.png";
import Union from "../assests/Union.png";
import hero from "../assests/hero2.png";

const Reset = () => {
  const isSmallScreen = useMediaQuery("(max-width: 899px)");

  const [password, setPassword] = useState("");
  const [newpass, setNewPass] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [msg, setMsg] = useState("");
  const [btnTxt, setBtnTxt] = useState("Reset My Password");

  const handleSubmit = (e) => {
    e.preventDefault();

    setPasswordError("");

    if (password !== "" && password === newpass) {
      setMsg("Your password has been reset");
      setBtnTxt("Sign in");
      return;
    } else {
      setPasswordError("Passwords not matched");
    }
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
                      borderBottom: `3px solid var(--textRed)`,
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

            <form onSubmit={handleSubmit}>
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
                      Reset Password
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      mx: 5,
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "30px",
                      marginRight: "20px",
                    }}
                  >
                    <TextField
                      sx={{
                        mb: 3,
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
                      label="Enter New Password"
                      variant="standard"
                      onChange={(e) => setPassword(e.target.value)}
                      error={passwordError}
                      helperText={passwordError}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">Show</InputAdornment>
                        ),
                        style: { color: `var(--textRed)` },
                      }}
                    />

                    <TextField
                      sx={{
                        mb: 3,
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
                      label="Re-Enter New Password"
                      variant="standard"
                      onChange={(e) => setNewPass(e.target.value)}
                      error={passwordError}
                      helperText={passwordError}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">Show</InputAdornment>
                        ),
                        style: { color: `var(--textRed)` },
                      }}
                    />

                    <Typography
                      my={3}
                      sx={{
                        fontSize: "14px",
                        color: `var(--textLight)`,
                        textAlign: "left",
                      }}
                    >
                      {msg}
                    </Typography>
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
                  <Button
                    variant="outlined"
                    type="submit"
                    //   onSubmit = {handleSubmit}
                    sx={{
                      borderRadius: "20px",
                      borderColor: `var(--textLight)`,
                      color: `var(--textColor)`,
                      margin: "10px auto",
                    }}
                  >
                    {btnTxt}
                  </Button>
                </Box>
              </Container>
            </form>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Reset;
