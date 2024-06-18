import { useState } from "react";
import { Popover } from "@material-ui/core/";
import AccordionContainer from "./AccordionContainer";

const PopoverContainer = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <span
        aria-describedby={id}
        onClick={handleClick}
        className="popover_button"
      >
        <i class="fas fa-bars"></i>
      </span>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <AccordionContainer />
      </Popover>
    </>
  );
};

export default PopoverContainer;
