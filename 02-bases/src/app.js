const templateReceived = require("./js-foundation/04-arrow");

// const { env } = process
// console.log( env );

// const heroesArr = ['Superman', 'Flash', 'Batman']
// const [, , batman] = heroesArr;
// console.log(batman);

const templateFunc = templateReceived.findName;

templateFunc(2, (error, user) => {
	if (error) throw new Error(error);

	console.log(user);
});
