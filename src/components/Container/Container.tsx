// style
import "./container.css";
// components
import { FyloPanel, StoragePanel } from "../../components";

export default function Container() {
  return (
    <>
      <div
        id="container"
        className="h-screen bg-VeryDarkBlue flex items-center justify-center"
      >
        <div className="flex items-center ">
          <FyloPanel />
          <StoragePanel />
        </div>
      </div>
    </>
  );
}
