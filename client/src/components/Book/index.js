import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { services } from '../../data';
import { MainContainer, DataGridWrapper } from './bookingElements';
import Calender from './Calendar';

const Book = () => {
  const [selectionModel, setSelectionModel] = useState([]);
  const [bookingPageView, setBookingPageView] = useState(true);

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

  const handleClick = () => {
    setBookingPageView(!bookingPageView)
  }

  return (
    <>
      { bookingPageView ? <MainContainer>
        <DataGridWrapper>
          <DataGrid
            rows={services}
            columns={columns}
            getRowId={(row) => row.id}
            rowsPerPageOptions={[10]}
            checkboxSelection
            hideFooterPagination
            disableSelectionOnClick
            onSelectionModelChange={(newSelectionModel) => {
              console.log(JSON.stringify(newSelectionModel))
              setSelectionModel(newSelectionModel);
            }}
            selectionModel={selectionModel}
          />
        </DataGridWrapper>
        <button onClick={handleClick}>Click</button>
      </MainContainer> :
        <Calender selections={selectionModel} handleClick={handleClick}/>
      }

    </>
  );
};

export default Book;
