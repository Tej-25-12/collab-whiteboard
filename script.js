const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
let drawing = false;
let lastX = 0, lastY = 0;

const color = '#' + Math.floor(Math.random() * 16777215).toString(16);

canvas.addEventListener('mousedown', (e) => {
  drawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});

canvas.addEventListener('mouseup', () => drawing = false);

canvas.addEventListener('mousemove', (e) => {
  if (!drawing) return;
  const x = e.offsetX;
  const y = e.offsetY;
  drawLine(lastX, lastY, x, y, color);
  sendDraw(lastX, lastY, x, y, color);
  lastX = x;
  lastY = y;
});

function drawLine(x1, y1, x2, y2, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

const socket = new WebSocket('ws://localhost:5000');

socket.onopen = () => {
  console.log('✅ Connected to WebSocket server');
};

socket.onmessage = async (event) => {
  try {
    const text = await event.data.text();
    const { x1, y1, x2, y2, color } = JSON.parse(text);
    drawLine(x1, y1, x2, y2, color);
  } catch (err) {
    console.error("❌ Failed to parse message:", err);
  }
};

function sendDraw(x1, y1, x2, y2, color) {
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify({ x1, y1, x2, y2, color }));
  }
}
