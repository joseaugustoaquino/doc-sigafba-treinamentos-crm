# Inscrição por link (/inscricao/:link/:contract/:environment)

## Resumo
Fluxo de inscrição através de link parametrizado.

## URL
`/inscricao/:link/:contract/:environment`

## Parâmetros
- `:link`: identificador do link.
- `:contract`: contrato.
- `:environment`: ambiente.

## Acesso e Perfis
- Quem acessa: público/convocados.
- Pré-requisitos: link válido.

## Principais Ações
- Preencher inscrição.
- Validar contrato/ambiente.
- Confirmar e enviar.

## Fluxo da Tela
1. Usuário acessa o link com parâmetros.
2. Formulário é exibido conforme contrato/ambiente.
3. Confirmação e feedback.

## Mensagens e Erros Comuns
- Link expirado/inválido.
- Dados incompletos.

## Relacionados
- Formulário (`/formulario/:contract/:environment/:idPerson?/:idPersonForm?`)