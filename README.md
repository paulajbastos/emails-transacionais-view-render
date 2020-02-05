# Emails Transacionais Template generator

  

## Dependencies

Must have [Nodejs](https://nodejs.org/en/) installed.

You'll need to have **Node >= 10 && Node != 13.0.1** on your machine.

  
Must have **Gulp CLI** installed.

```
$ npm install -g gulp-cli
```

Install dependencies:

```
$ npm install
```

  

Run:

```
$ gulp
```

Open:

http://localhost:3000

## Configs  
```
src/configs.pug
```

Hoje temos essas combinações para testar:

**Tipos de Templates:**
 ```
var templateType: entregaEmCasa, retireNaLoja, lojaDoBairro, multiplasEntregas, cancelamento, boletos
 ```
  
**Steps disponíveis por Tipos de Templates:**

 - entregaEmCasa
```
var step = confirmado, autorizado, faturado, enviado, entregue
```
- retireNaLoja e lojaDoBairro
```
var step = confirmado, autorizado, faturado, enviado, naLoja, entregue
```
- multiplasEntregas
```
var step = confirmado, autorizado, faturadoEntrega1, naLojaEntrega1, entregueEntrega1, faturadoEntrega2, enviadoEntrega2, naLojaEntrega2, entregueEntrega2
```
- boletos
```
falta1dia, hojevence, venceu
```
**Tipos de Templates:**
```
var pagamentoType: boleto, debito, cartao
```
  
## Como testar  
Altere as variaveis do template dentro de **src/configs.pug** que o template montará conforme as regras pré-estabelecidas (alterar conforme tipo de entrega, step da entrega e tipo de pagamento):

- var  templateType = "entregaEmCasa"

- var  step = "confirmado"

- var  pagamentoType = "boleto"

***OBS***: Para visualizar todos os html criados, vá em **src/index.pug** e **descomente a linha 242 e comente a linha 241**
  
## Output files  
Your generated files will be outputed on **/dist** folder.

  

## Authors



| [Paula Junqueira Bastos](https://bitbucket.org/paulajbastos/) |

  

## License

  

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

