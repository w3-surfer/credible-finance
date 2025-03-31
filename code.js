figma.showUI(__html__, { 
  width: 400, 
  height: 300,
  themeColors: true
});

// Função para notificar o usuário
function notifyUser(message, type = 'success') {
  figma.ui.postMessage({
    type,
    message
  });
}

// Função para processar a mensagem do usuário
async function processMessage(message) {
  try {
    // Verifica se o usuário está autenticado
    const user = await figma.currentUser;
    if (!user) {
      throw new Error('Usuário não autenticado');
    }

    // Verifica se o arquivo está aberto
    const file = figma.root;
    if (!file) {
      throw new Error('Nenhum arquivo aberto');
    }

    // Processa a mensagem baseado no conteúdo
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('seleção') || lowerMessage.includes('selecionado')) {
      const selection = figma.currentPage.selection;
      if (selection.length === 0) {
        return 'Nenhum elemento selecionado.';
      }
      return `Elementos selecionados: ${selection.map(node => node.name).join(', ')}`;
    }
    
    if (lowerMessage.includes('página') || lowerMessage.includes('páginas')) {
      const pages = figma.root.children;
      return `Páginas disponíveis: ${pages.map(page => page.name).join(', ')}`;
    }
    
    if (lowerMessage.includes('ajuda') || lowerMessage.includes('help')) {
      return `Comandos disponíveis:
- "seleção" ou "selecionado": mostra os elementos selecionados
- "página" ou "páginas": mostra as páginas disponíveis
- "ajuda" ou "help": mostra esta mensagem de ajuda`;
    }

    return 'Desculpe, não entendi o comando. Digite "ajuda" para ver os comandos disponíveis.';
  } catch (error) {
    console.error('Erro ao processar mensagem:', error);
    return `Erro: ${error.message}`;
  }
}

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'init-ui') {
    notifyUser('UI inicializada com sucesso!');
  } else if (msg.type === 'talk-to-figma') {
    const response = await processMessage(msg.message);
    figma.ui.postMessage({
      type: 'response',
      message: response
    });
  }
}; 