// style
import "./container.css";
// components
import { FyloPanel } from "../../components";

export default function Container() {
  return (
    <>
      <div
        id="container"
        className="h-screen bg-VeryDarkBlue flex items-center"
      >
        <FyloPanel />
      </div>
    </>
  );
}
