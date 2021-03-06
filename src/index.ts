import fragmentSource from './fragment.glsl';
import vertexSource from './vertex.glsl';

addEventListener('load', () => {
  let canvas = document.getElementsByTagName('canvas')[0];
  let gl = canvas.getContext('webgl2') as WebGLRenderingContext;
  gl.clearColor(0, 0, 0, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);
  let program = gl.createProgram()!;
  gl.attachShader(program, loadShader(gl, vertexSource, gl.VERTEX_SHADER));
  gl.attachShader(program, loadShader(gl, fragmentSource, gl.FRAGMENT_SHADER));
});

function loadShader(gl: WebGLRenderingContext, source: string, type: number) {
  let shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  // console.log(source);
  console.log(gl.getShaderInfoLog(shader));
  return shader!;
}
