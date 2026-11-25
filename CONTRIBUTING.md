# Guia de Contribuição

## Sumário
- [Contato]
- [Como sugerir uma nova feature, melhoria ou correçāo de bug?]
- [Como contribuir?]

## Contato

Quer contribuir para o projeto? Estamos abertos a sugestões, melhorias, soluções de bugs e qualquer outra contribuição que você tenha a nos apresentar.
Para realizar sua contribuição, entre em contato conosco através de uma nova issue e siga os passos da sessão de [Como sugerir uma nova feature, melhoria ou correçāo de bug?].

## Como sugerir uma nova feature, melhoria ou correçāo de bug?

Basta clicar em nova issue e preencher-la, adicione toda informação que ajude a entender melhor sua issue.

É sugerido que você não implemente sua solução até receber um *feedback* de um mantedor, pois eles saberão informar se a sua alteração é viável para a versão atual. Para mais detalhes, você poderá checar a sessão abaixo.

## Como contribuir?

### Passo 1

O repositório tem a aba issue com as principais atividades que precisamos
de contribuição. Verifique, também, se a issue já não está sendo solucionada. 
Para isso, basta verificar se a tag *em andamento* está marcada na issue.

#### Observação para Iniciante

Para os iniciantes que quiserem ingressar em alguma issue é recomendado 
que ele filtre as issues com a tag *[good first issue]*. Nela você verá 
issues mais simples de serem resolvidas.

### Passo 2

Para resolver uma issue, pedimos ao contribuidor que crie um fork do 
repositório

Isso é importante, pois ajuda a movimentar o repositório e ajuda a propagar
que você está contribuindo para um projeto open source :smile:. 

### Passo 3

Pedimos que ao iniciar uma resolução de issue, certifique-se que a issue foi
marcada com a label **em andamento** por um mantedor. 
Assim é possível filtrar as [issues que não estão sendo resolvidas]. 

### Passo 4

Ao finalizar sua contribuição, realize o Pull Request para a branch *development*.
Nela mantemos sempre uma versão de desenvolvimento que, ao final das implementações
esperadas para aquela versão, será lançada para produção na branch *main*.

### Passo 5

Ao ser avaliado, o PR passará por um revisor do repositório e ele poderá
realizar sugestões de melhorias, e, após avaliado, o código passará a 
fazer parte do repositório.

## Criação e uso das branchs

1. Padronização nos nomes das branchs: `<num_issue>-<breve-descricao-da-issue>`  
Por exemplo: `26-adiciona_readme`

2. Branchs seguras: Temos duas branchs principais, a `main` e a `development`.   
É a partir da *development* que criamos as novas branchs as quais desenvolvemos novas
features, realizamos correção de bugs e toda a alteração referente a versão atual
do repositório. Ao finalizar a modificação que queremos realizar, criamos um 
*pull request* para que seja avaliado o código. Só depois de avaliado a alteração vai
para a branch `development`. Finalmente, quando uma versão do projeto estiver 
finalizada os próprios maintainers irão mesclar a `main`.

*Obs*: Tomamos essa decisão para garantir que a branch `main` sempre contenha uma
versão completa, estável e funcional.

## Como devo commitar?

Pedimos que realizem as mensagens de commit em português.

Nos baseamos no [SemVer], verifique o link para mais informações.  
[SemVer]: https://semver.org/lang/pt-BR/
