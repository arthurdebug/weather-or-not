import React , {useState,useEffect} from "react";
import '../App.css'
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const NineDays = ()=>{

  //set hook for api
const [weatherNineDays,setWeatherNineDays]=useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //use axios to get api data

  useEffect(() => {

    const getData = async () => {
      try {const response = await axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en');
        setWeatherNineDays(response.data.weatherForecast)
        setError(null);}
        catch(err){setError(err.message);
        setWeatherNineDays(null);
      }finally {
        setLoading(false);
      }
    };
    getData();
}, []);

//return a better format date then YYYYMMDD
function date (a){
   let day=a.split('')
   let nextFormat= day[4]+day[5]+"/"+day[6]+day[7]
   return (nextFormat)
} 
return (
    <div >
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <Grid
                container
                spacing={2}
                direction="row"
                justify="center"
                alignItems="center"
            >
        {weatherNineDays &&
          weatherNineDays.map(({forecastWeather,forecastDate,week,forecastMaxtemp,forecastMintemp }) => (
            <Box gridColumn="span 4">
          <Card sx={{ minWidth: 275, maxWidth: 275 ,height:220}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {date(forecastDate)} <br></br> {week}
        </Typography>
        <Typography variant="h5" component="div">
        High {forecastMaxtemp.value}°C Low {forecastMintemp.value}°C
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" display="flexbox">
        {forecastWeather}
        </Typography>
      </CardContent>
    </Card>
    </Box>
          ))}
          </Grid>
    </div>
  );

}
export default NineDays;