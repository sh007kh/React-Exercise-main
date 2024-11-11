const FormInput = ({ label, name, type, DefaultValue }) => {
  return (
    <label className="form-control ">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        name={name}
        defaultValue={DefaultValue}
        className="input input-bordered "
      />
    </label>
  );
};

export default FormInput;
