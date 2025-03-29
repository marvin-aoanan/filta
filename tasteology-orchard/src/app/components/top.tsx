"use client";

import Image from "next/image";
import { handleClick } from "./actions/handle-click";

export default function TopComponent() {
  return (
    <div className="topComp BlockImage-Text">
      <div className="Images">
        <div className="Left">
          <Image
            id="left-image"
            src="/image-left.png"
            alt="Left image"
            width={372}
            height={600}
            priority
            onClick={handleClick}
          />
        </div>
        <div className="Right">
        <div className="Right-Top">
          <Image
            id="righ-top-image"
            src="/image-right-top.png"
            alt="Right top image"
            width={372}
            height={295}
            priority
            onClick={handleClick}
          />
        </div>
        <div className="Right-Bottom">
          <Image
            id="right-bottom-image"
            src="/image-right-bottom.png"
            alt="Right bottom image"
            width={372}
            height={295}
            priority
            onClick={handleClick}
          />
        </div>

        </div>
       
      </div>
      <div className="Content">
        <div className="Headline">
          <h1 className="Heading">What Does Cooking Mean?</h1>
        </div>
        <p>Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...</p>
        <h4 className="text-red">THE PERFECT EGG</h4>
        <p className="font-bold">Keep water between 67 and 68°C for a flavourful, tender yolk</p>
      </div>
    </div>
  )
}

