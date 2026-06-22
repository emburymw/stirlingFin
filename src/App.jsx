import { AppRoutes } from './routes/AppRoutes.jsx'
import './App.css'

function App() {
  return <AppRoutes />
}

async function replaceGreenWithColor(imageUrl, newColor) {
  const img = new Image();
  img.src = imageUrl;
  await img.decode();

  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');

  ctx.drawImage(img, 0, 0, 32, 32);

  // Get every pixel
  const imageData = ctx.getImageData(0, 0, 32, 32);
  const data = imageData.data; // [r, g, b, a, r, g, b, a, ...]

  // Parse the target color once
  const tmp = document.createElement('canvas').getContext('2d');
  tmp.fillStyle = newColor;
  tmp.fillRect(0, 0, 1, 1);
  const [nr, ng, nb] = tmp.getImageData(0, 0, 1, 1).data;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i+1], b = data[i+2];

    // "Green enough" = green channel dominates
    const isGreen = g > 100 && g > r * 1.4 && g > b * 1.4;

    if (isGreen) {
      data[i]   = nr; // replace R
      data[i+1] = ng; // replace G
      data[i+2] = nb; // replace B
      // data[i+3] = alpha, leave untouched
    }
  }

  ctx.putImageData(imageData, 0, 0);

  const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
  link.rel = 'icon';
  link.href = canvas.toDataURL('image/png');
  document.head.appendChild(link);
}

replaceGreenWithColor('/financeIcon.png', '#17486a');

export default App
