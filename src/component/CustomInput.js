const CustomInput = ({ name, value, onChange, type = "text", label,...others }) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="styled-label">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="styled-input"
        placeholder={`Enter ${label}`}
        required
        {...others}
      />
    </div>
  );
};

export default CustomInput;
