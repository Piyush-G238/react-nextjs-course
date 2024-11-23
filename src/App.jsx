import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import OrderButton from "./components/order-button/OrderButton";
import SubHeader from "./components/sub-header/SubHeader";
import MenuList from "./components/menu-list/MenuList";

import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <Header>
        <h1>Fast react pizza co.</h1>
      </Header>

      <SubHeader>
        <h1>Our menu</h1>
        <p>
          Authentic Italian cuisione. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>
      </SubHeader>

      <MenuList />

      <Footer>
        <p>We're open until 22:00. Come visit us or order online.</p>
        <OrderButton value="Order now" />
      </Footer>
    </div>
  );
}
