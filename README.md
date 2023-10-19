# Cadastro de Empresas

Descrição do projeto

## Como rodar este projeto

- Versão do Node
- Certifique-se que sua versão do node é a 18 ou maior

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
  Caso a equipe de design deseje manter a largura das imagens fixa, basta apagar as larguras em porcentagem.

- Implementei o placeholder do input como uma label para melhor acessibilidade
  Referências:
  https://www.w3.org/WAI/tutorials/forms/instructions/#placeholder-text
  https://www.smashingmagazine.com/2018/06/placeholder-attribute/

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
- [ ] Criar componente Adicionar Empresa
- [ ] Criar componente modal
- [ ] Criar Lista de empresas
- [ ] Criar ação de abertura do modal
