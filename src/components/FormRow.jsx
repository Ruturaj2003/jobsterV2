const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name}>{labelText || name}</label>
      <input
        type={type}
        name="name"
        id={name}
        className="form-input"
        autoComplete="off"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
export default FormRow;
