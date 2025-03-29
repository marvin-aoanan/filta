"use client";

import Link from "next/link";
import { handleClick } from "./actions/handle-click";
import { Card } from "./card";
import Image from "next/image";

export default function BottomComponent() {
  return (
    <div className="bottomComp BlockImage-Text">
      <div className="Headline">
        <h2 className="Heading">Taste the Colours</h2>
      </div>
      
      <div className="Card-list">
        <Card>
          <div className="Card-image">
          <Link href={`/photo-feed/4`}>
          <Image
            id="red-food"
            src="/red-food.png"
            alt="Red food"
            width={375}
            height={300}
            onClick={handleClick}
          />
          </Link>
          </div>
          <div className="Card-text">
            <h3>Red</h3>
            <p>Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.</p>
          </div>
        </Card>
        <Card>
          <div className="Card-image">
          <Link href={`/photo-feed/5`}>
            <Image
              id="green-food"
              src="/green-food.png"
              alt="Green food"
              width={375}
              height={300}
              onClick={handleClick}
            />
          </Link>
          </div>
          <div className="Card-text">
            <h3>Green</h3>
            <p>Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours.</p>
          </div>
        </Card>
        <Card>
          <div className="Card-image">
          <Link href={`/photo-feed/6`}>
          <Image
            id="white-food"
            src="/white-food.png"
            alt="White food"
            width={375}
            height={300}
            onClick={handleClick}
          />
          </Link>
          </div>
          <div className="Card-text">
            <h3>White</h3>
            <p>White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.</p>
          </div>
        </Card>
      </div>

    </div>
  )
}