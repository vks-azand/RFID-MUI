import React from "react";
import { Dialog, DialogContent, Typography, Box, Button } from "@mui/material";
import { WarningRounded } from "@mui/icons-material";

function DeleteWODialog(props) {
  const { open, onClose } = props;
  return (
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth={"sm"}
      sx={{ "& .MuiDialog-paper": { width: "35%" } }}
    >
      <DialogContent>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            p: 3,
          }}
        >
          <WarningRounded color="error" sx={{ fontSize: "2.5rem" }} />
          <Typography variant="h6" fontWeight={"bold"} sx={{ ml: 1 }}>
            Delete Work Order
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
          <Typography>
            Are you sure you want to delete Work Order 123451?
          </Typography>
          <Typography>You can't undo this action.</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <Button
            variant="contained"
            color="inherit"
            sx={{ textTransform: "none" }}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ textTransform: "none", ml: 2 }}
          >
            Delete
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteWODialog;
