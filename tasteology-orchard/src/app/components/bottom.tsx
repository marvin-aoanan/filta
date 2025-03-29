import { Caramel } from "next/font/google";
import Card from "./card";

export default function BottomComponent() {
  return (
    <div className="bottomComp">
      <div className="headline"></div>
      <h2>Taste the Colours</h2>
      <div className="cardlist">
        <Card />
      </div>

    </div>
  )
}