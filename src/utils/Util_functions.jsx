// Validates email address of course.
export function validEmail(e) {
  var filter = /^\s*[\w\-\+]+(\.[\w\-\+]+)\@[\w\-\+]+\.[\w\-\+]+(\.[\w\-\+_]+)\s*$/;
  return String(e).search(filter) != -1;
}