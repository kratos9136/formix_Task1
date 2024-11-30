// SharedInput.js
import React from 'react';
import { useField } from 'formik';

const SharedInput = ({ label, type = 'text', options = [], ...props }) => {
  const [field, meta] = useField(props);

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return <textarea className="form-control" {...field} {...props} />;
      case 'checkbox':
        return (
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              {...field}
              {...props}
              checked={field.value}
            />
            <label htmlFor={props.id || props.name} className="form-check-label">
              {label}
            </label>
          </div>
        );
      case 'radio':
        return options.map((option) => (
          <div key={option.value} className="form-check">
            <input
              type="radio"
              className="form-check-input"
              {...field}
              {...props}
              value={option.value}
              checked={field.value === option.value}
            />
            <label className="form-check-label" htmlFor={option.value}>
              {option.label}
            </label>
          </div>
        ));
      default:
        return <input className="form-control" type={type} {...field} {...props} />;
    }
  };

  return (
    <div className={`form-group ${type === 'checkbox' ? 'form-check' : ''}`}>
      {type !== 'checkbox' && label && <label htmlFor={props.id || props.name}>{label}</label>}
      {renderInput()}
      {meta.touched && meta.error ? (
        <div className="invalid-feedback d-block">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SharedInput;
