# Tarefas (/tarefas)

## Resumo
Tela para consulta, organização e atualização de tarefas do usuário. Permite filtrar por descrição e status, listar com prioridade e responsável, editar dados e criar novas tarefas conforme necessidade.

## Filtros
- Descrição: busca textual por título/descrição da tarefa.
- Status: seleção entre `pendente`, `em andamento`, `concluído`, `cancelado`.

![Filtro por descrição e status](../../images/tasks/01.png)

## Listagem de Tarefas
Cada item (card) exibe:

- Descrição/Título da tarefa.
- Prioridade: `baixa`, `média`, `alta`, `urgente`.
- Usuário responsável.
- Status atual (alterável diretamente no card).

![Listagem de tarefas com prioridade e status](../../images/tasks/02.png)

## Edição da Tarefa
Ao clicar em um card:

- Edita informações existentes (descrição, prioridade, status, responsável, contato, observações, data de vencimento).
- Adiciona novas informações/observações conforme andamento.

![Edição de tarefa](../../images/tasks/03.png)

## Adicionar Nova Tarefa
Campos:

- Título (descrição) da tarefa.
- Prioridade: `baixa`, `média`, `alta`, `urgente`.
- Status: `pendente`, `em andamento`, `concluído`, `cancelado`.
- Responsável: pessoa designada (se o usuário for gestor).
- Contato: forma de contato vinculada (opção cadastrável no SIGAFBA ERP).
- Descrição detalhada: informações necessárias para execução.
- Data de vencimento: quando deve ser concluída (opcional; tarefas podem não ter prazo).

![Criação de nova tarefa](../../images/tasks/04.png)

## Relacionados
- Início (`/inicio`)