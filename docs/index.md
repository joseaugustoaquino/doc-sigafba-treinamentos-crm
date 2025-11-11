# Welcome to MkDocs

For full documentation visit [mkdocs.org](https://www.mkdocs.org).

## Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.

## Visão Geral do SIGAFBA Treinamentos CRM

Esta documentação descreve as funcionalidades principais e o fluxo de uso de cada tela do sistema por rota.

- Como navegar: use o menu “Rotas” para acessar cada tela.
- Objetivo: permitir que usuários entendam o propósito, ações e fluxo de cada página.

## Rotas do Sistema

- Autenticação
  - [Entrar](/entrar) → `rotas/autentication/login.md`
- Início
  - [Início](/inicio) → `rotas/inicio.md`
- Configuração
  - [Configuração](/configuracao) → `rotas/configuracao.md`
- Financeiro
  - [Financeiro v2](/financeiro/v2) → `rotas/financeiro_v2.md`
- Inscrição
  - [Inscrição por link](/inscricao/:link/:contract/:environment) → `rotas/inscricao.md`
- Formulário
  - [Formulário de Pessoa](/formulario/:contract/:environment/:idPerson?/:idPersonForm?) → `rotas/formulario.md`
- Turma
  - [Turma](/turma) → `rotas/turma.md`
  - [Item](/turma/item) → `rotas/turma_item.md`
  - [Lista](/turma/lista) → `rotas/turma_lista.md`
  - [Link Lista](/turma/link/lista) → `rotas/turma_link_lista.md`
  - [Link Registrar](/turma/link/registrar) → `rotas/turma_link_registrar.md`
  - [Link Indicação](/turma/link/indicacao/:contract/:environment/:idClass/:idUser/:idParticipant?) → `rotas/turma_link_indicacao.md`
- Pessoas
  - [Pessoa](/pessoa) → `rotas/pessoa.md`
  - [Lista](/pessoa/lista) → `rotas/pessoa_lista.md`
  - [Aniversariantes](/pessoa/aniversariantes) → `rotas/pessoa_aniversariantes.md`
  - [Registro](/pessoa/registro) → `rotas/pessoa_registro.md`
  - [Metas](/pessoa/metas) → `rotas/pessoa_metas.md`
- Classes
  - [Dashboard](/classes/dashboard) → `rotas/classes_dashboard.md`
- Eventos
  - [Eventos](/pessoa/eventos) → `rotas/pessoa_eventos.md`
  - [Dashboard](/pessoa/eventos/dashboard) → `rotas/pessoa_eventos_dashboard.md`
- Negociações
  - [Negociações](/negociacoes) → `rotas/negociacoes.md`
  - [Funil](/negociacoes/funil) → `rotas/negociacoes_funil.md`

## Executar localmente

- Inicie com `mkdocs serve` e acesse `http://127.0.0.1:8000/`.
