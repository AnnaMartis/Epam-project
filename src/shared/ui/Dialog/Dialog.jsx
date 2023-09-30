import { Portal } from "react-portal";
import "./Dialog.css";

export const Dialog = ({ title, children, onCloseCB }) => {
  return (
    <Portal>
      <div className="dialog">
        <div className="dialog-close-section">
          <p className="dialog-close" onClick={onCloseCB}>X</p>
        </div>
        <div className="dialog-title">{title}</div>

        {children}
        <div >
        </div>
      </div>
    </Portal>
  );
};
