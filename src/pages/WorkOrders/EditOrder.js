import {
  Badge,
  Box,
  Button,
  Dialog,
  DialogContent,
  Divider,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Delete, Edit } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import DeleteOPDialog from "./DeleteOPDialog";

const TabHeader = styled(Box)`
  display: flex;
`;

const TabBody = styled(Box)`
  margin-top: 10px;
`;

const TabItem = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function EditOrderDialog(props) {
  const [popOpen, setPopOpen] = useState(false);

  const handlePopOpen = () => {
    setPopOpen(true);
  };
  const handlePopClose = () => {
    setPopOpen(false);
  };

  const { open, onClose } = props;
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [minDateVal, setMinDateVal] = useState(new Date("2014-08-18T21:11:54"));
  const [maxDateVal, setMaxDateVal] = useState(new Date("2014-08-18T21:11:54"));

  const handleMinDateChange = newValue => {
    setMinDateVal(newValue);
  };

  const handleMaxDateChange = newValue => {
    setMaxDateVal(newValue);
  };
  return (
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth={"md"}
      sx={{
        "& .MuiDialog-paper": { minHeight: "550px" },
      }}
    >
      <DialogContent>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            height: 224,
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider", width: "200px" }}
          >
            <Tab
              sx={{ textTransform: "none" }}
              label="Work Order"
              {...a11yProps(0)}
            />
            <Tab
              sx={{ textTransform: "none" }}
              label={
                <Badge badgeContent={3} color="primary">
                  <Typography>Operations</Typography>
                </Badge>
              }
              {...a11yProps(1)}
            />
          </Tabs>
          <TabPanel value={value} index={0}>
            <TabHeader>
              <Edit sx={{ mr: 2 }} />
              <Typography variant="h6" sx={{ mr: 2, fontWeight: "bold" }}>
                Edit Work Order
              </Typography>
              <Button
                sx={{ textTransform: "none" }}
                variant="contained"
                color="primary"
              >
                New Work Order
              </Button>
            </TabHeader>
            <TabBody>
              <Typography>Work Order Number</Typography>
              <TextField
                sx={{ mt: 1 }}
                variant="outlined"
                size="small"
                placeholder="123451"
              />
              <TabItem>
                <Box>
                  <Typography>Min. start date</Typography>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      inputFormat="MM/dd/yyyy"
                      value={minDateVal}
                      onChange={handleMinDateChange}
                      renderInput={params => (
                        <TextField
                          {...params}
                          size="small"
                          sx={{ width: "80%", mt: 1 }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Box>
                <Box>
                  <Typography>Max. start date</Typography>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      inputFormat="MM/dd/yyyy"
                      value={maxDateVal}
                      onChange={handleMaxDateChange}
                      renderInput={params => (
                        <TextField
                          {...params}
                          size="small"
                          sx={{ width: "80%", mt: 1 }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Box>
                <Box>
                  <Typography>Required Qty</Typography>
                  <TextField
                    sx={{ mt: 1 }}
                    variant="outlined"
                    size="small"
                    type="number"
                    fullWidth
                    placeholder="1000"
                  />
                </Box>
              </TabItem>
              <TabItem>
                <Box sx={{ width: "45%" }}>
                  <Typography>Location name</Typography>
                  <TextField
                    sx={{ mt: 1 }}
                    variant="outlined"
                    size="small"
                    fullWidth
                    placeholder="Montreal, Qc"
                  />
                </Box>
                <Box sx={{ width: "45%" }}>
                  <Typography>Location ID</Typography>
                  <TextField
                    sx={{ mt: 1 }}
                    variant="outlined"
                    size="small"
                    fullWidth
                    placeholder="34FG87nm"
                  />
                </Box>
              </TabItem>
              <TabItem>
                <Box sx={{ width: "100%" }}>
                  <Typography>Description</Typography>
                  <TextField
                    sx={{ mt: 1 }}
                    variant="outlined"
                    multiline
                    maxRows={2}
                    fullWidth
                  />
                </Box>
              </TabItem>
              <Box sx={{ mt: 5, float: "right" }}>
                <Button
                  sx={{ mr: 2, textTransform: "none" }}
                  variant="contained"
                  color="inherit"
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button
                  sx={{ textTransform: "none" }}
                  variant="contained"
                  color="primary"
                >
                  Save
                </Button>
              </Box>
            </TabBody>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TabHeader>
              <Edit sx={{ mr: 2 }} />
              <Typography variant="h6" sx={{ mr: 2, fontWeight: "bold" }}>
                Edit Operation
              </Typography>
              <Button
                sx={{ textTransform: "none" }}
                variant="contained"
                color="primary"
              >
                New Operation
              </Button>
            </TabHeader>
            <TabBody>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ mr: 2 }}>
                  <Typography>Operation Num</Typography>
                  <TextField
                    sx={{ mt: 1 }}
                    size="small"
                    variant="outlined"
                    placeholder="10"
                  />
                </Box>
                <Box sx={{ mr: 2 }}>
                  <Typography>GuideBook ID</Typography>
                  <TextField
                    sx={{ mt: 1 }}
                    size="small"
                    variant="outlined"
                    placeholder="111111"
                  />
                </Box>
                <Box sx={{ mr: 2 }}>
                  <Typography>Work Center</Typography>
                  <TextField
                    sx={{ mt: 1 }}
                    size="small"
                    variant="outlined"
                    placeholder="Fabs"
                  />
                </Box>
                <Box sx={{ mr: 2, display: "flex", alignItems: "end" }}>
                  <Button
                    onClick={handlePopOpen}
                    color="inherit"
                    variant="contained"
                    size="large"
                    sx={{
                      minWidth: "15px",
                      p: "6px 9px",
                      background: "#fff",
                    }}
                  >
                    <DeleteOPDialog open={popOpen} onClose={handlePopClose} />
                    <Delete />
                  </Button>
                </Box>
              </Box>
              <Divider sx={{ py: 1 }} />
              <Box sx={{ display: "flex", mt: 1 }}>
                <Box sx={{ mr: 2 }}>
                  <Typography>Operation Num</Typography>
                  <TextField
                    sx={{ mt: 1 }}
                    size="small"
                    variant="outlined"
                    placeholder="20"
                  />
                </Box>
                <Box sx={{ mr: 2 }}>
                  <Typography>GuideBook ID</Typography>
                  <TextField
                    sx={{ mt: 1 }}
                    size="small"
                    variant="outlined"
                    placeholder="121212"
                  />
                </Box>
                <Box sx={{ mr: 2 }}>
                  <Typography>Work Center</Typography>
                  <TextField
                    sx={{ mt: 1 }}
                    size="small"
                    variant="outlined"
                    placeholder="Welding"
                  />
                </Box>
                <Box sx={{ mr: 2, display: "flex", alignItems: "end" }}>
                  <Button
                    color="inherit"
                    variant="contained"
                    size="large"
                    sx={{
                      minWidth: "15px",
                      p: "6px 9px",
                      background: "#fff",
                    }}
                  >
                    <Delete />
                  </Button>
                </Box>
              </Box>
              <Divider sx={{ py: 1 }} />
              <Box sx={{ display: "flex", mt: 1 }}>
                <Box sx={{ mr: 2 }}>
                  <Typography>Operation Num</Typography>
                  <TextField
                    sx={{ mt: 1 }}
                    size="small"
                    variant="outlined"
                    placeholder="30"
                  />
                </Box>
                <Box sx={{ mr: 2 }}>
                  <Typography>GuideBook ID</Typography>
                  <TextField
                    sx={{ mt: 1 }}
                    size="small"
                    variant="outlined"
                    placeholder="222222"
                  />
                </Box>
                <Box sx={{ mr: 2 }}>
                  <Typography>Work Center</Typography>
                  <TextField
                    sx={{ mt: 1 }}
                    size="small"
                    variant="outlined"
                    placeholder="Paint"
                  />
                </Box>
                <Box sx={{ mr: 2, display: "flex", alignItems: "end" }}>
                  <Button
                    color="inherit"
                    variant="contained"
                    size="large"
                    sx={{
                      minWidth: "15px",
                      p: "6px 9px",
                      background: "#fff",
                    }}
                  >
                    <Delete />
                  </Button>
                </Box>
              </Box>
              <Box sx={{ mt: 5, float: "right" }}>
                <Button
                  sx={{ mr: 2, textTransform: "none" }}
                  variant="contained"
                  color="inherit"
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button
                  sx={{ textTransform: "none" }}
                  variant="contained"
                  color="primary"
                >
                  Save
                </Button>
              </Box>
            </TabBody>
          </TabPanel>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default EditOrderDialog;
