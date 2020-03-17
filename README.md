# Micro sistema para registrar venda de produtos
Obs: para que seja mais simples visualizar e testar o que foi desenvolvido, fiz o deployer do backend e do frontend em um servidor free do HEROKU, logo não me atentarei neste documento a afalar sobre como instalar o projeto localmente.

## [LINK DO FRONTEND INEGRADO COM API](https://rnstore-front.herokuapp.com)
## [LINK DA API](https://rnstore-api.herokuapp.com/)

## Problema
### Sistema de Vendas
* O cliente pediu uma aplicação para poder realizar as vendas de produtos da loja;
* Ele também quer poder visualizar as vendas que foram realizadas.

### Requisitos
* O Back deve ser uma API REST
* Modelar a tabela de vendas
* A venda tem que ter os produtos vendidos, data da compra
* Uma venda pode ter mais de um produto
* A única tela de cadastro que você precisa fazer é a de vendas, não precisa criar a tela de cadastro de produtos, somente a tabela no banco de dados. - Popule a tabela de produtos diretamente no banco;
* Um produto deve conter nome, preço e previsão de entrega (Dias). Todos obrigatórios (lembrando que você não vai criar a tela de cadastro, mas deve tratar isso no banco de dados);
* O banco de dados não pode permitir 2 produtos com mesma referência;
* O front fica a seu critério. Atualmente, trabalhamos com Angular mas, você pode usar javascript puro ou algum framework (React/Vue/Angular);
Considere sempre quantidade 1 para cada item adicionado na tela de venda;
* Os preços dos produtos sofrem atualização semanal, isso não pode interferir no valor das vendas registradas e de seus produtos. Modele o banco de dados de tal forma a tratar essa questão;



# - Banco de dados
![modelagem database](https://i.ibb.co/BP5DyXg/modelagem-database.png)

Salvo as tabelas users, migrations e failed_jobs que foram criadas automaticamente por padrão pelo laravel no momento da execução da migration, a modelagem que atendeu esta implementação ficou com as seguintes entidades.
* sales onde ficam armazenada as vendas
* customers uma simples tabela de cliente para que as vendas seja identificadas, logo cada venda pertence a um único cliente e um cliente pode possuir varias vendas associadas a ele.
* products onde estão os registros dos produtos que por sua vez está associado a uma tabela pivot product_sale, tabela esta reaponsável em realizar a relação de n:n de produtos com venda, ou seja, cada produto pode estár associado a várias vendas e uma venda pode está associada a vários produtos.
# - [Frontend React](https://rnstore-front.herokuapp.com)

Segue algumas observações e libs utilizadas no frontend
* [Redux](https://www.npmjs.com/package/redux) e [React-redux](https://www.npmjs.com/package/react-redux) para gerir de forma escalável o compartilhamento de estados dentro da aplicação;
* [react-toastify](https://www.npmjs.com/package/react-toastify) pequeno componente de alerta para um feedback mais agradável;
* [date-fns](https://www.npmjs.com/package/date-fns) formatação de datas;
* [Styled-components](https://github.com/styled-components/styled-components) estilização;
* [Axios](https://www.npmjs.com/package/axios) para requisições acícronas com api

### Funcionalidades implementadas
* Listagem de produtos
* Adição e remoção de produtos no carrinho
* Possíbilidade de alterar a quantidade do produto no carrinho
* Cálculo de subtotal baseado no valor e quantidade do produto
* Cálculo do total da compra antes do fechamento
* Seleção de cliente no carrinho de compra
* Previsão de entrega com base na maior data de entrega do produto adicionado
* listagem de compras
* Exclusão de compras

# - Backend api Rest em LARAVEL 7.X


### Endpoints

| Verbo  | Endpoint | Descrição | Body | Param |
| ------ | ------ | ------ | ------ | ------ |
| GET | /api/customers | Retorna todos os clientes cadastrados | ||
| GET | /api/products | Retorna todos os produtos cadastrados | ||
| GET | /api/sales | Retorna todas as vendas cadastradas |||
| GET | /api/sales/{id} | Retorna dados de uma venda específica || id|
| POST | /api/sales | Cadastra uma venda | objeto com array dos produtos e dados da compra desejados|
