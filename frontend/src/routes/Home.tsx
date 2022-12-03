import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import CarCard from "../components/CarCard";
import Header from "../components/Header";
import Car from "../types/car";

function Home() {
  const [carList, setCarList] = useState<Car[]>([]);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ marginTop: "16px" }} wrap="wrap">
          {carList.length > 0 ? (
            carList.map((car) => (
              <Grid item xs={4} key={car.id}>
                <CarCard
                  nome={car.nome}
                  marca={car.marca}
                  modelo={car.modelo}
                  valor={car.valor}
                  foto={car.foto}
                />
              </Grid>
            ))
          ) : (
            <h1>Nenhum carro encontrado</h1>
          )}
        </Grid>
      </Container>
    </>
  );
}

export default Home;
