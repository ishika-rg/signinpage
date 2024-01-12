import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import i4 from "../assests/i4.png";
import home3 from "../assests/home3.png";

const Block5 = () => {
  return (
    <>
      <Box>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} md={4} sx={{ textAlign: "left" }}>
            <Typography variant="h3" mb={5}>
              Evénements à venir
            </Typography>
            <Typography mb={3} sx={{ fontSize: "11px" }}>
              Publié par: Pablo Diahuno
            </Typography>
            <img src={i4} />
            <Typography mt={5} mb={4} sx={{ fontSize: "11px", width: "70%" }}>
              Sortez votre carnet d'adresses! Restez informés de tous les
              événements à venir autour du business en Afrique organisés en
              Afrique ou à l'étranger.
            </Typography>
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
              Publier ou voir les événements
            </Button>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box>
              <img src={home3} />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontSize: "11px" }}>
              L'événement:{" "}
              <span style={{ color: `var(--textRed)` }}>The Nancy party’s</span>{" "}
            </Typography>
            <Typography sx={{ fontSize: "11px" }}>
              Date: <span style={{ color: `var(--textRed)` }}>10/07/22 </span>
            </Typography>
            <Typography sx={{ fontSize: "11px" }}>
              Lieu: <span style={{ color: `var(--textRed)` }}>Senegal </span>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Block5;
