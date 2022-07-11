 const hola = () => {

	console.log("from modules");


}
const fn = () => {
	console.log("FN Named export!!!!");
}

exports.default = hola;
exports.something = fn;
