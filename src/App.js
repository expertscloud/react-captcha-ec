import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const wrapperStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const Recapcha = () => {
  const [userInput, setUserInput] = useState("");
  const [isError, setIsError] = useState(false);
  const [verified, setVerified] = useState(null);
  useEffect(() => {
    loadCaptchaEnginge(6, "silver", "black");
  }, []);

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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}>
      <Box sx={{ height: "150px", width: "auto" }}>
        <Box
          sx={
            !verified
              ? { ...wrapperStyles, alignItems: "flex-start" }
              : wrapperStyles
          }>
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
    </Box>
  );
};

export default Recapcha;
