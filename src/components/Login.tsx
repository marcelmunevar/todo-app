import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function Login() {
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

            "&:hover": {
              boxShadow:
                "0 12px 32px 0 rgba(255,255,255,0.12), 0 1.5px 6px rgba(0,0,0,0.25)",
            },
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h3" component="h1">
              Sign in
            </Typography>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />
            <TextField id="outlined-basic" label="Password" type="password" />
          </Stack>
        </Box>
      </Container>
    </Container>
  );
}
export default Login;
