import { Button } from "@mui/material";
type Props = {
  isValid: boolean;
};
export function SubButton({ isValid }: Props) {
  return (
    <>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        disabled={!isValid}
        sx={{ mt: 3, mb: 2 }}
      >
        Log In
      </Button>
    </>
  );
}
