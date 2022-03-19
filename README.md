# Semana-JSExpert-6.0

### Semana JS Expert com Erick Wendel. 

## Preview

<img src="./prints/demo.png" />

 ## Features 

 ~ Web Api 
  
    - Deve atingir 100% de cobertura de código em testes
    - Deve ter testes end to end validando todas as rotas da API
    - Deve entregar arquivos estáticos como Node.js Stream
    - Deve entregar arquivos de música como Node.js Stream
    - Dado um usuário desconectado, não deve quebrar a API
    - Mesmo que vários comandos sejam disparados ao mesmo tempo, não deve quebrar a API
    - Caso aconteça um erro inesperado, a API deve continuar funcionando
    - O projeto precisa ser executado em ambientes Linux, Mac e Windows




## FAQ 
- `NODE_OPTIONS` não é um comando reconhecido pelo sistema, o que fazer?
    - Se você estiver no Windows, a forma de criar variáveis de ambiente é diferente. Você deve usar a palavra `set` antes do comando. 
    - Ex: `    "test": "set NODE_OPTIONS=--experimental-vm-modules && npx jest --runInBand",`

- Rodei `npm test` mas nada acontece, o que fazer?
    - Verifique a versão do seu Node.js. Estamos usando na versão 17. Entre no [site do node.js](https://nodejs.org) e baixe a versão mais recente.

- `jest.spyOn` - quando tentamos usar o `function.name` (algo como `stream.pipe.name`), ele diz que a instancia é undefined
    - Neste caso, use o valor como string: `jest.spyOn(stream, "pipe").mockReturnValue`
- Desafio 01 impossível de completar 100% de code coverage pois o [testUtil.js](./aulas/aula01/tests/unit/_util/testUtil.js) não está sendo completamente usado
    -  Adicione na primeira linha do arquivo [testUtil.js](./aulas/aula01/tests/unit/_util/testUtil.js) o seguinte trecho de código: `/* istanbul ignore file */` . Isso fará com que o jest ignore esse arquivo e complete os 100%. 
    -  Importante: essa  alteração, servirá apenas para completar esse primeiro e/ou segundo desafio, na ultima aula, não vamos precisar ignorar esse arquivo uma vez que vamos usar todas as funções
