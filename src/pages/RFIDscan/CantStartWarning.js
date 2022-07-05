import React from "react";
import { Dialog, DialogContent, Typography, Box, Button } from "@mui/material";
import { CloseCircle } from "mdi-material-ui";

function CantStart(props) {
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
            The Operation can not start
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
          <Typography sx={{ textAlign: "center", width: "85%" }}>
            The next operation does not match the Work Center of this terminal.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ textTransform: "none" }}
            onClick={onClose}
          >
            Ok
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default CantStart;
