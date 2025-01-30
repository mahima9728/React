import React  from "react";
import ReactDOM from 'react-dom/client';




const Header = () => {
  return (
    <div className="header">
      <div>
        <img
        className="logo"  src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Cart</li>
        </ul>
        

      </div>

     </div>
   )
}

const RestaurantCard = (props) => { 
  console.log(props);
  
  return (

    <div className="res-card" style={{ backgroundColor: "lightgray" }}>
      <img className="res-logo" src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg"/>
      <h3>{props.resName}</h3>
      <h4>{ props.cuisin}</h4>
      <h4>{ props.star}</h4>
      <h4>{ props.deliverytime}</h4>
     </div>
  );
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resName="Tasty Foods" cuisin="Biryani, North Indian, Asian" star="4.4" deliverytime="40 minutes" />
        
        <RestaurantCard resName="KFC" cuisin="Burger, Chicken, Fries" star="4.5" deliverytime="38 minutes" />
        </div>
    </div>
  )
}


const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
      
    </div>
  )

}
  
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Applayout/>);
