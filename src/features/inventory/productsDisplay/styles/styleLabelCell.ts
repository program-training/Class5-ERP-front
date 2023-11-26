import { TableCell, styled, tableCellClasses } from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.black,
    backgroundColor: "#1565c0",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));
