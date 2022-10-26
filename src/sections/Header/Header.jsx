import { Navbar } from "componenets/Navbar";

export const Header = () => {
  return (
    <header>
      {/* ----- navbar links ------ */}
      <Navbar />
      {/* ------ header text content ------  */}
      <div className="header-content">
        <div className="header-title">
          <h1>
            Adaptable to your <span className="red-text">life</span>.
          </h1>
          <button className="header-button">Compra</button>
        </div>
      </div>
    </header>
  );
};
