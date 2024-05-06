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

// Styled components
const StyledButton = styled(Button)({
  width: "100%",
});

const StyledMenu = styled(Menu)({
  "& .MuiList-root": {
    width: "200px", // Adjust the width as needed
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
      <StyledButton
        variant="contained"
        fullWidth
        endIcon={<ArrowDropDownIcon />}
        onClick={(event) => setAnchorEl(event.currentTarget)}>
        {buttonName}
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
            {data?.map((option, i) => (
              <StyledListItem
                button
                key={i}
                selected={option.value === selectedValue}
                onClick={() => handleOptionClick(option)}>
                <StyledListItemText
                  primary={
                    <>
                      {option?.default && (
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
