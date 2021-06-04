import React from "react";

function Achievements() {
  return (
    <div
      className='w-100 d-flex shadow-lg p-3 bg-white roundedX row m-auto'
      style={{ marginBottom: "10px" }}>
      <h4>Highlights</h4>
      <p>
        🏆 Our{" "}
        <a href='https://github.com/Mayank-MP05/molequilizer' target='_blank'>
          Chemical Reaction Balancer Project
        </a>{" "}
        was selected in{" "}
        <a href='https://toycathon.mic.gov.in/' target='_blank'>
          Toycathon 2021
        </a>
      </p>
      <p>
        👨‍💻 Competitive Coding - Codechef Starters 2021 -{" "}
        <a
          href='https://www.codechef.com/rankings/START2C?order=asc&search=MAYANK&sortBy=rank'
          target='_blank'>
          Rank 87/6338
        </a>
      </p>
      <p>
        👨‍💻 Competitive Coding - International Coding Marathon -{" "}
        <a
          href='https://www.codechef.com/rankings/ICM2021B?order=asc&search=mayank&sortBy=rank'
          target='_blank'>
          Rank 124
        </a>
      </p>
      <p>
        🤖 Machine Learning - How NOT to lose a customer -{" "}
        <a
          href='https://www.hackerearth.com/challenges/competitive/hackerearth-machine-learning-challenge-predict-customer-churn/leaderboard/predict-the-churn-risk-rate-11-fb7a760d/page/4/'
          target='_blank'>
          Rank - 172 / 12242
        </a>
      </p>
      <p>
        📜 My Tutorial based{" "}
        <a
          href='https://javascript.plainenglish.io/how-to-build-a-real-time-multiuser-drawing-app-using-node-and-socket-io-bdebc5df916'
          target='_blank'>
          Article
        </a>{" "}
        has been published in "JS in Plain English" Publication
      </p>
    </div>
  );
}

export default Achievements;
