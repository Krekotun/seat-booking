import React from 'react';
import { reduxForm, Field } from 'redux-form'
import validate from './validate'
import submit from './submit'
import Input from './Input'
import { connect } from 'react-redux'

let Form = (props) => {
	const { handleSubmit, pristine, reset, submitting } = props

	return (
		<form
			onSubmit={ handleSubmit( submit(props.dispatch) ) }
		>
			<fieldset>
				<Field component={ Input } name="team" label="Команда" />

				<Field component={ Input } name="captain" label="Капитан" />

				<Field component={ Input } name="phone" label="Телефон" />

				<Field component='input' type='hidden' name="table_id" label="Телефон" />

				<button type="submit">Зарезервировать</button>
			</fieldset>
		</form>
	)
}

Form = reduxForm({
	form: 'reservation',
	validate,
	touchOnBlur: false,
	touchOnChange: false
})(Form)

Form = connect(
	state => ({
		initialValues: state.formPopup.data
	})
)(Form)

export default Form
