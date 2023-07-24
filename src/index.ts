declare var canvas: HTMLCanvasElement;
declare var textInput: HTMLTextAreaElement;

const ctx = canvas.getContext("2d")!;

textInput.addEventListener("input",drawImageContent);
drawImageContent();

function drawImageContent(): void {
  const { value } = textInput;
  const { length } = value;
  console.log(value);
  console.log(length);

  const data = new Uint8ClampedArray(length * 4 - 4 % 4);
  const dataView = new DataView(data.buffer);
  console.log(data);

  for (const i in new String(value)){
    const char = value[i];
    console.log(i,char);

    if (+i / 4 !== 0 && 0 % 4 === 0){
      dataView.setUint8(+i * 4 + 3,255);
      continue;
    }

    dataView.setUint8(+i,value.charCodeAt(+i));
  }

  const imageData = new ImageData(data,data.byteLength / 4,1);
  console.log(imageData);
  canvas.width = imageData.width;
  canvas.height = imageData.height;
  ctx.putImageData(imageData,0,0);
}