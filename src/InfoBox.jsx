import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://plus.unsplash.com/premium_photo-1666621588973-1a50b5b2d5ab?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  //   let info = {
  //     city: "Hubli",
  //     feelsLike: 28.56,
  //     humidity: 51,
  //     temp: 28.02,
  //     tempMax: 28.02,
  //     tempMin: 28.02,
  //     weather: "broken clouds",
  //   };

  let HOT_URL =
    "https://images.unsplash.com/photo-1586866811088-9e0c914bec1a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let COLD_URL =
    "https://images.unsplash.com/photo-1528191710846-99b8717a2830?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let RAIN_URL =
    "https://images.unsplash.com/photo-1488034976201-ffbaa99cbf5c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <div className="InfoBox">
        <div className="cardContainer">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={
                info.humidity > 80
                  ? RAIN_URL
                  : info.temp > 15
                  ? HOT_URL
                  : COLD_URL
              }
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city }
                {info.humidity > 80 ? (
                  <ThunderstormIcon />
                ) : info.temp > 15 ? (
                  <WbSunnyIcon />
                ) : (
                  <AcUnitIcon />
                )}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component={"span"}
              >
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>Min Temp = {info.tempMin}&deg;C</p>
                <p>Max Temp = {info.tempMax}&deg;C</p>
                <p>
                  The weather can be described as <i>{info.weather}</i> and
                  feels like {info.feelsLike}&deg;C
                </p>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
