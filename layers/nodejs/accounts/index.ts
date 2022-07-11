const hola = () => {
	console.log("from modules");
}
const  something = () => {
	console.log("FN Named export!!!!")
}

export default hola;
export { something };
