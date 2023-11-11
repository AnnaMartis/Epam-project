'use client'

import { useRouter } from 'next/navigation'
import "./Dialog.css";

export const Dialog = ({ title, children }) => {
  const router = useRouter()
  return (
    <>
      <div className="dialog">
        <div className="dialog-close-section">
          <button className="dialog-close" onClick={() => router.back()}>
            X
          </button>
        </div>
        <div className="dialog-title">{title}</div>
        {children}
      </div>
    </>
  );
};
