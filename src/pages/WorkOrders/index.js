import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Header2 from "../../components/Header2";
import { styled } from "@mui/material/styles";
import { Delete, Edit } from "@mui/icons-material";
import EditOrderDialog from "./EditOrder";
import DeleteWODialog from "./DeleteWODialog";
import NewOrderDialog from "./NewOrder";

const Container = styled(Box)`
  width: 100vw;
  height: 100%;
  background: #fff;
  padding-top: 5rem;
`;

const StyledButton = styled(Button)`
  &:hover {
    background-color: #02a3ff;
  }
  color: #fff;
  text-transform: none;
  background: var(--unnamed-color-02a3ff) 0% 0% no-repeat padding-box;
  background: #02a3ff 0% 0% no-repeat padding-box;
  border-radius: 5px;
  margin-left: 1.5rem;
`;

const CustomInput = styled(TextField)({
  "& .MuiOutlinedInput-input": {
    color: "black",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#00000029",
    },
    "&:hover fieldset": {
      borderColor: "#00000029",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00000029",
    },
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    borderBottom: "1px solid #E5E5E5",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: theme.palette.common.white,
    color: "gray",
    borderBottom: "none",
  },
}));

const CustomAvatar = styled(Avatar)`
  margin-right: 1rem;
  width: 20px;
  height: 20px;
  font-size: 12px;
  color: #fff;
  background: black;
`;

function createData(orderNum, Name, ID, minDate, maxDate) {
  return { orderNum, Name, ID, minDate, maxDate };
}

const rows = [
  createData(
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <CustomAvatar>1</CustomAvatar>
      123451
    </Box>,
    "Montreal, QC",
    "34FG87nm",
    "2022-06-02",
    "2022-06-03"
  ),
  createData(
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <CustomAvatar>1</CustomAvatar>
      123451
    </Box>,
    "Montreal, QC",
    "34FG87nm",
    "2022-06-02",
    "2022-06-03"
  ),
  createData(
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <CustomAvatar>1</CustomAvatar>
      123451
    </Box>,
    "Montreal, QC",
    "34FG87nm",
    "2022-06-02",
    "2022-06-03"
  ),
  createData(
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <CustomAvatar>1</CustomAvatar>
      123451
    </Box>,
    "Montreal, QC",
    "34FG87nm",
    "2022-06-02",
    "2022-06-03"
  ),
  createData(
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <CustomAvatar>1</CustomAvatar>
      123451
    </Box>,
    "Montreal, QC",
    "34FG87nm",
    "2022-06-02",
    "2022-06-03"
  ),
  createData(
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <CustomAvatar>1</CustomAvatar>
      123451
    </Box>,
    "Montreal, QC",
    "34FG87nm",
    "2022-06-02",
    "2022-06-03"
  ),
];

function WorkOrders() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialog2Open, setDialog2Open] = useState(false);
  const [popOpen, setPopOpen] = useState(false);

  const handlePopOpen = () => {
    setPopOpen(true);
  };
  const handlePopClose = () => {
    setPopOpen(false);
  };

  const handleOpen = () => {
    setDialogOpen(true);
  };
  const handleClose = () => {
    setDialogOpen(false);
  };

  const handle2Open = () => {
    setDialog2Open(true);
  };
  const handle2Close = () => {
    setDialog2Open(false);
  };

  return (
    <Container>
      <Header2 />
      <Box sx={{ height: "50px", width: "100%" }}>
        <Typography sx={{ color: "#969696", ml: 3, mt: 1 }}>Admin</Typography>
      </Box>
      <Divider
        sx={{
          background: "#969696",
          borderBottomWidth: "inherit",
          height: "0.5px",
        }}
      />
      <Box
        sx={{
          mt: 5,
          ml: 5,
          mr: 5,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "black", fontWeight: "bold", mt: "4px" }}
          >
            Work Order
          </Typography>
          <NewOrderDialog open={dialog2Open} onClose={handle2Close} />
          <StyledButton variant="primary" onClick={handle2Open}>
            Add New
          </StyledButton>
        </Box>
        <Box sx={{ display: "flex" }}>
          <CustomInput placeholder="Search for work number" size="small" />
          <Button
            sx={{ textTransform: "none", ml: 1, color: "#1B90FA" }}
            variant="outlined"
            color="primary"
          >
            Search
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          mr: 5,
          ml: 5,
          mt: 5,
          height: "550px",
          border: "1px solid gray",
          position: "relative",
        }}
      >
        <Table>
          <TableHead>
            <StyledTableCell component={"th"} align="left">
              Work Order Num
            </StyledTableCell>
            <StyledTableCell component={"th"} align="left">
              Location Name
            </StyledTableCell>
            <StyledTableCell component={"th"} align="left">
              Location ID
            </StyledTableCell>
            <StyledTableCell component={"th"} align="left">
              Min. Start Date
            </StyledTableCell>
            <StyledTableCell component={"th"} align="left">
              Max. Start Date
            </StyledTableCell>
            <StyledTableCell
              component={"th"}
              sx={{ width: "300px" }}
              align="right"
            ></StyledTableCell>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <StyledTableCell component={"td"} scope="row">
                  {row.orderNum}
                </StyledTableCell>
                <StyledTableCell component={"td"} align="left">
                  {" "}
                  {row.Name}{" "}
                </StyledTableCell>
                <StyledTableCell component={"td"} align="left">
                  {" "}
                  {row.ID}{" "}
                </StyledTableCell>
                <StyledTableCell component={"td"} align="left">
                  {" "}
                  {row.minDate}{" "}
                </StyledTableCell>
                <StyledTableCell component={"td"} align="left">
                  {" "}
                  {row.maxDate}{" "}
                </StyledTableCell>
                <StyledTableCell component={"td"} align="right">
                  <Checkbox
                    color="primary"
                    sx={{
                      width: "15px",
                      background: "transparent",
                      height: "15px",
                      color: "lightgray",
                      "&:hover": {
                        backgroundColor: "#ddd",
                      },
                    }}
                  />
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box sx={{ position: "absolute", bottom: 5, right: 5 }}>
          <IconButton
            color="primary"
            onClick={handleOpen}
            sx={{
              "&.MuiButtonBase-root:disabled": {
                color: "#ddd",
              },
            }}
          >
            <Edit />
          </IconButton>
          <IconButton
            color="primary"
            onClick={handlePopOpen}
            sx={{
              "&.MuiButtonBase-root:disabled": {
                color: "#ddd",
              },
            }}
          >
            <Delete />
          </IconButton>
        </Box>
      </Box>
      <EditOrderDialog open={dialogOpen} onClose={handleClose} />
      <DeleteWODialog open={popOpen} onClose={handlePopClose} />
      <Box sx={{ height: "100px" }} />
    </Container>
  );
}

export default WorkOrders;
