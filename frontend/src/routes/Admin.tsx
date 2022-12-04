import React, { useEffect, useCallback } from "react";
import { Container, Button } from "@mui/material";
import CarModal from "../components/CarModal";
import CarTable from "../components/CarTable";
import axios from "axios";
import Cookies from "js-cookie";

function Admin() {
  const [open, setOpen] = React.useState(false);
  const [cars, setCars] = React.useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchCars = useCallback(async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/app/cars/");
      setCars(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleDelete = useCallback(
    async (id: number) => {
      try {
        const accessToken = Cookies.get("access_token");
        await axios.delete(`http://localhost:8000/app/cars/${id}/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setCars(cars.filter((car: any) => car.id !== id));
      } catch (error) {
        console.log(error);
      }
    },
    [cars]
  );

  const handleEdit = useCallback(
    async (id: number) => {
      try {
        // TODO
      } catch (error) {
        console.log(error);
      }
    },
    [cars]
  );

  const handleSubmit = async (car: any) => {
    try {
      const accessToken = Cookies.get("access_token");
      await axios.post(
        "http://localhost:8000/app/cars/",
        {
          ...car,
          foto: "none",
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      handleClose();
      fetchCars();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  return (
    <Container maxWidth="lg" sx={{ height: "80vh", marginTop: "32px" }}>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginBottom: "16px" }}
        onClick={handleOpen}
      >
        Adicionar
      </Button>
      <CarTable
        carList={cars}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <CarModal
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}

export default Admin;
