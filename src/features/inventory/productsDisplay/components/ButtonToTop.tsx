import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ButtonToTop = () => {
  return (
    <Fab
      onClick={scrollToTop}
      title="scroll to top"
      color="primary"
      sx={{
        position: "fixed",
        left: "1185px",
        bottom: "20px",
        height: "45px",
        width: "45px",
      }}
    >
      <NavigationIcon />
    </Fab>
  );
};

export default ButtonToTop;
