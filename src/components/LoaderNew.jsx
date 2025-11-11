import Lottie from "lottie-react";
import animationData from "../../assets/data3.json";

function LoaderNew() {
  return (
    <Lottie animationData={animationData} style={{ width: 400 }} loop={false} />
  );
}

export default LoaderNew;
