function getElementWidth(content, padding, border) {
  if (
    typeof content !== 'string' ||
    typeof padding !== 'string' ||
    typeof border !== 'string'
  )
    throw new TypeError(
      `Expected three strings, got: ${typeof content}, ${typeof padding}, ${typeof border}`
    );
  if (
    !content.trim().endsWith('px') ||
    !padding.trim().endsWith('px') ||
    !border.trim().endsWith('px')
  )
    throw new TypeError(
      `Numbers must be in pixels: 'Npx', got: '${content}' '${padding}' '${border}'`
    );

  return parseFloat(content) + parseFloat(padding) * 2 + parseFloat(border) * 2;
}

console.log('----- TASK 3 -----');
console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
console.log(getElementWidth('200px', '0.25px', '1.3px')); // 203.1
