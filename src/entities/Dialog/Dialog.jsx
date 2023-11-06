import { Portal } from "react-portal";
import { Link } from "react-router-dom";
import "./Dialog.css";

export const Dialog = ({ title, children}) => {
  return (
    <Portal className="dialog-wrapper">
      <div className="dialog">
        <div className="dialog-close-section">
          <Link className="dialog-close" to="/">X</Link>
        </div>
        <div className="dialog-title">{title}</div>
        {children}
        <div >
        </div>
      </div>
    </Portal>
  );
};
