import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/1102620_MLP_1440x675_apv189_V3._CB663481141_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="OnePlus Nord CE 5G (Charcoal Ink, 8GB RAM, 128GB Storage)"
            price={24999.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71LRBr1aLNS._SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="HP 15 10th Gen Intel Core i3 Thin & Light 15.6-Inch (39.62 cms) FHD Laptop (8GB/1TB HDD/M.2 Slot/Windows 10/MS Office/Jet Black), 15s-du1066TU"
            price={39990}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81Ne5qKmE8L._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="American Tourister Jamaica Polyester 80 cms Wine Red Softsided Suitcase (27O (0) 70 003)"
            price={4099}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71VX3bTgD2L._SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="New Apple Watch SE (GPS + Cellular, 40mm) - Space Grey Aluminium Case with Black Sport Band"
            price={32900}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71Tv02zNhtL._SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="KENT Supreme Extra 2020 (11113), Zero Water Wastage, Wall Mountable, RO + UV + UF + Alkaline + TDS Control + UV in Tank, 8 L Tank, White, 20 LPH Water Purifier"
            price={15948}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71jMD6amKoL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="LG 139.7 cm (55 inches) 4K Ultra HD Smart OLED TV 55A1PTZ (Dark Meteo Titan) (2021 Model)"
            price={124990}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81hZKoE6t9S._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;