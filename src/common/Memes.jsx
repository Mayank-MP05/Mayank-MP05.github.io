import React from "react";
import OnImgTitle from "./OnImgTitile";

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

function Memes() {
  return (
    <>
      <OnImgTitle
        title='Memes'
        subtitle='Just for FUN😊, Nothing serious here🙏'
      />
      {/* <iframe
        src='https://www.youtube.com/embed/pRsYuBeXOuc'
        className='meme-iframe'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen></iframe> */}

      {YoutubeLinks.map((lnk) => (
        <iframe
          src={lnk.replace("watch?v=", "embed/")}
          className='meme-iframe'
          title="mayank_mp5's meme galary"
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen></iframe>
      ))}
    </>
  );
}

export default Memes;
