import React from "react";
import home2 from "../assests/home2.png";
import Union from "../assests/Union.png";
import { Box, Grid, Typography, Button } from "@mui/material";

const Block3 = () => {
  return (
    <>
      <Box sx={{ textAlign: "left" }} my={5}>
        <Typography variant="h3">Fonctionnalités</Typography>

        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
          sx={{ textAlign: "center" }}
        >
          <Grid item xs={12} md={8}>
            <Box display="flex" flexDirection={"column"}>
              <Grid
                container
                mt={4}
                spacing={2}
                justifyContent="space-between"
                alignItems="center"
                sx={{ textAlign: "center" }}
              >
                <Grid
                  item
                  xs={6}
                  md={4}
                  sx={{
                    borderColor: `1px solid black`,
                    borderRadius: "108px, 108px, 0px, 0px",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "108px 108px 0 0",
                      border: `1px solid var(--textRed)`,
                      height: "250px",
                    }}
                  >
                    <img src={Union} style={{ marginTop: "30px" }} />
                    <Typography variant="h6" my={2} sx={{ fontWeight: "bold" }}>
                      Sélection de profils
                    </Typography>
                    <Typography my={3} p={1} sx={{ fontSize: "11px" }}>
                      Sélectionnez les meilleurs profils d'experts ou
                      organisations qui vous intéressent et entrez en contact
                      avec eux!{" "}
                    </Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={6}
                  md={4}
                  sx={{
                    borderColor: `1px solid black`,
                    borderRadius: "108px, 108px, 0px, 0px",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "108px 108px 0 0",
                      border: `1px solid var(--textRed)`,
                      height: "250px",
                    }}
                  >
                    <img src={Union} style={{ marginTop: "30px" }} />
                    <Typography variant="h6" my={2} sx={{ fontWeight: "bold" }}>
                      Publication
                    </Typography>
                    <Typography my={3} p={1} sx={{ fontSize: "11px" }}>
                      Offres d’emploi, annonces, collaborations, événements,
                      etc. Publiez du contenu exclusif sur votre page privée !
                    </Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={6}
                  md={4}
                  sx={{
                    borderColor: `1px solid black`,
                    borderRadius: "108px, 108px, 0px, 0px",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "108px 108px 0 0",
                      border: `1px solid var(--textRed)`,
                      height: "250px",
                    }}
                  >
                    <img src={Union} style={{ marginTop: "30px" }} />
                    <Typography variant="h6" my={2} sx={{ fontWeight: "bold" }}>
                      tRAVEL MAP
                    </Typography>
                    <Typography my={3} p={1} sx={{ fontSize: "11px" }}>
                      Rencontrez-vous grâce à notre Travel Map! Cette
                      fonctionnalité permet aux experts de notifier leurs
                      déplacements sur le continent africain. Il ne reste plus
                      qu'à planifier la rencontre!{" "}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Grid
                container
                mt={4}
                spacing={2}
                justifyContent="start"
                alignItems="center"
                sx={{ textAlign: "center" }}
              >
                <Grid
                  item
                  xs={6}
                  md={4}
                  sx={{
                    borderColor: `1px solid black`,
                    borderRadius: "108px, 108px, 0px, 0px",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "0 0 108px 108px ",
                      border: `1px solid var(--textRed)`,
                      height: "250px",
                    }}
                  >
                    <img src={Union} style={{ marginTop: "30px" }} />
                    <Typography variant="h6" my={2} sx={{ fontWeight: "bold" }}>
                      Filtres & recherche avancée
                    </Typography>
                    <Typography my={3} p={1} sx={{ fontSize: "11px" }}>
                      Ciblez vos recherches par secteur d'activité, pays et plus
                      encore.
                    </Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={6}
                  md={4}
                  sx={{
                    borderColor: `1px solid black`,
                    borderRadius: "108px, 108px, 0px, 0px",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "0 0 108px 108px ",
                      border: `1px solid var(--textRed)`,
                      height: "250px",
                    }}
                  >
                    <img src={Union} style={{ marginTop: "30px" }} />
                    <Typography variant="h6" my={2} sx={{ fontWeight: "bold" }}>
                      NOTIFICATIONS
                    </Typography>
                    <Typography my={3} p={1} sx={{ fontSize: "11px" }}>
                      Soyez directement avertis des nouvelles publications et
                      mises à jour grâce aux notifications.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              src={home2}
              style={{ width: "80%", height: "100%", marginBottom: "30px" }}
            />
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
              Explorer la Travel Map
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Block3;
