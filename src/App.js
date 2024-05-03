import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  FormControl,
  Select,
  Grid,
  Divider,
  InputLabel,
} from "@mui/material";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Recapcha = () => {
  const [userInput, setUserInput] = useState("");
  const [isError, setIsError] = useState(false);
  const [verified, setVerified] = useState(null);
  const [backGroundColor, setBackGroundColor] = useState("white");
  const [fontColor, setFontColor] = useState("blue");
  const [numChars, setNumChars] = useState(6);
  const [captchaType, setCaptchaType] = useState("upper");

  useEffect(() => {
    loadCaptchaEnginge(numChars, backGroundColor, fontColor, captchaType);
  }, [numChars, fontColor, captchaType, backGroundColor]);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleVerify = () => {
    const result = validateCaptcha(userInput, false);
    if (result) {
      setVerified(true);
    } else {
      setIsError(true);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#f5f5f5",
      }}>
      <Box
        sx={{
          width: "40%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          my: "auto",
        }}>
        <Grid container spacing={2} justifyContent="space-between" my={2}>
          <Grid item xs={12} md={3}>
            <FormControl sx={{ marginBottom: "1rem" }} fullWidth>
              <InputLabel id="font-color-select-label">
                Background Color
              </InputLabel>
              <Select
                value={backGroundColor}
                onChange={(e) => setBackGroundColor(e.target.value)}
                displayEmpty>
                <MenuItem value="grey">Grey</MenuItem>
                <MenuItem value="red">Red</MenuItem>
                <MenuItem value="silver">Silver</MenuItem>
                <MenuItem value="blue">Blue</MenuItem>
                <MenuItem value="green">Green</MenuItem>
                <Divider />
                <MenuItem value="white">White</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl sx={{ marginBottom: "1rem" }} fullWidth>
              <InputLabel id="font-color-select-label">Font Color</InputLabel>
              <Select
                value={fontColor}
                onChange={(e) => setFontColor(e.target.value)}
                displayEmpty>
                <MenuItem value="white">White</MenuItem>
                <MenuItem value="grey">Grey</MenuItem>
                <MenuItem value="red">Red</MenuItem>
                <MenuItem value="silver">Silver</MenuItem>
                <MenuItem value="green">Green</MenuItem>
                <Divider />
                <MenuItem value="blue">Blue</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl sx={{ marginBottom: "1rem" }} fullWidth>
              <InputLabel id="font-color-select-label">
                Set Char Number
              </InputLabel>
              <Select
                value={numChars}
                onChange={(e) => setNumChars(e.target.value)}
                displayEmpty>
                <MenuItem value={8}>8 Characters</MenuItem>
                <MenuItem value={10}>10 Characters</MenuItem>
                <Divider />
                <MenuItem value={6}>6 Characters</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl sx={{ marginBottom: "1rem" }} fullWidth>
              <InputLabel id="font-color-select-label">
                Set captcha Type
              </InputLabel>
              <Select
                value={captchaType}
                onChange={(e) => setCaptchaType(e.target.value)}>
                <MenuItem value="special_char">special characters</MenuItem>
                <MenuItem value="lower">Lowercase Letters</MenuItem>
                <MenuItem value="numbers">Numbers</MenuItem>
                <Divider />
                <MenuItem value="upper">Uppercase Letters</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        {verified ? (
          <>
            <CheckCircleIcon
              color="success"
              sx={{ height: "100px", width: "100px" }}
            />
            <Typography
              variant="body1"
              sx={{ fontSize: "20px", textAlign: "center" }}>
              Verified
            </Typography>
          </>
        ) : (
          <>
            <LoadCanvasTemplateNoReload />
            <TextField value={userInput} onChange={handleInputChange} />
            <Button variant="contained" sx={{ mt: 1 }} onClick={handleVerify}>
              Verify
            </Button>
            {isError && (
              <p style={{ color: "red" }}>
                Incorrect reCAPTCHA. Please try again.
              </p>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default Recapcha;
