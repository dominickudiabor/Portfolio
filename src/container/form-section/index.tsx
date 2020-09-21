import React from 'react'

import FormInput from '../../components/form-input'
import SectionContainer from '../../components/section-container'
import section from '../../data/container-section'
import './styles.scss'

const ContactForm = () => {
  const [formField, setFormField] = React.useState({
    name: '',
    email: '',
    message: '',
  })
  const { name, email, message } = formField

  const handleChange = (event: { target: { value: string; name: string } }) => {
    const { value, name } = event.target
    setFormField({ ...formField, [name]: value })
  }

  const allProps = section[3]

  return (
    <SectionContainer {...allProps}>
      <form className="contact-form__container" autoComplete="off">
        <FormInput name="name" type="Name" value={name} handleChange={handleChange} />
        <FormInput name="email" type="Email" value={email} handleChange={handleChange} />
        <FormInput name="message" type="Message" value={message} handleChange={handleChange} />
        <button disabled>SUBMIT</button>
      </form>
    </SectionContainer>
  )
}
export default ContactForm
