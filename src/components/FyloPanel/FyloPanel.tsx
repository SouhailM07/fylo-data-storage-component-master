// style
import "./fyloPanel.css";
// assets
import fyloIcon from "../../assets/images/logo.svg";
import uploadIcon from "../../assets/images/icon-upload.svg";
import folderIcon from "../../assets/images/icon-folder.svg";
import documentIcon from "../../assets/images/icon-document.svg";

/*=======================================================================================*/
// component section
/*=======================================================================================*/

export default function FyloPanel() {
  let arrOfIcons: string[] = [documentIcon, folderIcon, uploadIcon];

  return (
    <>
      <div id="FyloPanel">
        <img src={fyloIcon} alt="FyloLogo" className="h-[3.2rem]" />
        <ul>
          {arrOfIcons.map((e, i) => {
            return (
              <li key={i}>
                <img src={e} alt="Icon Not Supported" />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
