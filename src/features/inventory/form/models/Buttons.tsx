import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import PlaylistRemoveCheckIcon from "@mui/icons-material/PlaylistRemove";
import { Button, DialogActions, Stack } from "@mui/material";
import { Dispatch } from "react";

interface Props {
  isValid: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  formType: "addition" | "update";
}

const Buttons = ({ isValid, setOpen, formType }: Props) => {
  return (
    <DialogActions
      sx={{ display: "flex", justifyContent: "center", margin: "20px" }}
    >
      <Stack direction="row" spacing={3}>
        <Button
          variant="contained"
          disabled={!isValid}
          endIcon={<PlaylistAddCheckIcon />}
          onClick={() => setOpen(false)}
          type="submit"
        >
          {formType === "addition" ? "add" : "edit"}
        </Button>
        <Button
          variant="contained"
          onClick={() => setOpen(false)}
          endIcon={<PlaylistRemoveCheckIcon />}
        >
          cancel
        </Button>
      </Stack>
    </DialogActions>
  );
};
export default Buttons;
