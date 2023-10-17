import { Portal } from "react-portal";
import "./Dialog.css";

export const Dialog = ({ title, children, onClose}) => {
  return (
    <Portal>
      <div className="dialog">
        <div className="dialog-close-section">
          <p className="dialog-close" onClick={onClose}>X</p>
        </div>
        <div className="dialog-title">{title}</div>

        {children}
        <div >
        </div>
      </div>
    </Portal>
  );
};
