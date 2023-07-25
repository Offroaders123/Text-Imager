declare const canvas: HTMLCanvasElement;
declare const textInput: HTMLTextAreaElement;

const ctx = canvas.getContext("2d")!;
const RGBA_LENGTH = 4;
const RGB_LENGTH = 3;

const decoder = new TextDecoder();

textInput.addEventListener("input",drawImageContent);
drawImageContent();

function drawImageContent(): void {
  const { value } = textInput;
  // console.log(value);

  const stringLength = value.length;
  // console.log(stringLength);

  const upperClampLength = Math.ceil(stringLength / RGB_LENGTH) * RGB_LENGTH || RGB_LENGTH;
  // console.log(upperClampLength);

  const dataLength = upperClampLength + upperClampLength / 3;

  const isSquared = isSquare(dataLength);
  // console.log(isSquared);

  const width = dataLength / 4;
  const height = 1;

  const data = new Uint8ClampedArray(dataLength);
  const dataView = new DataView(data.buffer);
  // console.log(data);

  let i = 0;
  for (const u in data){
    if (+u % RGBA_LENGTH === 3){
      dataView.setUint8(+u,255);
      continue;
    }
    const char = value[i];
    const code = char?.charCodeAt(0);
    // console.log(char);
    if (code !== undefined) dataView.setUint8(+u,code);
    i++;
  }
  console.log(data);

  // console.log(width);
  // console.log(height);

  const imageData = new ImageData(data,width,height);
  console.log(imageData);
  console.log(decoder.decode(data));
  canvas.width = imageData.width;
  canvas.height = imageData.height;
  ctx.putImageData(imageData,0,0);
}

function isSquare(x: number): boolean {
  return Math.sqrt(x) % 1 === 0;
}