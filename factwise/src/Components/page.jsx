/** @format */

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import celebrities from "../celebrities.json";
import { Avatar, TextField } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [{ celebrities }];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <div>
        <p style={{ fontSize: "40px", fontWeight: "500" }}>
          FactWise Assessment Visual Reference
        </p>
        <div>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "500",
              marginRight: "340px",
            }}
          >
            Closed state
          </p>
        </div>
      </div>
      <FormControl sx={{ m: 1, width: 450 }}>
        <InputLabel id="demo-multiple-name-label">
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYE_aNqsGtbwttp1n64aEMSWmHK3-if-s28w&usqp=CAU"
          />
        </InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {celebrities.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name.first}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "500",
          marginRight: "340px",
        }}
      >
        Open State
      </p>
      {/* OPEN STATE */}

      <div>
        <div
          style={{
            border: "1px solid lightgrey",
            width: "460px",
            height: "400px",
            margin: "auto",
            borderRadius: "10px",
          }}
        >
          <div>
            <span>
              <h3 style={{ marginRight: "200px", fontSize: "20px" }}>
                {" "}
                <Avatar
                  alt="Remy Sharp"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYE_aNqsGtbwttp1n64aEMSWmHK3-if-s28w&usqp=CAU"
                />
                Aidan
              </h3>
            </span>
          </div>
          <div>
            <div style={{ marginRight: "320px" }}>
              Age
              <div>19 Year</div>
            </div>
            <div style={{ marginRight: "50px" }}>
              Gender
              <div>Rather not say</div>
            </div>
            <div style={{ marginLeft: "300px", paddingBottom: "50px" }}>
              Country
              <div>India</div>
            </div>
          </div>
          <div
            style={{
              marginRight: "320px",
            }}
          >
            Description
            <div
              style={{
                paddingTop: "20px",

                width: "400px",
                height: "50px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              quaerat possimus alias cumque at saepe doloremque Voluptatem,
              nisi!
            </div>
          </div>
        </div>
      </div>

      {/* STATE */}
      <p
        style={{
          fontSize: "20px",
          fontWeight: "500",
          marginRight: "340px",
        }}
      >
        Edit State
      </p>
      <div style={{ paddingTop: "50px" }}>
        <div
          style={{
            border: "1px solid lightgrey",
            width: "460px",
            height: "400px",
            margin: "auto",
            borderRadius: "10px",
          }}
        >
          <div>
            <span>
              <h3 style={{ marginRight: "200px", fontSize: "20px" }}>
                {" "}
                <Avatar
                  alt="Remy Sharp"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYE_aNqsGtbwttp1n64aEMSWmHK3-if-s28w&usqp=CAU"
                />
                Aidan
              </h3>
            </span>
          </div>
          <div>
            <div style={{ marginRight: "320px" }}>
              Age
              <div
                style={{ border: "1px solid lightgrey", borderRadius: "10px" }}
              >
                19 Year
              </div>
            </div>
            <div style={{ marginRight: "50px" }}>
              Gender
              <div
                style={{ border: "1px solid lightgrey", borderRadius: "100px" }}
              >
                Rather not say
              </div>
            </div>
            <div style={{ marginLeft: "300px", paddingBottom: "50px" }}>
              Country
              <div
                style={{ border: "1px solid lightgrey", borderRadius: "10px" }}
              >
                India
              </div>
            </div>
          </div>
          <div
            style={{
              marginRight: "320px",
            }}
          >
            Description
            <div
              style={{
                paddingTop: "20px",

                width: "400px",
                height: "65px",
                border: "1px solid lightgrey",
                borderRadius: "10px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              quaerat possimus alias cumque at saepe doloremque Voluptatem,
              nisi!
            </div>
          </div>
        </div>
      </div>

      {/* DELETE */}
      <p
        style={{
          fontSize: "20px",
          fontWeight: "500",
          marginRight: "300px",
        }}
      >
        Delete dialog box
      </p>
      <div style={{ paddingTop: "50px" }}>
        <div
          style={{
            border: "1px solid lightgrey",
            width: "460px",
            height: "80px",
            margin: "auto",
            borderRadius: "10px",
          }}
        >
          Are you sure you want to delete?
          <div>
            {" "}
            <button
              style={{ backgroundColor: "red", borderBlockColor: "lightgrey" }}
            >
              Delete
            </button>
            <button
              style={{
                backgroundColor: "white",
                borderBlockColor: "lightgrey",
                marginLeft: "40px",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      {/* LISTVIEW */}

      <div>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "500",
            marginRight: "350px",
          }}
        >
          List View
        </p>
        <TextField
          sx={{ m: 1, width: 450 }}
          id="outlined-basic"
          label="Search"
          variant="outlined"
        />
      </div>
      {/* first label */}

      <div>
        <FormControl sx={{ m: 1, width: 450 }}>
          <InputLabel id="demo-multiple-name-label">
            <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYE_aNqsGtbwttp1n64aEMSWmHK3-if-s28w&usqp=CAU"
            />
          </InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {celebrities.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name.first}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <FormControl sx={{ m: 1, width: 450 }}>
        <InputLabel id="demo-multiple-name-label">
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYE_aNqsGtbwttp1n64aEMSWmHK3-if-s28w&usqp=CAU"
          />
        </InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {celebrities.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name.first}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* secong label */}
      <div>
        <FormControl sx={{ m: 1, width: 450 }}>
          <InputLabel id="demo-multiple-name-label">
            <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYE_aNqsGtbwttp1n64aEMSWmHK3-if-s28w&usqp=CAU"
            />
          </InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {celebrities.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name.first}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {/* last label */}

      <FormControl sx={{ m: 1, width: 450 }}>
        <InputLabel id="demo-multiple-name-label">
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYE_aNqsGtbwttp1n64aEMSWmHK3-if-s28w&usqp=CAU"
          />
        </InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {celebrities.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name.first}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
