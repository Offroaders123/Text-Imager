declare const canvas: HTMLCanvasElement;
declare const textInput: HTMLTextAreaElement;

const ctx = canvas.getContext("2d")!;
const RGBA_LENGTH = 4;

textInput.addEventListener("input",drawImageContent);
drawImageContent();

function drawImageContent(): void {
  const { value } = textInput;
  console.log(value);

  const stringLength = value.length;
  console.log(stringLength);

  const dataLength = stringLength * RGBA_LENGTH;

  const isSquared = isSquare(dataLength);
  console.log(isSquared);

  const width = stringLength;
  const height = 1;

  const data = new Uint8ClampedArray(dataLength);
  const dataView = new DataView(data.buffer);
  // console.log(data);

  let i = 0;
  let outI = 0;
  while (i < stringLength){
    if (outI % RGBA_LENGTH === 3){
      dataView.setUint8(outI,255);
      outI++;
    }

    const char = value[i]!;
    console.log(i,char);

    dataView.setUint8(outI,char.charCodeAt(0));
    i++;
    outI++;
  }
  console.log(data);

  console.log(width);
  console.log(height);

  const imageData = new ImageData(data,width,height);
  console.log(imageData);
  canvas.width = imageData.width;
  canvas.height = imageData.height;
  ctx.putImageData(imageData,0,0);
}

function isSquare(x: number): boolean {
  return Math.sqrt(x) % 1 === 0;
}