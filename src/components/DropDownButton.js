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
import { makeStyles } from "@mui/styles";

const DropDownButton = ({
  selectedValue,
  setSelectedValue,
  data,
  buttonName,
}) => {
  const classes = useStyles();
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
          className={classes.menuContainer}
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
          <List className={classes.root}>
            {data?.map((option, i) => (
              <ListItem
                button
                key={i}
                className={classes.nested}
                selected={option.value === selectedValue}
                onClick={() => handleOptionClick(option)}>
                <ListItemText
                  primary={
                    <p className={classes.listItemLabel}>
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

const useStyles = makeStyles(() => ({
  menuContainer: {
    "& .MuiList-root": {
      width: "100%",
    },
  },
  root: {
    padding: "0",
  },
  nested: {
    padding: 0,
    height: "39px",
  },
  listItemLabel: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    margin: "0 10px",
  },
}));
