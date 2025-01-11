const FormInput = ({ label, name, type, DefaultValue, size }) => {
  return (
    <div className="form-control ">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={DefaultValue}
        className={` input input-bordered ${size}`}
      />
    </div>
  );
};

export default FormInput;
