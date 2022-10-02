let url = "https://coursera.com/";
let courseName = "JavaScript Course from Zero to Hero";

final = url.length;
final = courseName.includes("from");
final = courseName.split(" ").length;
final = url.startsWith("https://");

courseName = courseName.toLocaleLowerCase().replaceAll(" ", "-");
final = url + courseName;

final = console.log(final);
