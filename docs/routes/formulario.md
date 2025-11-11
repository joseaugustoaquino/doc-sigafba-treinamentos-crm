# Formulário de Pessoa (/formulario/:contract/:environment/:idPerson?/:idPersonForm?)

## Resumo
Formulário para criação/edição de pessoa e seus dados vinculados.

## URL
`/formulario/:contract/:environment/:idPerson?/:idPersonForm?`

## Parâmetros
- `:contract`, `:environment`
- `:idPerson?`: opcional.
- `:idPersonForm?`: opcional.

## Acesso e Perfis
- Quem acessa: operadores/gestores.
- Permissões: Definir.

## Principais Ações
- Criar/editar pessoa.
- Salvar alterações.
- Validar campos obrigatórios.

## Fluxo da Tela
1. Acessar com parâmetros.
2. Preencher/atualizar campos.
3. Salvar e validar.

## Campos
- Identificação.
- Contato.
- Endereço.
- Campos específicos do contrato.

## Mensagens e Erros Comuns
- Campos obrigatórios faltando.
- Conflito de dados.

## Relacionados
- Pessoa (`/pessoa`)
- Inscrição por link (`/inscricao/...`)