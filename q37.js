function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
// Make a large shirt with the default message
make_shirt();
// Make a medium shirt with the default message
make_shirt("Medium");
// Make a shirt of any size with a different message
make_shirt("Small", "JavaScript is awesome too!");
