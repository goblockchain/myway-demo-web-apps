# myway-demo-web-apps

- React
- React with Typescript
- Angular
- Vue
- HTML

## Parâmetros

O elemento `<goramp-button>` recebe parâmetros orbiagtórios e opcionais, sendo possível pré-configurar os valores, moedas, meio de pagamento, endereço da carteira, URL de redirecionamento e o tamanho e z-index do iframe gerado pelo GoRamp Web SDK.

Os valores disponíveis de baseCurrency e network são disponibilizados neste endpoint: https://myway-api.goblockchain.io/api

| Parâmetro | Tipo | Obrigatório | Descrição |
| -------- | -------- | -------- | -------- |
| publicKey | string | SIM | Chave pública de sua conta GoRamp |
| amount | string | NÃO | Valor da transação |
| baseCurrency | string | NÃO | Símbolo da criptomoeda a ser utilizada |
| network | string | NÃO | Nome da rede a ser utilizada |
| redirectUrl | string | NÃO | URL de redirecionamento do usuário após a compra |
| walletAddress | string | NÃO | Endereço da carteira que irá receber as criptomoedas |
| frameWidth | string | NÃO | Largura a ser aplicada no embed do GoRamp |
| frameHeight | string | NÃO | Altura a ser aplicada no embed do GoRamp |
| frameZIndex | string | NÃO | Z-Index a ser aplicado no embed do GoRamp |