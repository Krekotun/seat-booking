export const shouldPopupFlip = (positionY, popupHeight) =>
	positionY - (popupHeight + 10) <= 0

export const getPopupPositionStyle = (position) => ({
	top: position.y,
	left: position.x
})
