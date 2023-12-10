import { TableRow, Typography } from "@mui/material";
import { StyledTableCell } from "../styles/styleLabelCell";
import TableHead from "@mui/material/TableHead";

interface Props {
  viewImage: boolean;
}

const TableHeadModel = ({ viewImage: viewImage }: Props) => {
  const headTitle = ["Image", "Category", "Name", "Quantity"];
  return (
    <TableHead>
      <TableRow>
        {viewImage &&
          headTitle.map((title, i) => (
            <StyledTableCell key={i} align="center">
              <Typography key={i} variant="body2" fontSize="20px">
                {title}
              </Typography>
            </StyledTableCell>
          ))}
      </TableRow>
    </TableHead>
  );
};
export default TableHeadModel;
