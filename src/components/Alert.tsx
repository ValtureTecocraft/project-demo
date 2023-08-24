import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({
  typeOfAlert,
  message,
  open,
  handleClose,
}: {
  typeOfAlert: "success" | "error" | undefined;
  message: string;
  open: boolean;
  handleClose: any;
}) {
  //   const [open, setOpen] = React.useState(false);

  //   const handleClick = () => {
  //     setOpen(true);
  //   };

  // const handleClose = (
  //   event?: React.SyntheticEvent | Event,
  //   reason?: string
  // ) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
  // };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={typeOfAlert}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
