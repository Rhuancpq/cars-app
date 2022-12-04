import React, { useState, useEffect, useMemo, useCallback } from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Cookies from "js-cookie";
import Car from "../types/car";

interface CarTableProps {
  carList: Car[];
  handleEdit: (carId: number) => void;
  handleDelete: (carId: number) => void;
}

function CarTable({ carList, handleEdit, handleDelete }: CarTableProps) {
  const columns = useMemo(
    () => [
      { field: "id", headerName: "ID", width: 70 },
      { field: "nome", headerName: "Nome", width: 130 },
      { field: "marca", headerName: "Marca", width: 130 },
      { field: "modelo", headerName: "Modelo", width: 130 },
      {
        field: "valor",
        headerName: "Valor",
        width: 130,
        valueFormatter: (params: any) => {
          return `R$ ${params.value}`;
        },
      },
      {
        field: "actions",
        type: "actions",
        width: 100,
        getActions: (params: any) => [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            onClick={() => handleEdit(params.id)}
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => handleDelete(params.id)}
          />,
        ],
      },
    ],
    [handleDelete, handleEdit]
  );

  return (
    <div style={{ height: "100%", width: "700px" }}>
      <DataGrid
        rows={carList}
        columns={columns}
        pageSize={Math.round((window.innerHeight * 0.8) / 52) - 2}
      />
    </div>
  );
}

export default CarTable;
