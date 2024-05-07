import React, { useState } from "react";
import {
  Button,
  ListItem,
  ListItemText,
  List,
  Menu,
  Divider,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { styled } from "@mui/material/styles";
import { buttonTexts } from "../constants";

const StyledButton = styled(Button)({
  width: "100%",
});

const StyledMenu = styled(Menu)({
  "& .MuiList-root": {
    width: "200px",
  },
});

const StyledListItem = styled(ListItem)({
  padding: 0,
  height: "39px",
});

const StyledListItemText = styled(ListItemText)({
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  margin: "0 10px",
});

const DropDownButton = ({ keyValue, setSelectedValue, options }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedValue(option.value);
    setAnchorEl(null);
  };

  return (
    <>
      <StyledButton
        variant="contained"
        fullWidth
        endIcon={<ArrowDropDownIcon />}
        onClick={(event) => setAnchorEl(event.currentTarget)}>
        {buttonTexts[keyValue]}
      </StyledButton>

      {anchorEl ? (
        <StyledMenu
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
            {options.map((option, i) => (
              <StyledListItem
                button
                key={i}
                onClick={() => handleOptionClick(option)}>
                <StyledListItemText
                  primary={
                    <>
                      {option.default && (
                        <Divider sx={{ mb: 1, border: "1px solid gray" }} />
                      )}
                      {option.label}
                    </>
                  }
                />
              </StyledListItem>
            ))}
          </List>
        </StyledMenu>
      ) : null}
    </>
  );
};

export default DropDownButton;
