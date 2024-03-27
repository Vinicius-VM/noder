import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import style from './Contact.module.css'

import Menu from "./components/Menu"

export const Contact = () => {
    const geoData =({lat:-25.4249668, lng:-49.2748809})
    return(
        <>
        <Menu/>
        <div className={style.sectionContact}>
            <h1>CONTATO</h1>
            <div>
                <h2>Mapa</h2>
                <div>
                    <MapContainer center={[geoData.lat, geoData.lng]} zoom={13} scrollWheelZoom={false} style={{width: "100%", height: "700px"}}>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[geoData.lat, geoData.lng]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                        </Marker>
                    </MapContainer>

                </div>

            </div>
        </div>
        </>
    )
}