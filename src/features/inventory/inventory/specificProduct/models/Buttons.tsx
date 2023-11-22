import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import { Dispatch } from "react";

interface Props {
  setOpenUpdate: Dispatch<React.SetStateAction<boolean>>;
}

const Buttons = ({ setOpenUpdate }: Props) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        onClick={() => setOpenUpdate(true)}
        variant="contained"
        endIcon={<EditNoteIcon />}
      >
        update
      </Button>
      <Button variant="contained" endIcon={<DeleteSweepIcon />}>
        Delete
      </Button>
    </Stack>
  );
};
export default Buttons;
