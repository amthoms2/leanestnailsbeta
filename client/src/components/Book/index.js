import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { services } from '../../data';
import { MainContainer, DataGridWrapper } from './bookingElements';
import Calender from './Calendar';
import { styled } from '@mui/styles';
import { Logo } from "../Navbar/NavbarElements"


// export const Logo = styled(LinkRouter)`
//   color: #fff;
//   justify-self: flex-start;
//   cursor: pointer;
//   font-size: 1.5rem;
//   display: flex;
//   align-items: center;
//   margin-left: 24px;
//   font-weight: bold;
//   text-decoration: none;
// `;


const Book = () => {
  const [selectionModel, setSelectionModel] = useState([]);
  const [bookingPageView, setBookingPageView] = useState(true);
  // const [disable, setDisable] = useState(true)

  const columns = [
    {
      field: 'services',
      headerName: 'Select Services',
      width: 230,
      renderCell: (params) => {
        return <>{params.row.name}</>;
      },
    },
  ];

  const NextButton = styled(Button)({
    color: '#43e4db',
  });

  const CustomFooterStatusComponent = () => {
    return (
      <Box sx={{ padding: '10px', display: 'flex' }}>
        <NextButton variant="contained" onClick={handleClick}>
          Next
        </NextButton>
      </Box>
    );
  };

  const handleClick = () => {
    setBookingPageView(!bookingPageView);
    console.log(selectionModel);
  };

  return (
    <>

      {bookingPageView ? (
        <MainContainer>
              <Logo  to="/">Logo</Logo>
          <DataGridWrapper>
            <DataGrid
              sx={{
                boxShadow: 1,
                border: 1,
                color: '#FFFFFF',
                borderColor: 'primary.light',
                '& .MuiDataGrid-cell:hover': {
                  color: 'primary.main',
                },
              }}
              rows={services}
              columns={columns}
              getRowId={(row) => row.id}
              rowsPerPageOptions={[10]}
              checkboxSelection
              hideFooterPagination
              disableSelectionOnClick
              onSelectionModelChange={(newSelectionModel) => {
                setSelectionModel(newSelectionModel);
              }}
              selectionModel={selectionModel}
              components={{
                Footer: CustomFooterStatusComponent,
              }}
            />
          </DataGridWrapper>
        // </MainContainer>

      ) : (
        <Calender selections={selectionModel} handleClick={handleClick} />
      )}
    </>
  );
};

export default Book;
