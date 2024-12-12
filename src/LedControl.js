import React, { useState } from "react";
import { db, ref, push } from "./firebaseConfig";
import {
  Box,
  Slider,
  Typography,
  Container,
  Paper,
  Button,
} from "@mui/material";

const LedControl = () => {
  const [brightness, setBrightness] = useState(0);

  const handleChange = (e, value) => {
    setBrightness(value);

    // Push data to Firebase
    push(ref(db, "ledBrightnessHistory"), {
      brightness: value === 0 ? 0 : Math.min(value, 255), // Brightness từ 0 đến 255
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Paper elevation={3} style={{ padding: "30px", textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          LED Brightness Control
        </Typography>
        <Box style={{ margin: "30px 0" }}>
          <Typography variant="h6">Adjust Brightness</Typography>
          <Slider
            value={brightness}
            onChange={handleChange}
            min={0}
            max={255}
            step={1}
            style={{ color: "#3f51b5" }}
          />
          <Typography variant="body1" style={{ marginTop: "10px" }}>
            Current Brightness: <strong>{brightness}</strong>
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => alert("Brightness setting saved!")}>
          Save Settings
        </Button>
      </Paper>
    </Container>
  );
};

export default LedControl;
