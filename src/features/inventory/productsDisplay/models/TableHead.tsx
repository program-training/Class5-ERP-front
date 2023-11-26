import { TableRow } from "@mui/material";
import { StyledTableCell } from "../styles/styleLabelCell";
import TableHead from "@mui/material/TableHead";

interface Props {
  viewImage: boolean;
}

const TableHeadModel = ({ viewImage: viewImage }: Props) => {
  return (
    <TableHead>
      <TableRow>
        {viewImage && <StyledTableCell align="center">image</StyledTableCell>}
        <StyledTableCell align="center">category</StyledTableCell>
        <StyledTableCell align="center">name</StyledTableCell>
        <StyledTableCell align="center">quantity</StyledTableCell>
      </TableRow>
    </TableHead>
  );
};
export default TableHeadModel;
