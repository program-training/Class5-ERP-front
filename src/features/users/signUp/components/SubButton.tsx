import Button from "@mui/material/Button";
type Props = {
  isValid: boolean;
};
const SubButton = ({ isValid }: Props) => {
  return (
    <Button
      disabled={!isValid}
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      Sign In
    </Button>
  );
};
export default SubButton;
