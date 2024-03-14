import { useEffect, useState } from "react";
import "../CSS/style.css"

function LeftSideExploreMore(props) {
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
        <div className={windowWidth < 500 ? "d-flex" : "row"}
        style={
          windowWidth <= 500
            ? { marginTop:"90px", flexDirection: "column-reverse"  }
            : { marginTop:"90px"}
        }>
        <div className="col-sm-1"></div>

        <div className="col-sm-5 my-5 leftsideExplore">
        <h1 className="leftsideExploreHeading"><strong style={{color:"#2693fa"}}>{props.heading}</strong><strong>{props.heading2}</strong></h1>    
        <p className="leftsideExploreParagraph">{props.subheading}</p>     
        <div className="my-5 leftsideExploreButton">
        <button onClick={props.handleController} className="primaryButton mx-2"><b>Explore More</b></button>
        <button className="rightGenericButton mx-2"><b>{props.secondbutton}</b></button>
        </div>
        </div>
        <div className="col-sm-6 leftsideExploreImage">
        <a href="/" className="">
            <img className="imageSetting"  src={props.picture} alt="profile picture"/>
        </a>
        </div>
      </div>

    );
  }
  
  export default LeftSideExploreMore;
  