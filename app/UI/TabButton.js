// components/TabButton.js

export default function TabButton({ isSelected, onClick, children }) {
  return (
    <button
    className="tab-btn"
      onClick={onClick}
      style={{
        margin: "5px",
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
        borderBottom: isSelected ? "2px solid grey" : "none",
        backgroundColor: isSelected ? " transparent" : " transparent",
        cursor: "pointer",
        textTransform:"Capitalize",
        marginBottom:"20px",
        fontSize:"1rem",
        padding:"0.3rem",
        fontFamily:"poppins"
       
      }}
    >
      {children}
    </button>
  );
}
