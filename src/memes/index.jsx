import React from "react";
import OnImgTitleHeader from "../common/on-img-title-header";

const YoutubeLinks = [
  `https://www.youtube.com/watch?v=8Bgg-krt2fQ`,
  `https://www.youtube.com/watch?v=ZPGWJUWyFeQ`,
  `https://www.youtube.com/watch?v=XzPXHgvUh3I`,
  `https://www.youtube.com/watch?v=9KGCMpWEgME`,
  `https://www.youtube.com/watch?v=7SzDXLMGxWE`,
  `https://www.youtube.com/watch?v=Mench-Urokw`,
  `https://www.youtube.com/watch?v=b7n-VDAYAYQ`,
  `https://www.youtube.com/watch?v=pRsYuBeXOuc`,
];

const MemesPage = () => {
  return (
    <>
      <OnImgTitleHeader
        title="Memes"
        subtitle="Just for FUN😊, Nothing serious here🙏"
      />

      {YoutubeLinks.map((lnk) => (
        <iframe
          src={lnk.replace("watch?v=", "embed/")}
          className="meme-iframe"
          title="mayank_mp5's meme galary"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ))}
    </>
  );
};

export default MemesPage;
