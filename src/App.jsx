import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import AnimatedCursor from "react-animated-cursor";
import "@splidejs/react-splide/css";
import { useDispatch } from "react-redux";
import LoadWrapper from "./components/wrappers/LoadWrapper";
import { useEffect } from "react";
import { setLoading } from "./features/appSlice/appSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(false));
  }, []);

  return (
    <div>
      <AnimatedCursor
        innerSize={5}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        trailingSpeed={5}
        clickables={["li", "a", ".click", "button", "img", ".cursor-hover"]}
        outerStyle={{
          backgroundColor: "var(--cursor-bg-color)",
        }}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
      />
        <LoadWrapper>
          <RouterProvider router={routes} />
        </LoadWrapper>
 
    </div>
  );
}

export default App;
