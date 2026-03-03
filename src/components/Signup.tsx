"use client";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import NextLink from "next/link";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

async function signUpNewUser(email: string, password: string) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: "http://localhost:3000/welcome",
    },
  });
}

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async () => {
    try {
      await signUpNewUser(email, password);
      setError(null);
    } catch (e) {
      setError("Signup failed!");
    }
  };

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
            <Typography variant="caption" color="error" component="p">
              {error}
            </Typography>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(event.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              type="password"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(event.target.value);
              }}
            />
            <Button variant="contained" onClick={handleSignup}>
              Sign Up
            </Button>
            <Typography sx={{ mb: 2 }} component="p">
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
