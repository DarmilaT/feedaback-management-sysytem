import {
  InputAdornment,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  Grid,
  Paper,
  Box,
} from "@mui/material";
import React from "react";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth, db } from "../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [student, setStudent] = useState(null);
  const signIn = async () => {
    console.log(email, password);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      // Query Firestore to find student by email
      const q = query(collection(db, "students"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // If a document with matching email is found, update student state
        querySnapshot.forEach((doc) => {
          const studentData = doc.data();

          setStudent(studentData);
          console.log(doc);
        });
      } else {
        console.log("MA login");
        setStudent(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczY0LXJvYjgzMTktbWludHktMTEuanBn.jpg)",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        style={{ backgroundColor: "#fef7dd" }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h3" className="font-bold mb-4">
            Welcome
          </Typography>
          <div className="flex items-center mb-8">
            <Typography component="h1" variant="h4" className="mt-4 mb-2">
              Feedback Management System
            </Typography>
          </div>
          <div>
            <TextField
              id="input-with-icon-id"
              label={
                <span className="text-black font-bold font-mono text-2xl">
                  Email ID
                </span>
              }
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BadgeOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              className="mb-8"
              placeholder="########"
              sx={{
                "& .MuiInput-underline:after": {
                  borderBottomColor: "Orange", // Change underline color to red
                },
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="input-with-icon-password"
              label={
                <span className="text-black font-bold font-mono text-2xl">
                  Password
                </span>
              }
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PasswordOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              className="mb-none"
              placeholder="********"
              sx={{
                "& .MuiInput-underline:after": {
                  borderBottomColor: "Orange", // Change underline color to red
                },
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              variant="contained"
              fullWidth
              className="h-10 p-6 mt-3 font-semibold rounded-md bg-amber-400 text-black hover:bg-amber-300"
              onClick={signIn}
            >
              Login
            </Button>
          </div>
          <Grid container justifyContent="flex-end">
            <Grid item>
              {/* <Link to="/register">Don't have an account? Sign up</Link> */}
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default LoginPage;
