import React , {useState,useEffect} from "react";
import '../App.css'
import axios from 'axios';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const DistrictWeather = ()=>{
  //set hook for api
const [districtWeather,setDistrictWeather]=useState(null);
const [temp,setTemp]=useState([]);
  const handleChange = (e) => {
    const selectedId = e.target.value;
    const selectedDistrict = districtWeather.filter((d) => d.place === selectedId)[0]
    setTemp(selectedDistrict);
    console.log("you select",e.target.value,selectedDistrict)
    showTemperature(temp)
  };
//use axios to get api data
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en');
        setDistrictWeather(response.data.temperature.data)
    };
    getData();
}, []);
function showTemperature(temp){
  if (temp ===[]){
    return null
    console.log("at least it load")
  }
  else{ 
    console.log("it should work")
    return(<div><h2>{temp.place}'s Current temperature is {temp.value}°C</h2></div>
  );}}
return (
<div>
<FormControl variant="filled" sx={{ m: 1, Width: 300,backgroundColor:"white"}}>
           <Select
           labelId="demo-simple-select-filled-label"
           value={temp.place}
           onChange={handleChange}
           >  
              {districtWeather && districtWeather.map(({place}) => (
                 <MenuItem key={place} value={place}>{place}</MenuItem>
              ))}
           </Select>
          </FormControl>
          <div><h2>{temp.place}'s Current temperature is {temp.value}°C</h2></div>
          <showTemperature temp={temp}></showTemperature>
</div>
  );

}

export default DistrictWeather;