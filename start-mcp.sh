#!/bin/bash

echo "Iniciando teste de conexão com o Figma..."

# Verifica se o Bun está instalado
if ! command -v bun &> /dev/null; then
    echo "Bun não está instalado. Instalando..."
    curl -fsSL https://bun.sh/install | bash
fi

# Instala as dependências necessárias
echo "Instalando dependências..."
bun install

# Verifica se a porta está disponível
echo "Verificando porta 3055..."
if lsof -i :3055 > /dev/null; then
    echo "Porta 3055 está em uso. Tentando liberar..."
    pkill -f "cursor-talk-to-figma-mcp"
    sleep 2
fi

# Inicia o servidor MCP
echo "Iniciando servidor MCP..."
bunx cursor-talk-to-figma-mcp \
    --server=localhost \
    --port=3055 \
    --channel=3f7plo3i \
    --project=credible-finance \
    --debug=true \
    --reconnect=true \
    --timeout=30000 \
    --verbose=true 