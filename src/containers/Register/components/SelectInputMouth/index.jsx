import React from "react";
// import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

Select_Input_Mouth.propTypes = {};

const currencies = [
  {
    value: "0",
    label: "Tháng",
  },
  {
    value: "1",
    label: "Tháng Một",
  },
  {
    value: "2",
    label: "Tháng Hai",
  },
  {
    value: "3",
    label: "Tháng Ba",
  },
  {
    value: "4",
    label: "Tháng Bốn",
  },
  {
    value: "5",
    label: "Tháng Năm",
  },
  {
    value: "6",
    label: "Tháng Sáu",
  },
  {
    value: "7",
    label: "Tháng Bảy",
  },
  {
    value: "8",
    label: "Tháng Tám",
  },
  {
    value: "9",
    label: "Tháng Chín",
  },
  {
    value: "10",
    label: "Tháng Mười",
  },
  {
    value: "11",
    label: "Tháng Mười Một",
  },
  {
    value: "12",
    label: "Tháng Mười Hai",
  },
];

function Select_Input_Mouth(props) {
  const [currency, setCurrency] = React.useState("0");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="select-input-main">
      <TextField
        id="standard-select-currency"
        select
        label="Sinh nhật (Tháng)"
        value={currency}
        onChange={handleChange}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}

export default Select_Input_Mouth;
