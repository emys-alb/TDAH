# Tripulantes da Aventura Hiperespacial (TDAH)
A aplicação tem como principal objetivo a organização de tarefas do dia e o monitoramento de crianças com Transtorno de Déficit de Atenção com Hiperatividade (TDAH).
<p align="center">
<img width = "200px" src = "https://cdn-icons-png.flaticon.com/512/2026/2026502.png"/>  
</p>

## Sobre o que se trata o aplicativo

O aplicativo conta com uma interface simulando uma missão espacial em que a criança deve realizar missões para salvar o planeta e ao terminar as missões, um jogo é liberado, onde ele pode coletar moedas enquanto desvia de obstáculos treinando assim a sua concentração. As missões serão colocadas previamente pelos pais e corresponde a rotina da criança no dia a dia, apenas de uma forma mais lúdica. Sabendo pode ser frustrante não conseguir cumprir com as missões, o aplicativo vai dá chances de refazer ou a opção "Precisamos de reforços" que incentiva a criança a buscar ajuda com o responsável mais próximo. E no fim do dia, temos um breve diário de bordo em que a criança diz como está se sentindo. 

## Abrir o aplicativo no navegador

Na pasta do repositório, com Node.js 18 ou superior e npm instalados, execute

```sh
cd App
npm ci --legacy-peer-deps
npm run web
```

Abra [a base espacial no navegador](http://127.0.0.1:8082). Para gerar a versão web estática em `App/web-build`, use `npm run build:web`. No Android, o projeto nativo está em `App/android` e mantém a base React Native 0.63 e Expo SDK 40 do projeto original. Com o ambiente Android compatível configurado e um dispositivo ou emulador conectado, execute `npm run android` dentro de `App`.

## Como funciona a aventura

- Luma e Pip acompanham a rotina. Cada missão concluída vale cinco estrelas. Os emblemas são liberados com 5, 15, 30 e 50 estrelas.
- A criança pode pedir ajuda, adiar uma atividade e retomá-la no mapa de missões. Registrar como se sentiu é opcional.
- O hangar abre depois que todas as missões do dia forem concluídas ou deixadas para depois. No hangar, a criança escolhe entre a Memória cósmica (quatro ou seis pares), o Jogo da velha contra Pip (amigável ou desafio) e a Rota dos asteroides (seis trechos com moedas). Os três jogos funcionam no aparelho.
- O diário guarda o humor e uma anotação por dia. Na área dos responsáveis é possível criar, editar ou pausar missões, consultar o histórico e reduzir as animações.
- O progresso fica no aparelho, em SQLite no aplicativo nativo e no armazenamento local do navegador na versão web. A rotina começa de novo a cada dia e as estrelas conquistadas se acumulam.

## Calendário e pausas
Na aba **Calendário**, os números em cada dia mostram as missões concluídas e previstas. Em **Responsáveis → Planejar por data**, escolha um dia para cadastrar uma missão ou ajustar o horário de uma atividade só naquela data. A rotina diária continua sendo a base para os outros dias. Para datas anteriores à primeira abertura do calendário, o aplicativo mostra os resultados que já estavam registrados.

Durante uma missão, **Preciso de uma pausa** oferece movimento ou descanso. A criança pode deixar a tela e retomar a mesma atividade quando quiser.

## Quem está envolvido com o desenvolvimento
O aplicativo foi desenvolvido em sua primeira versão por:

[Ricardo Adley da Silva Sena](https://github.com/ricardoadley)

[Emilly de Albuquerque Oliveira](https://github.com/emys-alb)

## Conquistas do projeto
<p align="center"> Esse projeto foi orgulhosamente um dos participantes da 9 edição do Campus Mobile, organizado pelo instituto Claro, na Categoria Saúde</p>
<p align="center">
<img width = "200px" src = "https://www.institutoclaro.org.br/campus-mobile/wp-content/themes/ince/assets/img/campus-mobile/logo-campus-mobile.png"/>  
</p>

## Como contribuir
*Deseja contribuir alguma mudança?* Senta-se a vontade em abrir uma issue e conversar com a gente.

Esse repositório tem uma longa lista de atividades a serem desenvolvidas e você pode contribuir de várias formas. Se você não está acostumado com as tecnologias utilizadas no app terá a opção de contribuir com design de novos temas. Mantemos um diretório chamado design que contém os designs sugeridos para a construção do aplicativo.

Você pode sugerir uma alteração ou faze-la você mesmo seguindo as instruções disponíveis no [guia de contribuição](CONTRIBUTING.md). Não se esqueça de conferir o [código de conduta](CODE_OF_CONDUCT.md) ❤️.
