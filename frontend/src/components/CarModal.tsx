import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

interface CarModalProps {
  open: boolean;
  handleClose: () => void;
  handleSubmit: (car: any) => void;
}

function CarModal({ open, handleClose, handleSubmit }: CarModalProps) {
  const [nome, setNome] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [valor, setValor] = useState<number>(0.0);

  useEffect(() => {
    if (!open) {
      setNome("");
      setMarca("");
      setModelo("");
      setValor(0.0);
    }
  }, [open]);

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
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={() => handleSubmit({ nome, marca, modelo, valor })}>
          Adicionar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CarModal;
