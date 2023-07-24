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

  const width = isSquared ? stringLength / 2 : stringLength - stringLength % RGBA_LENGTH;
  const height = isSquared ? stringLength / 2 : 1;

  const data = new Uint8ClampedArray(dataLength);
  const dataView = new DataView(data.buffer);
  // console.log(data);

  for (let i = 0; i < stringLength; i++){
    if (i / RGBA_LENGTH % RGBA_LENGTH){
      dataView.setUint8(i + 3,255);
    }

    const char = value[i]!;
    console.log(i,char);

    dataView.setUint8(i,char.charCodeAt(0));
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