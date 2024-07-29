<div align="center">
<a href="https://quackfy.vercel.app/">
<img src="https://quackfy.vercel.app/assets/Logo-DL75Vw8M.svg" alt="Quackfy">
</div>

<p align="center">O seu app de quizes favorito! 🥇</p>

## Como executar:
1. Clone o repositório em sua máquina;
```bash
git clone https://github.com/JuniorBignardi/Quackfy.git #clona o repositório localmente
cd Quackfy # acessa a pasta do repositório clonado
```
2. No terminal, execute o 'npm install';
```bash
npm install # instalação das dependências da aplicação
```
3. Em seguida execute o 'npm run dev';
```bash
npm run dev # executa a aplicação em modo desenvolvedor
```
4. Aperte no link disponibilizado;
## Descrição dos componentes:
* Card_large, Card_medium e Card_small: São utilizados na página inicial para expor os quizes aos usuários em três diferentes formatos.
* Dashboard: É usada para oferecer as informações do quiz presente na respectiva card.
* Header: Armazena o nome do site, a logo do site, a foto de perfil do usuário, e um botão para a criação do seu próprio quiz.
* Loading: Tela de carregamento.
* NewRegisterModal: É um modal que realiza o cadastro de novos usuários por email/senha e cadastro/login por meio do Google, é acessado por meio do NewUserModal. 
* NewUserModal: É um modal que realiza o login de usuários já cadastrados por email/senha e cadastro/login por meio do Google, é acessado por meio da foto de perfil do Header.
* Question: Apresenta as perguntas e suas respectivas respostas do quiz selecionado.
* Rank: Apresenta a posição de todos os usuários que já criaram uma conta, inclusive a do usuário logado.
* ScoreBoard: Aparece quando termina as perguntas de um respectivo quiz, apresenta a pontuação do usuário e, se o mesmo estiver logado, disponibiliza o botão para acessar o ranking.
* Search: Permite filtrar os quizes por categoria na página inicial.


<div align="center">
<h2>Tecnologias usadas 💻</h2>
<img height="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
<img height="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" />
<img height="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" />            
<img height="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" /> 
</div>