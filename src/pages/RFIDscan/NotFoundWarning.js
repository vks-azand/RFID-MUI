import React from "react";
import { Dialog, DialogContent, Typography, Box, Button } from "@mui/material";
import { CloseCircle } from "mdi-material-ui";
import { Link } from "react-router-dom";

function NotFound(props) {
  const { open, onClose } = props;
  return (
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth={"sm"}
      sx={{
        "& .MuiDialog-paper": {
          width: "35%",
          color: "black",
          background: "white",
        },
      }}
    >
      <DialogContent>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 3,
          }}
        >
          <CloseCircle color="error" sx={{ fontSize: "1.7rem" }} />
          <Typography variant="h6" fontWeight={"bold"} sx={{ ml: 1 }}>
            No Operation Found
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            color={"GrayText"}
            sx={{ textAlign: "center", width: "85%" }}
          >
            This RFID is not associated with a Work Order.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ textTransform: "none" }}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              color="inherit"
              sx={{ textTransform: "none", ml: 2 }}
            >
              Associate
            </Button>
          </Link>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default NotFound;
