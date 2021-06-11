import React from "react";

function OnImgTitle({ title, subtitle }) {
  return (
    <div className='bg-gradientX'>
      <h3 className='three-d-text border-red-bottom '>{`<${title} />`}</h3>
      {subtitle ? (
        <>
          <p className='d-block'>{subtitle}</p>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default OnImgTitle;
