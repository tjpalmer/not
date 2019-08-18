addEventListener('load', () => {
  let canvas = document.getElementsByTagName('canvas')[0];
  let gl = canvas.getContext('webgl');
  gl.clearColor(0, 0, 0, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);
});
