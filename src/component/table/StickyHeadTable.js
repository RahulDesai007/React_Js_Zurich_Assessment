import React, { useState } from 'react';

//Material UI
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function StickyHeadTable({ data, flag, pageCount }) {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(data.per_page);
  const filterData = data.data.filter((filterData) => (filterData.first_name.charAt(0) === "G" ||
    filterData.last_name.charAt(0) === "W"))

  const headers = Object.keys(data.data[0]);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    pageCount(newPage)
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  return (

    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 300 }}>
        <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              {headers.map(header => (
                <StyledTableCell align="center">{(header.toUpperCase()).split('_').join(' ')}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          {!flag ? (
            <TableBody>

              {data.data
                .map((emp, index) => (
                  <TableRow key={index}>
                    {headers.map(header => (
                      <TableCell align="center">{emp[header]}</TableCell>
                    ))}
                  </TableRow>
                ))}

            </TableBody>
          ) : (
            <TableBody>

              {filterData
                .map((emp, index) => (
                  <TableRow key={index}>
                    {headers.map(header => (
                      <TableCell align="center">{emp[header]}</TableCell>
                    ))}
                  </TableRow>
                ))}

            </TableBody>
          )}
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[4]}
        component="div"
        count={12}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
