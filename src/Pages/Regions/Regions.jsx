import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./regions.scss";
import babylonwacc from "../../api/babylonwacc";
import { useDispatch, useSelector } from "react-redux";
import { regionsActions } from "../../store/index";
import { Chip } from "@mui/material";

const Regions = () => {
  const dispatch = useDispatch();
  const getRegions = async () => {
    try {
      const response = await babylonwacc.get(
        "masterdata/regions?countries=true"
      );
      dispatch(regionsActions.getRegions(response.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRegions(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const regions = useSelector((state) => state.regions.regions)
  console.log(regions)

  return (
    <div
      style={{ marginTop: "100px", height: "100%", width: "100%" }}
      className="datagrid-container"
    >
      <DataGrid
        columns={[
          { field: "name", flex: 1, headerClassName: "name-column" },
          {
            field: "countries",
            flex: 4,
            headerClassName: "country-column",
            valueGetter: ({ value }) => {
              console.log(value);
              return value.map((value) => value.name);
            },
            // `${params.map((countries)=> countries.name ).join(',')}`,
          },
        ]}
        rows={{}}
      />
    </div>
  );
};

export default Regions;
