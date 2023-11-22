import { TableRow } from "@mui/material";
import { StyledTableCell } from "../styles/styleLableCell";
import TableHead from "@mui/material/TableHead";

interface Props {
  viweImage: boolean;
}

const TableHeadModel = ({ viweImage }: Props) => {
  return (
    <TableHead>
      <TableRow>
        {viweImage && <StyledTableCell align="center">image</StyledTableCell>}
        <StyledTableCell align="center">category</StyledTableCell>
        <StyledTableCell align="center">name</StyledTableCell>
        <StyledTableCell align="center">quantity</StyledTableCell>
      </TableRow>
    </TableHead>
  );
};
export default TableHeadModel;
