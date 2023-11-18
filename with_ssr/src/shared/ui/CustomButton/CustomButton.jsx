import "./CustomButton.css";

export const CustomButton = ({ label, ...sxStyles }) => {
  return <button {...sxStyles}>{label}</button>;
};
