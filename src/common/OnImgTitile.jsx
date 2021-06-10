import React from "react";

function OnImgTitle({ title }) {
  return (
    <div className='bg-gradientX'>
      <h3 className='three-d-text border-red-bottom '>{`<${title} />`}</h3>
    </div>
  );
}

export default OnImgTitle;
