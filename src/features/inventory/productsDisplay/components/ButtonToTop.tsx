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
        right: "2%",
        bottom: "3%",
        height: "7%",
        width: "5%",
      }}
    >
      <NavigationIcon />
    </Fab>
  );
};

export default ButtonToTop;
