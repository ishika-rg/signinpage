import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Block7 = () => {
  return (
    <>
      <Box>
        <Typography variant="h3" mx={5} px={5}>
          Rejoignez notre communauté et aidez-nous à construire la première
          plateforme de networking en ligne à destination du marché africain!
        </Typography>
        <Box
          display="flex"
          justifyContent={"center"}
          alignItems="center"
          my={5}
        >
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
            Se connecter
          </Button>

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
            Créer un compte
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Block7;
