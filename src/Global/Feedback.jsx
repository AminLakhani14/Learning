import { TextField } from "@mui/material";
import "../CSS/Feeback.css";
import { useEffect, useState } from "react";

function Feedback(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Function to update the windowWidth state when the resize event occurs
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="pt-5 HeadingBackground"
    style={
      windowWidth <= 500
        ? { marginTop:"90px" }
        : { marginTop:"90px"}
    }
    >
      <div className="width50">
        <div className="col-lg-3"></div>
        <div data-aos="fade-right" className={windowWidth <= 700?"justify-content-center d-flex flex-column align-items-center":"justify-content-center d-flex flex-column"}>
          <h1  style={
            windowWidth <= 700
              ? { fontSize: "24px",textAlign:'center', padding:'0px 20px 0px 20px' }
              : { fontSize: "55px" }
          } className="mb-4">
            <b>
              Ready to discuss your Cross-Platform App development project? Get
              in touch today to get started.
            </b>
          </h1>
        </div>
      </div>
      <div className="width75 d-flex">
        <div className="FeedbackBackground" data-aos="fade-left">
          <TextField
            id="standard-basic"
            className="w-75 "
            style={{ marginLeft: "40px", marginBottom: "30px",marginTop:"20px" }}
            label="Full Name*"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            className="w-75 "
            style={{ marginLeft: "40px", marginBottom: "30px" }}
            label="Work Email*"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            className="w-75 "
            style={{ marginLeft: "40px", marginBottom: "30px" }}
            label="Work Phone*"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            className="w-75 "
            style={{ marginLeft: "40px", marginBottom: "30px" }}
            label="Company Name*"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            className="w-75 "
            style={{ marginLeft: "40px", marginBottom: "30px" }}
            label="Messge*"
            variant="standard"
          />
          <div style={
                  windowWidth <= 500
                    ? { display: "flex",
                    justifyContent: "center",
                    marginTop: "30px",
                    marginBottom: "15px",}
                    : { display: "flex",
                    justifyContent: "center",
                    marginTop: "30px",}
                }>
            <button className="headerMenuButton mx-2">
              <b>Get in Touch</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
