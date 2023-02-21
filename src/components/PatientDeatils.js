import * as React from 'react';
import { columns } from '../dataGrid/column-config';
import { columnVisibility } from '../dataGrid/column-visibility';
import { customFontFamily } from '../dataGrid/custom-font-family';
import { CustomNoRowsOverlay } from './CustomNoRowsOverlay';
import { CustomToolbar } from './CustomToolbar';
import { StyledDataGrid } from './StyledDataGrid'


export const PatientDeatils = (props) => {
  const tableData = {
    columns: columns,
    rows: props.data
  }
  const [columnVisibilityModel, setColumnVisibilityModel] = React.useState(columnVisibility);

  return (
    <div style={{ height: 450, width: '100%', marginTop: '50px' }}>
      <h2 style={{
        textAlign: 'center', color: 'rgba(0,0,0,.85)', fontFamily: [customFontFamily], padding: '10px', backgroundColor: '#eeeeee'
      }}>Patient Deatils</h2>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <StyledDataGrid
            getRowClassName={(params) =>
              params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
            }
            {...tableData}
            disableColumnMenu
            disableSelectionOnClick
            components={{
              Toolbar: CustomToolbar,
              NoRowsOverlay: CustomNoRowsOverlay,
            }}
            initialState={{
              sorting: {
                sortModel: [{ field: 'patient_id', sort: 'asc' }],
              },
            }}
            pageSize={5}
            rowsPerPageOptions={[5]}
            columnVisibilityModel={columnVisibilityModel}
            onColumnVisibilityModelChange={(newModel) =>
              setColumnVisibilityModel(newModel)
            }
          />
        </div>
      </div>
    </div>
  )
}
