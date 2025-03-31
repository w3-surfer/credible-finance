const WebSocket = require('ws');
const fs = require('fs');

const ws = new WebSocket('ws://localhost:3055');

const components = JSON.parse(fs.readFileSync('.figma.components.json', 'utf8'));

ws.on('open', () => {
  console.log('Conectado ao servidor Figma');
  ws.send(JSON.stringify({
    type: 'join',
    channel: 'eelqgpgt',
    project: 'credible-finance',
    fileId: 'credible-finance',
    action: 'update'
  }));
});

ws.on('message', (data) => {
  const message = JSON.parse(data.toString());
  console.log('Mensagem recebida:', message);
  
  if (message.type === 'system' && message.channel === 'eelqgpgt') {
    console.log('Enviando componentes para o arquivo existente...');
    ws.send(JSON.stringify({
      type: 'components',
      data: components,
      fileId: 'credible-finance',
      action: 'update'
    }));
  }
});

ws.on('error', (error) => {
  console.error('Erro na conexão:', error);
});

ws.on('close', () => {
  console.log('Conexão fechada');
}); 