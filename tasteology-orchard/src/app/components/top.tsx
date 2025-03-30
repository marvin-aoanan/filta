"use client";

import Image from "next/image";
import { handleClick } from "./actions/handle-click";
import Link from "next/link";

export default function TopComponent() {
  return (
    <div className="topComp BlockImage-Text">
      <div className="Images">
        <div className="Left">
        <Link href="/cooking" id="cooking" onClick={handleClick}>
          <Image
            id="left-image"
            data-name="Cooking"
            src="/image-left.png"
            alt="Left image"
            width={372}
            height={600}
            priority
          />
        </Link>
        </div>
        <div className="Right">
          <div className="Right-Top">
            <Link href="/recipe" id="recipe" onClick={handleClick}>
              <Image
                id="righ-top-image"
                data-name="Recipe"
                src="/image-right-top.png"
                alt="Right top image"
                width={372}
                height={295}
                priority
              />
            </Link>
          </div>
          <div className="Right-Bottom">
            <Link href="/eggs" id="eggs" onClick={handleClick}>
              <Image
                id="right-bottom-image"
                data-name="Tray of eggs"
                src="/image-right-bottom.png"
                alt="Right bottom image"
                width={372}
                height={295}
                priority
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="Content">
        <div className="Headline">
          <h1 className="Heading">
            <Link href="/" id="what-does-cooking-mean" onClick={handleClick}>What Does Cooking Mean?</Link>
          </h1>
        </div>
        <p>Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...</p>
        <h4 className="text-red"><Link href="/" id="prefect-egg" onClick={handleClick}>THE PERFECT EGG</Link></h4>
        <p className="font-bold">Keep water between 67 and 68°C for a flavourful, tender yolk</p>
      </div>
    </div>
  )
}

