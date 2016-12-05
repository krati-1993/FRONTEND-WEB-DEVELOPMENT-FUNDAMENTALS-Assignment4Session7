function outer(inner) {

};
var inner = function() {
console.log("Hello World this is from Inner");
}
outer(inner());

