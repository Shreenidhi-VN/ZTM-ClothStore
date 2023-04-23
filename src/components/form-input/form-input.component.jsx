import "./form-input.styles.scss";
const FormInput = ({ label, ...otherInputs }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherInputs} />
      {label && (
        <label
          className={`${
            otherInputs.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
export default FormInput;
