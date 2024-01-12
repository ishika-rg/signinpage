import React from "react";
import i1 from "../assests/i1.png";
import i2 from "../assests/i2.png";
import i3 from "../assests/i3.png";
import { Box, Paper, Container, Grid, Typography, Button } from "@mui/material";

const Block4 = () => {
  return (
    <>
      <Box my={5} py={5}>
        <Grid
          container
          spacing={2}
        //   justifyContent="space-between"
        //   alignItems="center"
          sx={{ textAlign: "left" }}
        >
          <Grid item xs={12} md={4} display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="space-between">
           
                <Box >
                    <Typography variant="h3">Découvrez les experts</Typography>
                </Box>
              <Box sx={{paddingBottom : "6em"}}>
                <Typography p={1} sx={{ fontSize: "11px" }}>
                  Connectez-vous avec des organisations africaines, postulez au
                  job de vos rêves en Afrique ou partagez votre expertise même à
                  distance!
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
                  Voir tout
                </Button>
              </Box>
         
          </Grid>

          <Grid item xs={12} md={8 }
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="space-between"
            >
          
            <Box>
              <Typography variant="h5" mb={5} mx = {3} sx={{ fontWeight: "bold" }}>
                “ Mon rêve était d’aller vivre en Afrique. j'ai postulé à une
                offre d'emploi pour le poste de web developer publiée sur PANDA
                et le mois suivant je commençais à travailler à Dakar! ”
              </Typography>
              </Box>
              <Box display="flex" flexDirection="row">
                <Box mr = {3} >
                <img src={i1} style={{ height : "80%"}} />
                </Box>
                <Box mr = {3} sx ={{marginTop : "20px"}}>
                <img src={i2} style={{ height : "80%"}} />
                </Box>
                <Box sx = {{marginTop : "50px"}}>
                <img src={i3} style={{  height : "80%"}} />
                </Box>
             
              
              
              </Box>
            
            </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Block4;
