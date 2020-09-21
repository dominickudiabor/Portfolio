import React from 'react'
import './styles.scss'

interface FormProps {
  name: string
  type: string
  value: string
  handleChange: (event: { target: { value: string; name: string } }) => void
}

const FormInput = ({ name, type, handleChange, value }: FormProps) => (
  <div className="input">
    <input
      onChange={handleChange}
      value={value}
      autoComplete="off"
      id={name}
      type="text"
      name={name}
      className="input__field"
    />
    <label htmlFor={name} className="input__label">
      {type}
    </label>
  </div>
)

export default FormInput
