import React from 'react';
import { reduxForm, Field } from 'redux-form'
import validate from './validate'
import submit from './submit'
import Input from './Input'

const Form = (props) => {
	const { handleSubmit, pristine, reset, submitting } = props

	return (
		<form
			onSubmit={ handleSubmit(submit) }
		>
			<fieldset>
				<Field component={ Input } name="team" label="Команда" />

				<Field component={ Input } name="captain" label="Капитан" />

				<Field component={ Input } name="phone" label="Телефон" />

				<button type="submit">Зарезервировать</button>
			</fieldset>
		</form>
	)
}

export default reduxForm({
	form: 'reservation',
	validate,
	touchOnBlur: false,
	touchOnChange: false
})(Form)
