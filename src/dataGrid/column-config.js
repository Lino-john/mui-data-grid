import { Link } from "@mui/material";
import Avatar from "@mui/material/Avatar";



export const columns = [
  {
    field: 'patient_id',
    headerName: 'ID',
    width: 130,
    hideable: false
  },

  {
    field: 'timestamp',
    headerName: 'Time stamp',
    width: 200,
    hideable: false,
    type: 'date'
  },
  {
    field: 'patient_dob',
    headerName: 'Date of birth',
    width: 130,
    sortable: false,
    hideable: false
  },
  {
    field: 'patient_name',
    headerName: 'Name',
    width: 150,
    hideable: false
  },

  {
    field: 'state',
    headerName: 'State',
    width: 90,
    sortable: false,
    hideable: false,
    valueFormatter: (params) => {
      if (params.value == null) {
        return '';
      }
      const titleCase = params.value[0].toUpperCase() + params.value.slice(1).toLowerCase();
      return `${titleCase}`;
    }
  },
  {
    field: 'url',
    headerName: 'Link',
    width: 240,
    hideable: false,
    sortable: false,
    renderCell: (params) => {
      const url = params.value
      const link =
        url
          ? <Link href={url}>{url}</Link>
          : '';
      return link
    }
  },
  {
    field: 'patient_gender',
    headerName: 'Gender',
    width: 70,
    sortable: false
  },
  {
    field: 'study_description',
    headerName: 'Study Description',
    width: 220,
    sortable: false
  },
  {
    field: 'series_description',
    headerName: 'Series Description',
    width: 220,
    sortable: false
  },
  {
    field: 'slice_thickness',
    headerName: 'Slice Thickness',
    width: 130,
    sortable: false
  },
  {
    field: 'scanner_model',
    headerName: 'Scanner Model',
    type: 'number',
    width: 180,
    sortable: false
  },
  {
    field: 'thumbnail',
    headerName: 'Thumbnail',
    type: 'number',
    width: 90,
    sortable: false,
    renderCell: (params) => {
      const thumbnail = params.value
      const avatar =
        thumbnail
          ? <Avatar src={thumbnail} />
          : '';
      return avatar
    }
  }
];