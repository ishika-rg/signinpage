import React from "react";
import home1 from "../assests/home1.png";
import Block2 from "../components/Block2";
import Block3 from "../components/Block3";
import Block4 from "../components/Block4";
import Block5 from "../components/Block5";
import Block6 from "../components/Block6";
import Block7 from "../components/Block7";

import { Box, Grid, Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#F5F1ED", padding: "20px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "12px" }}>EN - FR</Typography>
          <Typography> Bienvenue sur PONDA</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography mr={3} sx={{ fontSize: "12px" }}>
              Créer un compte
            </Typography>
            <Typography sx={{ fontSize: "12px" }}>Se connecter</Typography>
          </Box>
        </Box>

        <Box
          mx={5}
          p={5}
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "12px" }}> missions de pANDA</Typography>
          <Typography sx={{ fontSize: "12px" }}> Fonctionnalités</Typography>
          <Typography sx={{ fontSize: "12px" }}>experts</Typography>
          <Typography sx={{ fontSize: "12px" }}>
            organisations en Afrique
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>Offres d'emploi</Typography>
          <Typography sx={{ fontSize: "12px" }}>Evénements à venir</Typography>
          <Typography sx={{ fontSize: "12px" }}> Témoignages</Typography>
          <Typography sx={{ fontSize: "12px" }}>Fondateurs</Typography>
        </Box>

        <Box>
          <Typography variant="h3" mx={5} px={5}>
            Nous réunissons experts du monde entier et organisations en Afrique
          </Typography>

          <Grid
            container
            mt={4}
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ textAlign: "left", opacity: "0.6" }}
          >
            <Grid item xs={12} md={4}>
              <Typography
                variant="h4"
                sx={{ textAlign: "left", color: " #A95454" }}
              >
                Organisations en Afrique
              </Typography>
              <Typography
                pt={4}
                pr={4}
                sx={{ color: "#1F1F1F", fontSize: "12px" }}
              >
                Vous êtes une entreprise privée ou publique basée en Afrique et
                vous avez du mal à recruter des profils expérimentés? Vous êtes
                une start-up africaine et vous souhaitez faire appel aux
                services d'un prestataire externe? Vous recherchez une expertise
                spécifique pour réaliser un futur projet? Grâce à son réseau,
                PANDA vous aide à trouver les experts dont vous avez besoin!
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <img src={home1} style={{ width: "100%", height: "100%" }} />
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography
                variant="h4"
                pl={4}
                sx={{ textAlign: "left", color: " #A95454" }}
              >
                Experts
              </Typography>
              <Typography
                pt={4}
                pl={4}
                sx={{ color: "#1F1F1F", fontSize: "12px" }}
              >
                Vous êtes un professionnel expérimenté et vous planifiez de
                partir travailler en Afrique? Vous vous rendez souvent sur le
                continent africain pour des raisons professionnelles et vous
                souhaitez étendre votre réseau? Vous souhaitez partager votre
                expertise avec des organisations africaines sans vous déplacer?
                PANDA est la plateforme de networking des experts pour la
                réalisation de leurs projets professionnels sur le continent
                africain!
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Block2 />
        <Block3 />
        <Block4 />
        <Block5 />
        <Block6 />
        <Block7 />
      </Box>
    </>
  );
};

export default Home;
