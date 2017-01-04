function validate(values) {
	let errors = {}

	if (!values.team) {
		errors.team = 'Заполните поле'
	}

	if (!values.captain) {
		errors.captain = 'Заполните поле'
	}

	if (!values.phone) {
		errors.phone = 'Заполните поле'
	} else if ( isNaN(Number(values.phone)) ) {
		errors.phone = 'Неправильный формат'
	} else if ( values.phone.length < 6 ) {
		errors.phone = 'Неправильный номер'
	}

	return errors
}

export default validate
