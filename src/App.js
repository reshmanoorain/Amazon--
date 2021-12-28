import "./styles.css";
import Amazon from "./Components/Amazon";
import Amazonheader from "./Components/Amazonheader";
import Amazonfeed from "./Components/Amazonfeed";
export default function App() {
  return (
    <div className="App">
      <h1>Amazon.in</h1>
      <input type="text" />
      <button>Search</button>
      <Amazonheader />
      <div className="amzn">
        <Amazonfeed />
        <Amazon
          src="https://m.media-amazon.com/images/I/71BDPPIdGeL._SL1280_.jpg"
          name="Samsung Galaxy Tab S7 FE "
          id=" (12.4 inch) Large Display, S-Pen in Box, Slim Metal Body, Dolby Atmos Sound, RAM 4 GB, ROM 64 GB Expandable, Wi-Fi Tablet, Mystic Silver"
          price="₹39,999.00"
        />

        <Amazon
          src="https://m.media-amazon.com/images/I/71iufehf0XL._SL1500_.jpg"
          name="Samsung Galaxy Tab A7"
          id="(10.4 inch), Slim Metal Body, Quad Speakers with Dolby Atmos, RAM 3 GB, ROM 32 GB Expandable, Wi-Fi+4G, Grey"
          price="₹18,610.00"
        />

        <Amazon
          src="https://m.media-amazon.com/images/I/51S2OfjRkIL._SL1000_.jpg"
          name="Lenovo Tab M10 FHD Plus Tablet"
          id="(26.16 cm (10.3-inch), 4GB, 128GB, Wi-Fi + LTE, Volte Calling), Platinum Grey"
          price="₹18,999.00"
        />

        <Amazon
          src="https://m.media-amazon.com/images/I/41jdvXSoeyS._SL1000_.jpg"
          name="Lenovo Tab M10 HD 2nd Gen"
          id="(10.1 inch, 4 GB, 64 GB, Wi-Fi+LTE), Platinum Grey with Metallic Body and Octa-core Processor"
          price="₹16,369.00"
        />

        <Amazon
          src="https://m.media-amazon.com/images/I/915rA4VNXuL._SL1500_.jpg"
          name="Lenovo Yoga Smart Tablet"
          id="(10.1 inch, 4GB, 64GB, WiFi + 4G LTE), Iron Grey"
          price="₹20,999.00"
        />

        <div className="amzn2">
          <Amazon
            src="https://m.media-amazon.com/images/I/41jdvXSoeyS._SL1000_.jpg"
            name="Lenovo Tab M10 FHD "
            id=" REL 25.65 cm (10.1 inch, 4 GB, 64 GB, Wi-Fi+LTE)"
            price="₹16,999.00"
          />

          <Amazon
            src="https://m.media-amazon.com/images/I/51WSSbntwKL._SL1000_.jpg"
            name="Lenovo Tab K10 FHD"
            id=" (10.3 inch (26.16 cm), 3GB, 32GB, Wi-Fi+LTE, Calling), Abyss Blue"
            price="₹15,999.00"
          />

          <Amazon
            src="https://m.media-amazon.com/images/I/51S2OfjRkIL._SL1000_.jpg"
            name="Lenovo Tab M10 FHD Plus"
            id="(26.16 cm (10.3-inch), 2GB, 32GB, Wi-Fi + LTE, Volte Calling), Platinum Grey"
            price="₹13,999.00"
          />

          <Amazon
            src="https://m.media-amazon.com/images/I/81v5gU236IL._SL1500_.jpg"
            name="FUSION5 4G Tablet"
            id="(24.38 cm/9.6 inch, 32GB, Wi-Fi + 4G LTE + Voice Calling, 8MP Camera, Bluetooth, Android 8.1 Oreo Google Certified Tablet PC, White)"
            price="₹9,999.00"
          />

          <Amazon
            src="https://m.media-amazon.com/images/I/51xwVmRZkqL._SL1200_.jpg"
            name="I KALL N18 Calling Tablet "
            id=" (10 Inch HD Display, 3GB, 32GB) (Black)"
            price="₹9,999.00"
          />
        </div>
      </div>
    </div>
  );
}
