import DeskBase from "assets/images/desk-base.png";
import WhiteBoard from "assets/images/white-board.png";
import BlackBoard from "assets/images/black-board.png";
import WoodenBoard from "assets/images/wooden-board.png";

export const CustomizeDesk = () => {
  return (
    <div className="customize-desk">
      {/* ----- section title ------  */}
      <div className="customize-section-text-content">
        <h3>Customize your standing desk</h3>
        <p>Todas las mesas estan diseñadas para adaptarse a tus necesidades.</p>
      </div>
      {/* -------- section image ------- */}
      <div className="customize-section-images-content">
        <div className="custom-desk">
          <img src={DeskBase} alt="desk base" className="desk-base" />
          <img src={WhiteBoard} alt="white board" className="white-board" />
          <img src={BlackBoard} alt="black board" className="black-board" />
          <img src={WoodenBoard} alt="wooden board" className="wooden-board" />
        </div>
      </div>
    </div>
  );
};
