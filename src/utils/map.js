import axios from "axios";
// Map API key
mapboxgl.accessToken = 'pk.eyJ1Ijoia2llY3JvZnQiLCJhIjoiY2xnejM2MjlrMDc3YTNlb3g0dDY4bmVkaCJ9.rDCU8bqMRQN1xwkYCp0uuQ';
const openWeatherKey = '35d2edfe3900c67fdd86eea343199c65';


// event listeners to open map tray in DOM and fire map generation function
export const mapScript = async ()=>{
    const { data } = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=Liverpool&appid=${openWeatherKey}`);
    const catData = await axios.get(`https://eonet.gsfc.nasa.gov/api/v2.1/categories`);
    const eventData = await axios.get(`https://eonet.gsfc.nasa.gov/api/v2.1/events?status=open`);

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [data[0].lon, data[0].lat],
        zoom: 1,
    });

    eventData.data.events.forEach((event)=>{
        const lon = event.geometries[0].coordinates[0];
        const lat = event.geometries[0].coordinates[1];
        const popup = new mapboxgl.Popup({ offset: 25 }).setText(
            `${event.title}`
            );
    
        new mapboxgl.Marker().setLngLat([lon, lat]).setPopup(popup).addTo(map);
    });
}