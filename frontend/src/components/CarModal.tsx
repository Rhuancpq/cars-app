import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import Car from "../types/car";
import { Box } from "@mui/system";

interface CarModalProps {
  open: boolean;
  handleClose: () => void;
  handleSubmit: (car: any) => void;
  editCar?: Car;
}

function CarModal({ open, handleClose, handleSubmit, editCar }: CarModalProps) {
  const [nome, setNome] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [valor, setValor] = useState<number>(0.0);
  const [foto, setFoto] = useState<File>();

  useEffect(() => {
    if (!open) {
      setNome("");
      setMarca("");
      setModelo("");
      setValor(0.0);
      setFoto(undefined);
    }
  }, [open]);

  useEffect(() => {
    if (editCar) {
      setNome(editCar.nome);
      setMarca(editCar.marca);
      setModelo(editCar.modelo);
      setValor(editCar.valor);
    }
  }, [editCar]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Adicionar carro</DialogTitle>
      <DialogContent>
        <TextField
          label="Nome"
          sx={{ marginTop: "16px", marginLeft: "16px" }}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <TextField
          label="Marca"
          sx={{ marginTop: "16px", marginLeft: "16px" }}
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
        />
        <TextField
          label="Modelo"
          sx={{ marginTop: "16px", marginLeft: "16px" }}
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
        />
        <TextField
          label="Valor"
          sx={{ marginTop: "16px", marginLeft: "16px" }}
          type="number"
          inputProps={{
            step: ".01",
          }}
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
        />

        <label htmlFor="button-file">
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="button-file"
            type="file"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setFoto(e.target.files[0]);
              }
            }}
          />
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              marginTop: "16px",
            }}
          >
            <Button
              component="span"
              variant="contained"
              sx={{ margin: "0 16px" }}
            >
              Upload
            </Button>
            {foto && <p style={{ margin: 0 }}>{foto.name}</p>}
          </Box>
        </label>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button
          onClick={() =>
            handleSubmit({ foto, ...editCar, nome, marca, modelo, valor })
          }
        >
          Adicionar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CarModal;
