import Lottie from "lottie-react";
import animationData from "../../assets/loader_data.json";

function LoaderNew() {
  return (
    <Lottie animationData={animationData} style={{ width: 400 }} loop={false} />
  );
}

export default LoaderNew;
