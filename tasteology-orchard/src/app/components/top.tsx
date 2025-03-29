import Image from "next/image";

export default function TopComponent() {
  return (
    <div className="BlockImage-Text">
      <div className="Images">
        <div className="Left">
          <Image
            src="/image-left.png"
            alt="Left image"
            width={372}
            height={600}
            priority
          />
        </div>
        <div className="Right-Top">
          <Image
            src="/image-right-top.png"
            alt="Right top image"
            width={372}
            height={295}
            priority
          />
        </div>
        <div className="Right-Bottom">
          <Image
            src="/image-right-bottom.png"
            alt="Right bottom image"
            width={372}
            height={295}
            priority
          />
        </div>
      </div>
      <div className="Content">
        <div className="Headline">
          <h1>What Does Cooking Mean?</h1>
        </div>
        <p>Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...</p>
        <h4>THE PERFECT EGG</h4>
        <p>Keep water between 67 and 68°C for a flavourful, tender yolk</p>
      </div>
    </div>
  )
}

