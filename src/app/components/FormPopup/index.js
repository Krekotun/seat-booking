import React from 'react';
import connect from './connect'
import cx from 'classnames'

const FormPopup = (props) => {

	console.log(props);

	let klass = cx("iquiz_tables--form", "iquiz_tables--popup", {
		'-show': props.isOpened
	})

	let style = {
		top: props.position.y,
		left: props.position.x
	}

	return (
		<form
			action="#"
			className={ klass }
			style={ style }
		>
			<fieldset>
				<input type="text" placeholder="Команда" name="team" />
				<input type="text" placeholder="Капитан" name="captain" />
				<input type="text" placeholder="Телефон" name="phone" />
				<button type="submit">Зарезервировать</button>
			</fieldset>
		</form>
	)
}

export default connect(FormPopup)
