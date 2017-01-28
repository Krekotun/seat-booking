import React from 'react';
import { reduxForm, Field } from 'redux-form'
import validate from './helpers/validate'
import Input from './Input'
import { connect } from 'react-redux'
import { saveSeat } from 'store/modules/seats'

let Form = (props) => {
	const { handleSubmit, pristine, reset, submitting, dispatch } = props

	return (
		<form
			onSubmit={ handleSubmit( values => dispatch( saveSeat(values) ) ) }
		>
			<fieldset>
				<Field component={ Input } name="team" label="Команда" />

				<Field component={ Input } name="captain" label="Капитан" />

				<Field component={ Input } name="phone" label="Телефон" />

				<Field component='input' type='hidden' name="table_id"/>

				<Field component='input' type='hidden' name="game_num"/>

				<Field component='input' type='hidden' name="game_type"/>

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
		initialValues: {
			...state.formPopup.data,
			game_num: state.game.num,
			game_type: state.game.type
		}
	})
)(Form)

export default Form
