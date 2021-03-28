const canvas = document.querySelector('.game-field');

const context = canvas.getContext('2d');

const cell = 25;

context.fillStyle = '#000';

let x = 0;
let y = 0;

let count = 0;

let isLeft = false;
let isRight = true;
let isUp = false;
let isDown = false;

const setDirection = () => {
	if (isLeft) {
		x -= cell;
	};

	if (isRight) {
		x += cell;
	};

	if	(isDown) {
		y += cell;
	};

	if (isUp) {
		y -= cell;
	};
};

const drawCell = (x, y) => {
	context.clearRect(0, 0, 500, 500);
	context.fillRect(x, y, cell, cell);
};
const game = () => {
	setDirection();
	drawCell(x, y);
};

document.addEventListener('keydown', (e) => {
	isLeft = false;
	isRight = false;
	isUp = false;
	isDown = false;

	switch(e.keyCode) {
		case 37:
			isLeft = true;
			break;
		case 38:
			isUp = true;
			break;
		case 39:
			isRight = true;
			break;
		case 40:
			isDown = true;
			break;
	};
});

const gameStart = () => {
	setInterval(game, 300);
};

gameStart();


