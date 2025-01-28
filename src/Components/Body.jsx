import CondRendering from "./CondRendering";
import ImageGen from "./ImageGen";
import Mapping from "./Mapping";
import useOnlineStatus from "./Utils/useOnlineStatus";

const Body = () => {
  const onlineStatus = useOnlineStatus();
  console.log("onlineStatus", onlineStatus);
  if (onlineStatus === false) {
    return (
      <h1>
        Looks likes you are offline. Please check your internet connection
      </h1>
    );
  }
  return (
    <div className="mainSection">
      {/* <CondRendering /> */}
      <Mapping />
      {/* <ImageGen /> */}
    </div>
  );
};

export default Body;
