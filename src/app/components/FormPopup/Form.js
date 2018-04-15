import React from 'react';
import { reduxForm, Field } from 'redux-form'
import validate from './validate'
import Input from './Input'
import { connect } from 'react-redux'
import { saveSeat } from 'store/modules/seats'

let Form = (props) => {
	const { handleSubmit, pristine, reset, submitting, dispatch } = props


	return (
		<form
			onSubmit={
				handleSubmit(
					values => {
						dispatch(saveSeat({ ...values, gameId: props.gameId }))
						reset()
					}

				)
			}
		>
			<fieldset>
				<Field component={ Input } name="team" label="Команда" />

				<Field component={ Input } name="captain" label="Капитан" />

				<Field component={ Input } name="phone" label="Телефон" />

				<Field component='input' type='hidden' name="tableId"/>

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
	state => {
		return {
			gameId: +state.game.id,
			initialValues: {
				...state.formPopup.data
			}
		}
	}
)(Form)

export default Form
