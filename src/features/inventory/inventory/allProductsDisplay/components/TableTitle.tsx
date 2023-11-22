import { Typography } from "@mui/material";

interface Props {
  title: "overall invertory" | "products";
}

const TableTitle = ({ title }: Props) => {
  return (
    <Typography color="primary" variant="h6">
      {title}
    </Typography>
  );
};
export default TableTitle;
