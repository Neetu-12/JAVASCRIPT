var extension=require("readline-sync").question("enter your extentions:-")
switch (extension) {
    case "abc.java":
        console.log(".java");
        break;
    case "python":
        console.log(".py");
    default:
        break;
}