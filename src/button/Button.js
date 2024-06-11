import React from "react";
import Button from "@material-ui/core/Button";
import { styled } from '@mui/material/styles';

const BootstrapButton = styled("button")({    
    fontSize: 16,
    padding: "6px 12px",
    cursor: "pointer"
  });

const ReusableButton = ({ name, selected, children, setSelected }) => {
  return (
    <BootstrapButton
      name={name}
      className={name === selected ? "active" : ""}
      onClick={e => setSelected(e.target.name)}
    >
      {children}
    </BootstrapButton>
  );
};

export default ReusableButton;
