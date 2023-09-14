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
| publicKey | string | ✓ | Chave pública de sua conta GoRamp |
| amount | string | x | Valor da transação |
| baseCurrency | string | x | Símbolo da criptomoeda a ser utilizada |
| network | string | x | Nome da rede a ser utilizada |
| redirectUrl | string | x | URL de redirecionamento do usuário após a compra |
| walletAddress | string | x | Endereço da carteira que irá receber as criptomoedas |
| frameWidth | string | x | Largura a ser aplicada no embed do GoRamp |
| frameHeight | string | x | Altura a ser aplicada no embed do GoRamp |
| frameZIndex | string | x | Z-Index a ser aplicado no embed do GoRamp |