# Negociações

A tela de negociações é responsável por gerenciar as prospecções em formato de _kanbans_ e _leads_, nesta área, o usuário pode visualizar e acompanhar
 o andamento das oportunidades de venda, organizadas de acordo com as etapas do funil de negociação, desde o primeiro contato até a conclusão da movimentação 
 (venda finalizada ou perda da oportunidade).

Além disso, a tela permite o acompanhamento da carteira de clientes, facilitando o controle das interações e o histórico de negociações realizadas.
 Dessa forma, o usuário tem uma visão ampla e dinâmica de todo o processo comercial, podendo identificar oportunidades em aberto, 
 clientes em prospecção e o estágio atual de cada negociação.

![Tela de negociações](../../images/negotiations/01.png)

_(Imagem meramente ilustrativa, a ordenação, cores e titulo dos kanbans é totalmente pararmetrizável através do *[SIGAFBA Administrativo](../../index.md/#sigafba-administrativo)*)_

## 'Pesquisar...'

Barra de busca responsável por trazer os _cards_ de acordo com o que está sendo filtrado e exibido na tela de negociações.

![Barra de pesquisar das negociações](../../images/negotiations/02.png)

## Negociações campanha

Essa tela serve para indicar os _leads_ que são traziados para o sistema de campanhas configuradas pelo administrativo do sistema ou que são importados através de campanhas
 de _marketing_.

![Icone de aprovação de Leads](../../images/negotiations/06.png)

Ao clicar no icone de aprovação de _Leads_ (caso o parâmetro esteja ativo), é exibido um menu que mostra os _Leads_ para aprovação com o telefone e e-mail com status
 pendente, ao clicar no icone de confirmação ou de rejeição,
 eles são automaticamente enviados para aba de aprovados e reprovados para consulta posterior.

![Barra de pesquisar das negociações](../../images/negotiations/13.png)

## Filtros

A tela de Filtros permite realizar buscas parametrizadas entre os leads, facilitando o gerenciamento e a localização de informações específicas dentro das negociações.

![Icone de filtros da tela de negociações](../../images/negotiations/07.png)

![Interior da tela de filtros](../../images/negotiations/14.png)

## Vendas/Situação

Filtragem referente as turmas/cursos e status de negociações presentes na tela, exibindo de acordo com o que estiver configurado no [filtro](#filtros).

![Filtragem de Vendas/Situação](../../images/negotiations/03.png)

## Opções

O botão de opções traz alguns recursos para manipulação dos _cards_ em negociação, permitindo ao usuário:

- [Movimentar](#movimentar)
- [Enviar mensagem](#enviar-mensagem)
- [Exportar](#exportar)

As negociações selecionadas, sendo possível selecionar várias delas em momentos diferentes da venda, ou todas as negociações referentes a uma etapa do negócio.

![Botão de opções](../../images/negotiations/05.png)

![Opções](../../images/negotiations/15.png)

### Movimentar

Ao selecionar a opção de movimentar, os _cards_ previamente selecionados poderão ser alterados dentro das etapas da negociação, podendo ser realizada
a troca de:

- Curso
- Turma
- Lead (voltar essa negociação para um prospecto em branco) 
- Situação (inscrito, em negociação, perda e pausado)
- Responsável (apenas para usuários Master)
- Kanban
- Municipio

![Tela de movimentações](../../images/negotiations/17.png)

### Enviar mensagem

Permite o envio de mensagens em lote para as negociações selecionadas utilizando uma instância WhatsApp* ou e-mail com anexo.

_*Para mais informações sobre instâncias leia em [configurações](../settings/settings.md)_


![Tela de enviar mensagem](../../images/negotiations/18.png)
### Exportar

Exporta todas as negociações (atualmente não sendo possivel filtrar as negociações desejadas) para uma planilha em formato _Excel_ ou _PDF_.

![Tela de exportar negociações](../../images/negotiations/19.png)

## Ordenação

Permite alterar a ordenação das negociações, trazendo as mais recentes ou mais antigas primeiro.

![Icone de filtros da tela de negociações](../../images/negotiations/08.png)


## Dias sem contato

Indicativo visual de qual negociação está sem [eventos](../../routes/eventos.md) durante uma faixa de dias (definido no [administrativo](../../index.md/#sigafba-administrativo))
nas cores verde, amarelo e vermelho.

![Icone de filtros da tela de negociações](../../images/negotiations/09.png)


## Atalhos

Permite de maneira rápida:

- Agendar um [evento](../../routes/eventos.md) com a pessoa da negociação;
- Realizar uma chamada com a negociação;
- Abrir o WhatsApp da negociação em uma nova guia.

![Icone de filtros da tela de negociações](../../images/negotiations/10.png)


## Adicionar

Botão que possibilita a inserção de novas negociações no sistema de maneira manual, inserindo informações referentes a prospecção e participante, como curso, turma,
observação, valores, entre outros.

![Icone de filtros da tela de negociações](../../images/negotiations/12.png)

![Icone de filtros da tela de negociações](../../images/negotiations/11.png)

## Informações

Esta é a tela onde as informações da negociação são inseridas, exibindo também seu status, nome, dados pessoais e de interesse do usuário.
A tela é divida em quatro abas:



- [Negociação](#negociação) 
- [Eventos](#eventos)
- [Anexos]()
- [Linha do tempo]()

### Negociação

Exibe todas as informações referentes a negociação selecionada, trazendo dados pessoais, status, tipo de negociação, observações
certificações anteriores, anotações de contato ([eventos](../eventos.md) rápidos) e a possbilidade de fechar a negociação ou agendar um evento completo.

![Tela de informações](../../images/negotiations/20.png)
![Tela de informações](../../images/negotiations/21.png)

### Eventos

Permite a visualização dos eventos realizados para aquela negociação. (veja mais sobre em [eventos](../eventos.md)).

![Tela de informações](../../images/negotiations/22.png)

### Anexos

Permite a adição e visualização de anexos na negociação.

![Tela de anexos](../../images/negotiations/23.png)

### Linha do tempo

Exibe as movimentações feitas com essa negociação ao longo da venda.

![Tela de anexos](../../images/negotiations/24.png)