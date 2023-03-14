
export const LinksRenderer = (p_id) => {
    switch (p_id) {
      case "face-recognition-system":
        return (
          <>
            <LinksBtn
              title={"Github"}
              link={`https://github.com/Mayank-MP05/Deep-Learning-Face-Recognition-ML-DL`}
            />
          </>
        );
      case "spacex-informer":
        return (
          <>
            <LinksBtn
              title={"Live Demo"}
              link={`https://the-spacex-informer.netlify.app/`}
            />
            <LinksBtn
              title={"Github"}
              link={`https://github.com/Mayank-MP05/SpaceX-Info-React-Ionic-App`}
            />
          </>
        );
      case "nemo-goa-guide":
        return (
          <>
            <LinksBtn
              title={"Github"}
              link={`https://github.com/Mayank-MP05/SIH_Goa_Info_Web-Android_App`}
            />
          </>
        );
      case "exam-beep":
        return (
          <>
            <LinksBtn
              title={"Frontend"}
              link={`https://github.com/Mayank-MP05/Exam_Beep_Frontend`}
            />{" "}
            <LinksBtn
              title={"Backend"}
              link={`https://github.com/Mayank-MP05/Exam_Beep_Backend`}
            />
          </>
        );
      case "team-automatons":
        return (
          <>
            <LinksBtn
              title={"Live Demo"}
              link={`https://mayank-mp05.github.io/Team_Automatons_website/`}
            />{" "}
            <LinksBtn
              title={"Github"}
              link={`https://github.com/Mayank-MP05/Team_Automatons_website`}
            />
          </>
        );
      case "hitech-controls":
        return (
          <>
            <LinksBtn
              title={"Live Demo"}
              link={`https://hitech-new.netlify.app/`}
            />{" "}
            <LinksBtn
              title={"Github"}
              link={`https://github.com/Mayank-MP05/HiTech-New`}
            />
          </>
        );
      case "unicktoe":
        return (
          <>
            <LinksBtn
              title={"Live Demo"}
              link={`https://play.google.com/store/apps/details?id=com.firstkit.unicktoe&hl=en_US&gl=US`}
            />{" "}
            <LinksBtn
              title={"Github"}
              link={`https://github.com/Mayank-MP05/U-Nick-Toe`}
            />
          </>
        );
  
      default:
        return <p>{`<Redirect to='/explore' />;`}</p>;
    }
  };