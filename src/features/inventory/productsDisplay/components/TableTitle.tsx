import { Typography } from "@mui/material";

interface Props {
  title: "Overall inventory" | "Products";
}

const TableTitle = ({ title }: Props) => {
  return (
    <Typography variant="subtitle1" fontSize="35px">
      {title}
    </Typography>
  );
};
export default TableTitle;
