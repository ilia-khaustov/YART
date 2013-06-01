/*
* Got from
* http://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex/6969486#6969486
*/
YART.escapeRegExp = function(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}