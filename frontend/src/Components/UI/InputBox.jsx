const InputBox = ({ label, value, name, handleChange, placeholder }) => {
  
  return (
    <div>
      <label>{label}</label>
      <input
        placeholder={placeholder}
        className="block border rounded-md border-gray-300 w-full p-2 mb-4"
        onChange={handleChange}
        value={value}
        name={name}
      ></input>
    </div>
  );
};

export default InputBox;
