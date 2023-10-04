// assets
import "./storagePanel.css";

export default function StoragePanel() {
  return (
    <>
      <div id="StoragePanel">
        {/*  */}
        <div id="StoragePanel-top">
          <div id="StoragePanel-top-comment">
            <div id="StoragePanel-top-comment-text">
              <span className="text-[2.7rem] text-black mr-3">185</span>
              <span className="mt-2 " style={{ wordSpacing: "3px" }}>
                GB LEFT
              </span>
            </div>
            <div id="panelCurve"></div>
          </div>
          {/*  */}
          <p id="StoragePanel-top-title">
            You've used <span>815 GB </span>
            of your storage
          </p>
        </div>
        {/*  */}
        <div id="StoragePanel-bottom">
          <div>
            <div id="StoragePanel-bottom-barContainer">
              <div id="StoragePanel-bottom-bar">
                <div className="w-[1rem] h-[1rem] bg-white rounded-full"></div>
              </div>
            </div>
            <div id="StoragePanel-bottom-storageUnits">
              <span>0 GB</span>
              <span>1000 GB</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
