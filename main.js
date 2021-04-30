var arguments = process.argv;

var dataList = [];

//console.log(arguments.length)
if (arguments.length < 3) {
    console.log("The arguments is invalid!");
    return;
}
for (var i = 2; i < arguments.length; i++) {
    dataList.push(arguments[i])
}
