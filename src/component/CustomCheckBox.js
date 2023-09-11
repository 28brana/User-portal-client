const CustomCheckBox = ({ name, value, onChange, label, isChecked }) => {
    return (
      <label className="inline-flex items-center mr-6">
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={isChecked}
          onChange={onChange}
          className="form-checkbox text-blue-500 h-4 w-4"
        />
        <span className="ml-2 capitalize">{label}</span>
      </label>
    );
  };

  export default CustomCheckBox;