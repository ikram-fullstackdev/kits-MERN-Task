export const customStyles = {
  menu: (provided) => ({
    ...provided,
    border: "1px solid #ccc",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
    marginLeft: "-20px",
    marginTop: "20px",
    width: "inherit",
    overflow: "scroll",
    position: "absolute",
    width: "69vw",
    maxHeight: "400px",
    scrollbarColor: "transparent transparent",
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#007bff" : "transparent",
    color: state.isSelected ? "#fff" : "inherit",
    cursor: "pointer",
    backgroundColor: state.isFocused ? "lightblue" : "white",
  }),

  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#202A44",
    color: "white",
    borderRadius: "0.313rem",
    gap: "0.625rem",
  }),

  multiValueLabel: (provided) => ({
    ...provided,
    color: "white",
  }),

  control: (provided, state) => ({
    ...provided,
    border: "none",
    borderRight: "none",
    boxShadow: state.isFocused ? "0 0 0 0 rgba(0, 0, 0, 0.2)" : "none",
  }),

  dropdownIndicator: (provided) => ({
    ...provided,
    display: "none",
  }),

  indicatorsContainer: (provided) => ({
    ...provided,
    display: "none",
  }),
};
