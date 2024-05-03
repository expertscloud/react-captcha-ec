import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import {
  loadCaptchaEnginge,
  validateCaptcha,
  LoadCanvasTemplate,
} from "react-simple-captcha";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DropDownButton from "./components/DropDownButton";
import {
  backGroundColors,
  captchaTypes,
  fontColors,
  lengthOfCaptcha,
} from "./constants";

const Recapcha = () => {
  const [userInput, setUserInput] = useState("");
  const [isError, setIsError] = useState(false);
  const [verified, setVerified] = useState(null);
  const [backGroundColor, setBackGroundColor] = useState("white");
  const [fontColor, setFontColor] = useState("blue");
  const [numChars, setNumChars] = useState(10);
  const [captchaType, setCaptchaType] = useState("special_char");

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
          width: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          my: "auto",
        }}>
        <Grid container spacing={2} justifyContent="space-between" my={4}>
          <Grid item xs={12} md={3}>
            <DropDownButton
              selectedValue={backGroundColor}
              setSelectedValue={setBackGroundColor}
              data={backGroundColors.values}
              buttonName={backGroundColors.buttonText}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DropDownButton
              selectedValue={fontColor}
              setSelectedValue={setFontColor}
              data={fontColors.values}
              buttonName={fontColors.buttonText}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DropDownButton
              selectedValue={numChars}
              setSelectedValue={setNumChars}
              data={lengthOfCaptcha.values}
              buttonName={lengthOfCaptcha.buttonText}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DropDownButton
              selectedValue={captchaType}
              setSelectedValue={setCaptchaType}
              data={captchaTypes.values}
              buttonName={captchaTypes.buttonText}
            />
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
            <LoadCanvasTemplate />
            <TextField
              value={userInput}
              onChange={handleInputChange}
              sx={{ mt: 1 }}
            />
            <Button variant="contained" sx={{ mt: 2 }} onClick={handleVerify}>
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
