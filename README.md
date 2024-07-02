# grupo_05-PW-T02-2024-1
Trabalho Prático da disciplina de Programação para Web - FACOM-UFMS
# Como executar:
1. Clone o repositório em sua máquina;
2. No terminal, execute o 'npm install';
3. Em seguida execute o 'npm run dev';
4. Aperte no link disponibilizado;
# Descrição dos componentes:
Card_large, Card_medium e Card_small: São utilizados na página inicial para expor os quizes aos usuários em três diferentes formatos.
Dashboard: É usada para oferecer as informações do quiz presente na respectiva card.
Header: Armazena o nome do site, a logo do site, a foto de perfil do usuário, e um botão para a criação do seu próprio quiz.
Loading: Tela de carregamento.
NewRegisterModal: É um modal que realiza o cadastro de novos usuários por email/senha e cadastro/login por meio do Google, é acessado por meio do NewUserModal. 
NewUserModal: É um modal que realiza o login de usuários já cadastrados por email/senha e cadastro/login por meio do Google, é acessado por meio da foto de perfil do Header.
Question: Apresenta as perguntas e suas respectivas respostas do quiz selecionado.
Rank: Apresenta a posição de todos os usuários que já criaram uma conta, inclusive a do usuário logado.
ScoreBoard: Aparece quando termina as perguntas de um respectivo quiz, apresenta a pontuação do usuário e, se o mesmo estiver logado, disponibiliza o botão para acessar o ranking.
Search: Permite filtrar os quizes por categoria na página inicial.
# Tecnologias usadas:
* React.js
* Styled components
* Firebase
* Typescript
* Vercel
