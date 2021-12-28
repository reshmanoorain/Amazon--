import "./Amazonfeed.css";

function Amazonfeed() {
  return (
    <div className="feed">
      <b>Department</b>
      <ul className="list">
        <li>Accessories</li>
        <li>Tablets</li>
        <li>Headphones</li>
        <li>Home audio</li>
        <li>Power Accessories</li>
        <li>Laptops</li>
        <li>Wearable technology</li>
        <li>Cameras & Photography</li>
      </ul>
      <b>Amazon Prime</b>
      <br />
      <input id="prime" value="prime" type="checkbox" />
      <label for="prime">Prime</label>
      <br />
      <br />
      <b>Pay On Delivery</b>
      <br />
      <input id="pay" value="pay" type="checkbox" />
      <label for="pay">Eligible for Pay On Delivery</label>
      <br />
      <br />
      <b>Brands</b>
      <br />
      <input id="brnd" value="brnd" type="checkbox" />
      <label for="brnd">Lenovo</label>
      <br />
      <input id="brnd" value="brnd" type="checkbox" />
      <label for="brnd">Samsung</label>
      <br />
      <input id="brnd" value="brnd" type="checkbox" />
      <label for="brnd">Dell</label>
      <br />
      <br />
      <b>New Arrivals</b>
      <br />
      Last 30 days
      <br />
      Last 90 days
      <br />
      <br />
      <b>Price</b>
      <br />
      ₹10,000 - ₹20,000 ₹20,000 - ₹30,000 ₹30,000 - ₹40,000 Over ₹40,000
      <br />
      <br />
      <b>Deals</b>
      <br />
      <input id="brnd" value="brnd" type="checkbox" />
      <label for="brnd">Today's Deals</label>
      <br />
      <br />
      <b>Discounts</b>
      <br />
      10% Off or more
      <br />
      25% Off or more
      <br />
      35% Off or more
      <br />
      50% Off or more
      <br />
      70% Off or more
      <br />
      <br />
      <b>Availability</b>
      <br />
      <input id="brnd" value="brnd" type="checkbox" />
      <label for="brnd">Include Out of Stock</label>
    </div>
  );
}

export default Amazonfeed;
