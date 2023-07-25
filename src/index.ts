declare const canvas: HTMLCanvasElement;
declare const textInput: HTMLTextAreaElement;

const ctx = canvas.getContext("2d")!;
const RGBA_LENGTH = 4;
const RGB_LENGTH = 3;

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
  let outI = 0;
  while (outI < dataLength){
    if (Number.isInteger(i / RGBA_LENGTH)){
      console.log(outI + 3);
    }
    const char = value[i];
    if (char === undefined) break;
    const code = char.charCodeAt(0);
    dataView.setUint8(outI,code);
    i++;
    outI++;
  }
  console.log(data);

  // console.log(width);
  // console.log(height);

  const imageData = new ImageData(data,width,height);
  console.log(imageData);
  canvas.width = imageData.width;
  canvas.height = imageData.height;
  ctx.putImageData(imageData,0,0);
}

function isSquare(x: number): boolean {
  return Math.sqrt(x) % 1 === 0;
}