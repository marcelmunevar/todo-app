import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import NextLink from "next/link";
import { signUpNewUser } from "@/utils/supabaseClient";

function Signup() {
  //set up usestate for username and password
  //add onchange to text fields
  //write handlesignup
  //add handlesignup to button

  return (
    <Container maxWidth="lg" sx={{ padding: "2rem" }}>
      <Container maxWidth="sm">
        <Box
          sx={{
            boxShadow: 3,
            borderRadius: 1,
            border: "1px solid",
            padding: "2rem",
            transition: "box-shadow 0.3s ease",
            textAlign: "center",

            "&:hover": {
              boxShadow:
                "0 12px 32px 0 rgba(255,255,255,0.12), 0 1.5px 6px rgba(0,0,0,0.25)",
            },
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h5" component="h1">
              Sign up
            </Typography>
            <Box>
              <Typography sx={{ mb: 2 }}>
                Welcome user, please sign up to continue
              </Typography>
            </Box>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />
            <TextField id="outlined-basic" label="Password" type="password" />
            <Button variant="contained">Sign Up</Button>
            <Typography sx={{ mb: 2 }}>
              Already a user?
              <NextLink href="/" passHref>
                <Button variant="text">Sign In</Button>
              </NextLink>
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Container>
  );
}
export default Signup;
