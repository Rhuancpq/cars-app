import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

// interface to define the props
interface CarCardProps {
  nome: string;
  marca: string;
  modelo: string;
  valor: number;
  foto: string;
}

function CarCard({ nome, marca, modelo, valor }: CarCardProps) {
  return (
    <Card sx={{ width: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://www.shoppingdopapel.com.br/images/products/empty.png"
          alt="car image"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {nome}
          </Typography>
          <Typography gutterBottom variant="caption" component="div">
            {`${marca} | ${modelo}`}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            align="right"
            color="#3374db"
            sx={{ fontWeight: "bold" }}
          >
            {`R$ ${valor.toLocaleString("pt-BR")} `}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CarCard;
