import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHeadModel from "../models/TableHead";
import { TableBody } from "@mui/material";
import { StyledTableCell } from "../styles/styleLabelCell";
import { StyledTableRow } from "../styles/styleLabelRow";

const a = [1, 2, 3];

const OverallInventoryTable = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }}>
          <TableHeadModel viewImage={false} />
          <TableBody>
            <StyledTableRow>
              {a.map((value, key) => (
                <StyledTableCell align="center" key={key}>
                  {value}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default OverallInventoryTable;
