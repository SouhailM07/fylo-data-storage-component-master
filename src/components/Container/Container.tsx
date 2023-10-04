// style
import "./container.css";
// components
import { FyloPanel, StoragePanel } from "../../components";

export default function Container() {
  return (
    <>
      <div id="container">
        <div id="flexContainer" className="flex items-center ">
          <FyloPanel />
          <StoragePanel />
        </div>
      </div>
    </>
  );
}
