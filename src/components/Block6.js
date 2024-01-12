import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import home4 from "../assests/home4.png";

const Block6 = () => {
  return (
    <>
      <Box>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          textAlign={"left"}
        >
          <Grid item xs={12} md={4} sx={{ textAlign: "left" }}>
            <Typography variant="h3" mb={5}>
              Témoignages
            </Typography>
            <Typography sx={{ fontSize: "11px" }}>Diaspora Member:</Typography>
            <Typography
              mb={3}
              sx={{ fontSize: "11px", color: `var(--textRed)` }}
            >
              Artur Luison
            </Typography>
            <Typography sx={{ fontSize: "11px" }}>Job Position:</Typography>
            <Typography
              mb={3}
              sx={{ fontSize: "11px", color: `var(--textRed)` }}
            >
              Manager
            </Typography>

            <Typography mt={5} mb={4} sx={{ fontSize: "11px", width: "70%" }}>
              “ Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget
              volutpat elementum cum turpis feugiat imperdiet auctor accumsan.
              Ut pulvinar orci. “
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ borderRadius: "50%", height: "70%" }}>
              <img
                src={home4}
                style={{ borderRadius: "100%", height: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography mb={3} sx={{ fontSize: "16px", fontWeight: "bold" }}>
              Very Nice Atmosphere and experience with “Welcome to PANDA”{" "}
            </Typography>
            <Typography mb={3} sx={{ fontSize: "11px", width: "70%" }}>
              Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget
              volutpat elementum cum turpis feugiat imperdiet auctor accumsan.
              Ut pulvinar orci.
            </Typography>
            <Typography sx={{ fontSize: "11px", width: "70%" }}>
              Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget
              volutpat elementum cum turpis feugiat imperdiet auctor accumsan.
              Ut pulvinar orci.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Block6;
