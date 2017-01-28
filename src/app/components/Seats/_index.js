import React, { Component } from 'react';
import connect from './connect'
import Seats from './Seats'
import './seats.styl'
import controller from './controoler'
controller.bind(Seats)

export default connect(Seats)

BlueSeats
  index.js
VIPSeats
  index.js
...

Promise(plusOne).then(plusTwo)

Promise()
Promise(plusOne).map(plusTwo)   P + f
Plomise(plusOne).flatMap(Promise(plusTwo))  P +: P

map
flatMap

{a: 1, b:2}

FOP, deltajs, AOP, mixins, stampit

const a = {
	prop
	click: () => (prop)
}

const b = {
	prop
	scroll: () => (prop)
}

c = compose(a, b)

c = {
	click: () => ()
	scroll: () => ()
}



ScrollableComponent
	dimensions -> emitter/stream
		width  ~>
		height ~>
		update();

		scrollInfluencers
			itemHeight

	scrollPosition -> emitter/stream
		offsetPx ~>
		speed  ~>
		scrollTo(index)

	constructor(){
		this.method = this.method.bind(this)
	}

  myProp: this.method() // method is not defined

  method = () => {

	}

classIns.method()

onClick={ method }

push/pull

push -> notification
pull -> query


Навести порядок в компонентах (compose) разделить компонент, коннект и стили.
Продумывать наперед изменение легкое компонентов (proptypes)
Универсальный КомпонентЛист для всего приложения (итерация по массиву)
Компоузинг редьюсеров (redux-actions)
ImmutableJS для стора
Структура папок (src/app/containers)

Нормальные имена и словарь для приложения (store -> AppState и так далее)
