import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";


const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "Name", width: 130 },
];

const rows = [
  { id: 1, firstName: "Yaemiko"},
  { id: 2, firstName: "Raiden"},
  { id: 3, firstName: "Yelan"},
  { id: 4, firstName: "Furina"},
  { id: 5, firstName: "Navia"},
  { id: 6, firstName: "Arlechino"},
  { id: 7, firstName: "Clorinde"},
  { id: 8, firstName: "Hutao"},
  { id: 9, firstName: "Keqing"},
  { id: 10, firstName: "Ganyu"},
];

const actionColumn = [
  {
    renderCell: () => {
      return (
        <div className="cellAction">
          <Link to="/users/test" style={{ textDecoration: "none" }}>
            </Link>
        </div>
      );
    },
  },
];

const Mydatatable = () => {
  return (
    
    <div className="mydatatable">
      <div className="mydatatableTitle">
        All Data
      </div>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Mydatatable;