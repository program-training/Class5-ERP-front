import { Box, ListItem, Divider, ListItemText } from "@mui/material";

interface Props {
  item: string;
  value: string | number;
  divider: "top" | "bottom" | "none";
}

const Item = ({ item, value, divider }: Props) => {
  return (
    <Box>
      {divider === "top" && <Divider />}
      <ListItem>
        <ListItemText
          secondary={item}
          sx={{
            width: "200px",
          }}
        />
        <ListItemText primary={value} sx={{ width: "400px" }} />
      </ListItem>
      {divider === "bottom" && <Divider />}
    </Box>
  );
};

export default Item;
