import { useEffect, useState } from "react";
import Opening from "./components/Opening";
import Saitify from "./components/Saitify";

const App = () => {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 4000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      {isSplashVisible && <Opening />}
      <Saitify />
    </>
  );
};

export default App;
