import React, { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {
  loadCaptchaEnginge,
  validateCaptcha,
  LoadCanvasTemplate,
} from "react-simple-captcha";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DropDownButton from "./components/DropDownButton";
import { captchaOptions } from "./constants";

const Recapcha = () => {
  const [captchaSettings, setCaptchaSettings] = useState({
    backGroundColor: captchaOptions["backGroundColor"][5].value,
    fontColor: captchaOptions["fontColor"][5].value,
    numberOfChars: captchaOptions["numberOfChars"][3].value,
    captchaType: captchaOptions["captchaType"][3].value,
  });
  const [userInput, setUserInput] = useState("");
  const [isError, setIsError] = useState(false);
  const [isVerified, setIsVerified] = useState(null);

  useEffect(() => {
    loadCaptchaEnginge(
      captchaSettings.numberOfChars,
      captchaSettings.backGroundColor,
      captchaSettings.fontColor,
      captchaSettings.captchaType
    );
  }, [captchaSettings]);

  const handleInputChange = useCallback((event) => {
    setUserInput(event.target.value);
  }, []);

  const handleVerify = useCallback(() => {
    const result = validateCaptcha(userInput, false);
    if (result) {
      setIsVerified(true);
    } else {
      setIsError(true);
    }
  }, [userInput]);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        flexDirection: "column",
      }}>
      <Grid container spacing={2} my={4} justifyContent="center">
        {Object.keys(captchaOptions).map((buttonKey) => (
          <Grid
            container
            item
            xs={12}
            md="auto"
            key={buttonKey}
            justifyContent="center">
            <DropDownButton
              buttonKey={buttonKey}
              selectedvalue={captchaSettings[buttonKey]}
              setValue={setCaptchaSettings}
            />
          </Grid>
        ))}
      </Grid>
      {isVerified ? (
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
            sx={{ mt: 3 }}
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
  );
};

export default Recapcha;
