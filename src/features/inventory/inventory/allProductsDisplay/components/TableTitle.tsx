import { Typography } from "@mui/material";

interface Props {
  title: "Overall inventory" | "Products";
}

const TableTitle = ({ title }: Props) => {
  return (
    <Typography color="primary" variant="h6">
      {title}
    </Typography>
  );
};
export default TableTitle;
