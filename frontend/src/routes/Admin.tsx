import React, { useEffect, useCallback, useState } from "react";
import { Container, Button } from "@mui/material";
import CarModal from "../components/CarModal";
import CarTable from "../components/CarTable";
import axios from "axios";
import Cookies from "js-cookie";
import Car from "../types/car";

function Admin() {
  const [open, setOpen] = useState(false);
  const [cars, setCars] = useState([]);
  const [editCar, setEditCar] = useState<Car>();

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
      const car = cars.find((car: any) => car.id === id);
      if (car) {
        setEditCar(car);
        handleOpen();
      }
    },
    [cars]
  );

  const handleSubmit = async (car: any) => {
    try {
      const accessToken = Cookies.get("access_token");
      if (car.id) {
        await axios.put(`http://localhost:8000/app/cars/${car.id}/`, car, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
      } else {
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
      }
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
        editCar={editCar}
      />
    </Container>
  );
}

export default Admin;
