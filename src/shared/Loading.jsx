import "./../styles/Loading.css"; // Import styles for loading component
import loadingImage from "../assets/loading3.gif"; // Replace with your loading GIF or SVG

const Loading = () => {
  return (
    <div className="loading-container">
      <img src={loadingImage} alt="Loading..." className="loading-image" />
    </div>
  );
};

export default Loading;
