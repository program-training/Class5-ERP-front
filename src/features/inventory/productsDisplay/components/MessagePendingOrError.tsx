import { Box, CircularProgress } from "@mui/material";
import { Typography } from "@mui/material";

interface Props {
  message: string;
  title: "load products" | "error";
}

const MessagePendingOrError = ({ message, title }: Props) => {
  return (
    <Box
      sx={{
        width: "800px",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Typography>{title}</Typography>
      {message === "load" ? (
        <CircularProgress />
      ) : (
        <Typography>{message}</Typography>
      )}
    </Box>
  );
};
export default MessagePendingOrError;
