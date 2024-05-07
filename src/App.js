import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import {
  loadCaptchaEnginge,
  validateCaptcha,
  LoadCanvasTemplate,
} from "react-simple-captcha";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DropDownButton from "./components/DropDownButton";
import { captchaOptions, buttonTexts } from "./constants";

const Recapcha = () => {
  const [captchaSettings, setCaptchaSettings] = useState({
    backGroundColor: "white",
    fontColor: "blue",
    numChars: 10,
    captchaType: "special_char",
  });
  const [userInput, setUserInput] = useState("");
  const [isError, setIsError] = useState(false);
  const [isVerified, setIsVerified] = useState(null);

  useEffect(() => {
    loadCaptchaEnginge(
      captchaSettings.numChars,
      captchaSettings.backGroundColor,
      captchaSettings.fontColor,
      captchaSettings.captchaType
    );
  }, [captchaSettings]);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleVerify = () => {
    const result = validateCaptcha(userInput, false);
    if (result) {
      setIsVerified(true);
    } else {
      setIsError(true);
    }
  };

  const handleSettingChange = (key, value) => {
    setCaptchaSettings((prevSettings) => ({
      ...prevSettings,
      [key]: value,
    }));
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
          {Object.keys(captchaOptions).map((optionType) => (
            <Grid item xs={12} md={3} key={optionType}>
              <DropDownButton
                selectedValue={captchaSettings[optionType]}
                setSelectedValue={(value) =>
                  handleSettingChange(optionType, value)
                }
                options={captchaOptions[optionType]}
                buttonType={buttonTexts[optionType]}
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
    </Box>
  );
};

export default Recapcha;
