"use client";

import Link from "next/link";
import { handleClick } from "./actions/handle-click";
import { Card } from "./card";
import Image from "next/image";

export default function BottomComponent() {
  return (
    <div className="bottomComp BlockImage-Text">
      <div className="Headline">
        <h2 className="Heading">
          <Link href="/" id="taste-the-colours" onClick={handleClick}>Taste the Colours</Link>
        </h2>
      </div>
      
      <div className="Card-list">
        <Card>
          <div className="Card-image">
          <Link href={`/red`} id="red" onClick={handleClick}>
          <Image
            id="red-food"
            data-name="Red food"
            src="/red-food.png"
            alt="Red food"
            width={375}
            height={300}
          />
          </Link>
          </div>
          <div className="Card-text">
            <h3><Link href="/" id="red-food" onClick={handleClick}>Red</Link></h3>
            <p>Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.</p>
          </div>
        </Card>
        <Card>
          <div className="Card-image">
          <Link href={`/green`} id="green" onClick={handleClick}>
            <Image
              id="green-food"
              data-name="Green food"
              src="/green-food.png"
              alt="Green food"
              width={375}
              height={300}
            />
          </Link>
          </div>
          <div className="Card-text">
            <h3><Link href="/" id="green-food" onClick={handleClick}>Green</Link></h3>
            <p>Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours.</p>
          </div>
        </Card>
        <Card>
          <div className="Card-image">
          <Link href={`/white`} id="white" onClick={handleClick}>
          <Image
            id="white-food"
            data-name="White food"
            src="/white-food.png"
            alt="White food"
            width={375}
            height={300}
          />
          </Link>
          </div>
          <div className="Card-text">
            <h3><Link href="/" id="white-food" onClick={handleClick}>White</Link></h3>
            <p>White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.</p>
          </div>
        </Card>
      </div>

    </div>
  )
}