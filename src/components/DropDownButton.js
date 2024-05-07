import { useCallback, useState } from "react";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { styled } from "@mui/material/styles";
import { buttonTexts, captchaOptions } from "../constants";

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

const DropDownButton = ({ buttonKey, selectedvalue, setValue }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOptionClick = useCallback(
    (option) => {
      setValue((prevVal) => ({ ...prevVal, [buttonKey]: option.value }));
      setAnchorEl(null);
    },
    [setValue, setAnchorEl, buttonKey]
  );

  return (
    <>
      <Button
        variant="contained"
        endIcon={<ArrowDropDownIcon />}
        onClick={(event) => setAnchorEl(event.currentTarget)}>
        {buttonTexts[buttonKey]}
      </Button>

      {anchorEl ? (
        <StyledMenu
          anchorEl={anchorEl}
          open={true}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}>
          <List sx={{ padding: 0 }}>
            {captchaOptions[buttonKey].map((option, i) => (
              <StyledListItem
                button
                key={i}
                selected={option.value === selectedvalue}
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
