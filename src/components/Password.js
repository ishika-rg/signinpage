import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Stack,
  Container,
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  useMediaQuery,
} from "@mui/material";

import heroImg from "../assests/heroImg.png";
import Union from "../assests/Union.png";
import hero from "../assests/hero2.png";

const Password = () => {
  const isSmallScreen = useMediaQuery("(max-width: 899px)");

  const [email, setEmail] = useState("");

  const [emailError, setEmailError] = useState("");
  const [msg, setMsg] = useState("");
  const [buttonText, setButtonText] = useState("Get the Link");
  const [text, setText] = useState(
    "Please enter your login email address to receive your password reset link."
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailError("");
    setMsg("Didn’t get the password reset link?");
    setButtonText("Resend Link");
    setText(
      "Your password reset link has been sent to your email address. Check your email and click on the link to reset your password."
    );

    if (email == "") {
      setEmailError("Please enter email address");
      return;
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
                      Forgot Password
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
                        mt: 3,
                        "& label": {
                          fontSize: "14px",
                        },
                        "& input": {
                          fontSize: "14px",
                        },
                      }}
                      size="small"
                      id="email"
                      label="Email address"
                      variant="standard"
                      onChange={(e) => setEmail(e.target.value)}
                      inputProps={{ style: { color: `var(--textGolden)` } }}
                      error={emailError}
                      helperText={emailError}
                    />

                    <Typography
                      mb={5}
                      sx={{
                        fontSize: "12px",
                        color: `var(--textLight)`,
                        textAlign: "left",
                      }}
                    >
                      {text}
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
                  <Link to="/resetpassword" style={{ textDecoration: "none" }}>
                    <Typography
                      my={3}
                      sx={{
                        fontSize: "14px",
                        color: `var(--textLight)`,
                      }}
                    >
                      {msg}
                    </Typography>
                  </Link>

                  <Button
                    variant="outlined"
                    type="submit"
                    sx={{
                      borderRadius: "20px",
                      borderColor: `var(--textLight)`,
                      color: `var(--textColor)`,
                      margin: "10px auto",
                    }}
                  >
                    {buttonText}
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

export default Password;
