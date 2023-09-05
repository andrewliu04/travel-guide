import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359', 
  },
  headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': ''
  }
};


export const getPlacesData = async () => {
    try {
        const { data: { data }} = await axios.get(options.url, options);

        return data;
    } catch (error) {
        console.log(error)
    }
}