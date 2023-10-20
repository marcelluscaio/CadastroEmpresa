# Cadastro de Empresas

O cadastro de empresas da Opea permite que a pessoa usuária leia, filtre, crie, atualize e delete empresas de um banco de dados.

Para criar empresas, deve-se clicar no botão "Adicionar Empresas".
Para filtrar, deve-se usar o campo de "Buscar Empresas".
Para atualizar ou deletar, deve-se clicar na empresa presente na lista.
Todas as ações são intuitivas e têm ações de hover e foco, para auxiliar a pessoa usuária.
O conteúdo do modal varia de acordo com o contexto em que é acionado.

## Como rodar este projeto

- É necessário ter a versão 18 ou maioe do Node
- Digite node i no seu terminal na raiz do projeto
- Execute npm run dev e abra o localhost na porta indicada no terminal

## Observações

- O design usa a fonte Roboto. A fonte Roboto Flex é melhor para performance, tendo a mesma aparência que a Roboto. Estruturei o CSS de forma que, caso a equipe de design tivesse qualquer restrição ao uso da Roboto Flex, fosse possível alterar para Roboto com apenas uma linha de código.

```scss
$ff-sec: var(--roboto);
$ff-sec: var(--roboto-flex);
```

- As fontes variam a partir de 1600px de largura. A técnica para mudança de fonte permite alterar as fontes em apenas um lugar e cascatear para todo o projeto.

```scss
:root {
	--fs-1: #{pxToRem(12)};
	--fs-2: #{pxToRem(13)};
	--fs-3: #{pxToRem(14)};
	--fs-4: #{pxToRem(16)};
}

@media (min-width: 100em) {
	:root {
		--fs-1: #{pxToRem(16)};
		--fs-2: #{pxToRem(20)};
		--fs-3: #{pxToRem(22)};
		--fs-4: #{pxToRem(24)};
	}
}
```

- O header acopanha a largura da tela de forma fluida, e as imagens também.
  Caso a equipe de design deseje manter a largura das imagens fixa, bastaria apagar as larguras em porcentagem.

- Implementei o placeholder do input como uma label para melhor acessibilidade
  Referências:
  https://www.w3.org/WAI/tutorials/forms/instructions/#placeholder-text
  https://www.smashingmagazine.com/2018/06/placeholder-attribute/

- Modal é aberto com a função nativa `showModal()`. Para isso utilizei o hook useRef, garantindo que não haja interação com o restante da página. Além disso o modal pode ser fechado com esc e com o clique fora da caixa de diálogo
  Referências:
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog

- A página foi testada com zoom de 200%, fonte padrão de 32px
  https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html

- A página foi testada com navegação apenas pelo teclado, permitindo que usuários que não conseguem usar o mouse tenham acesso a todas as funcionalidades

## Tarefas

- [x] Fazer configuração do Prettier e ESLint;
- [x] Criar Reset CSS;
- [x] Criar estrutura de tipografia;
- [x] Estabelecer cores
- [x] Estabelecer containers
- [x] Criar componente header
- [x] Criar componente Filtro
  - [x] Basic layout
  - [x] Set handle change
  - [x] Set label animation
  - [x] Set focus and hover outline for accessibility
  - [x] Add icon
- [x] Criar componente Adicionar Empresa
  - [x] Criar classe para formato do botão
  - [x] Adicionar ícone à classe utilitária
- [x] Criar Lista de empresas
- [x] Criar componente modal
  - [x] Fazer Mecanismo de abertura do modal
  - [x] Fazer Modal fechar com esc e clicando fora dele
  - [x] Layout do modal
  - [x] Garantir que modal continue funcional com zoom e fonte base de 32px
  - [x] Outline do modal seguindo padrão da página
  - [x] Aria label no botao de fechar
  - [x] Cursor pointer nas labels
  - [x] Adicionar padding aos inputs
- [x] Itens da lista trazidos automaticamente pela API
- [x] Inclusão, Edição, e exclusão de empresas
- [x] Ação de filtro
- [x] Exclusão de empresa
- [x] Edição de empresas

## Melhorias futuras

- [ ] Aplicar debounce no filtro para reduzir quantidade de requisições
- [ ] Fazer requisição inicial no servidor para melhorar o tempo de carregamento inicial
- [ ] Submissão dos dados com enter
