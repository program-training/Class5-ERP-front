import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { S1 } from "./signUpFeatures/Style";
import {
  TopPage,
  Fields,
  Sub_button,
  Bottom_links,
  Copyright,
} from "./signUpFeatures/Components";
import { handleSubmit } from "./signUpFeatures/Validitions";
const defaultTheme = createTheme();

export function SignUp() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={S1}>
          <TopPage />
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Fields />
            </Grid>

            <Sub_button />
            <Bottom_links />
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
