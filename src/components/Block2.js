import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Block2 = () => {
  return (
    <>
      <Box sx={{ textAlign: "left" }} my={4}>
        <Typography variant="h3">Missions de PANDA</Typography>

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
            xs={12}
            md={2}
            sx={{
              borderColor: `1px solid black`,
              borderRadius: "108px, 108px, 0px, 0px",
            }}
          >
            <Box
              sx={{
                borderRadius: "108px 108px 0 0",
                border: `1px solid var(--textRed)`,
                height: "270px",
              }}
            >
              <Typography my={3}>01</Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Networking
              </Typography>
              <Typography my={4} sx={{ fontSize: "13px" }}>
                Faciliter la mise en réseau “networking” entre les organisations
                situées en Afrique et les experts et entrepreneurs africains et
                internationaux.
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={2}
            sx={{
              borderColor: `1px solid black`,
              borderRadius: "108px, 108px, 0px, 0px",
            }}
          >
            <Box
              sx={{
                borderRadius: "108px 108px 0 0",
                border: `1px solid var(--textRed)`,
                height: "270px",
              }}
            >
              <Typography my={3}>02</Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Partage
              </Typography>
              <Typography my={4} sx={{ fontSize: "13px" }}>
                Promouvoir le partage de connaissances et d’expertises.
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={2}
            sx={{
              borderColor: `1px solid black`,
              borderRadius: "108px, 108px, 0px, 0px",
            }}
          >
            <Box
              sx={{
                borderRadius: "108px 108px 0 0",
                border: `1px solid var(--textRed)`,
                height: "270px",
              }}
            >
              <Typography my={3}>03</Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Recrutement
              </Typography>
              <Typography my={4} sx={{ fontSize: "13px" }}>
                Augmenter la visibilité des offres d’emploi en Afrique et
                faciliter le recrutement de professionnels qualifiés.
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={2}
            sx={{
              borderColor: `1px solid black`,
              borderRadius: "108px, 108px, 0px, 0px",
            }}
          >
            <Box
              sx={{
                borderRadius: "108px 108px 0 0",
                border: `1px solid var(--textRed)`,
                height: "270px",
              }}
            >
              <Typography my={3}>04</Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Collaborations
              </Typography>
              <Typography my={4} sx={{ fontSize: "13px" }}>
                Créer des opportunités de collaborations en Afrique.
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={2}
            sx={{
              borderColor: `1px solid black`,
              borderRadius: "108px, 108px, 0px, 0px",
            }}
          >
            <Box
              sx={{
                borderRadius: "108px 108px 0 0",
                border: `1px solid var(--textRed)`,
                height: "270px",
              }}
            >
              <Typography my={3}>05</Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Evénements
              </Typography>
              <Typography my={4} sx={{ fontSize: "13px" }}>
                Augmenter la visibilité des évenements autour du “Business in
                Africa”.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Block2;
