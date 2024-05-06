import React, { useState } from "react";
import {
  List,
  Menu,
  Button,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const DropDownButton = ({
  selectedValue,
  setSelectedValue,
  data,
  buttonName,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedValue(option.value);
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        variant="contained"
        fullWidth
        endIcon={<ArrowDropDownIcon />}
        onClick={(event) => setAnchorEl(event.currentTarget)}>
        {buttonName}
      </Button>

      {anchorEl ? (
        <Menu
          sx={{
            "& .MuiList-root": {
              width: "100%",
            },
          }}
          anchorEl={anchorEl}
          open={true}
          onClose={() => setAnchorEl(null)}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}>
          <List sx={{ padding: 0 }}>
            {data?.map((option, i) => (
              <ListItem
                button
                key={i}
                sx={{ padding: 0, height: "39px" }}
                selected={option.value === selectedValue}
                onClick={() => handleOptionClick(option)}>
                <ListItemText
                  primary={
                    <p
                      style={{
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        margin: "0 10px",
                      }}>
                      {option?.default ? (
                        <Divider sx={{ mb: 1, border: "1px solid gray" }} />
                      ) : null}
                      {option.label}
                    </p>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Menu>
      ) : null}
    </>
  );
};

export default DropDownButton;
