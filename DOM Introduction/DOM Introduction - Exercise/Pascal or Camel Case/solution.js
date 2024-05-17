function solve() {
  const inputText = document.getElementById('text');
  const namingConvention = document.getElementById('naming-convention');
  const result = document.getElementById('result');

  const convertToCamelCase = inputText.value.split(' ').map((word, index) => {
    if (index > 0) return word = word[0].toUpperCase() + word.substring(1).toLowerCase();
    else return word.toLowerCase();
  }).join('');

  const convertToPascalCase = inputText.value.split(' ').map((word, index) => {
    return word = word[0].toUpperCase() + word.substring(1).toLowerCase();
  }).join('');

  if (namingConvention.value == 'Camel Case') result.textContent = convertToCamelCase;
  else if (namingConvention.value == 'Pascal Case') result.textContent = convertToPascalCase;
  else result.textContent = 'Error!';
}
