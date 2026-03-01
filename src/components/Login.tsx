import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

function Login() {
  return (
    <Container maxWidth="sm">
      <Stack spacing={2}>
        <h1>Sign in</h1>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-basic" label="Password" type="password" />
      </Stack>
    </Container>
  );
}
export default Login;
