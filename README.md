# BlackJackReact

<div id="top"></div>


<br />

<h3 align="center">BlackJackReact</h3>

  <p align="center">
    My Personal Coding Project to Learn ReactJS
    <br />
    <a href="https://github.com/SomexJames/BlackJackReact"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/SomexJames/BlackJackReact/issues">Report Issues</a>
    ·
    <a href="https://github.com/SomexJames/BlackJackReact/issues">Submit Improvements</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#backstory">Backstory</a></li>
        <li><a href="#my-main-focus">My Main Focus</a></li>
      </ul>
    </li>
    <li><a href="#steps-i-took">Steps I Took</a></li>
    <li>
      <a href="#code-explanation">Code Explanation</a>
      <ul>
        <li><a href="#outside-layers">Outside Layers</a></li>
        <li><a href="#pre-game-base">Pre-Game Base</a></li>
        <li><a href="#game-base">Game Base</a></li>
        <li><a href="#game-buttons">Game Buttons</a></li>
      </ul>
    </li>
    <li>
      <a href="#what-i-learned">What I Learned</a>
      <ul>
        <li><a href="#importance-of-pre-planning">Importance of Pre-Planning</a></li>
        <li><a href="#more-pseudocode-and-comments">More Pseudocode and Comments</a></li>
        <li><a href="#earlier-version-control">Earlier Version Control</a></li>
        <li><a href="#avoid-deep-nesting">Avoid Deep Nesting</a></li>
        <li><a href="#separate-css-files">Separate CSS Files</a></li>
      </ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

### Backstory
Learning JavaScript algorithms and data structures was very fun for me, but once I got to learning about libraries and frameworks, I was having trouble conceptualizing how or why a library like React was supposed to help in practical cases. So, I thought “Why not try and actually use it in a real-life project?”. I was thinking of possible projects and eventually landed on coding a blackjack game since that’s a game that’s always interested me ever since I watched the movie, “21”.

### My Main Focus
After pinpointing what from React specifically gave me trouble conceptualizing, I made sure to make an active effort to at least learn components, jsx, classes, and states. More specifically, their practical uses and how they fit and work together.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Steps I Took -->
## Steps I Took
<ol>
    <li>Browsed many different blackjack games written in javascript</li>
        <ul><li>Tried to figure out what each piece of code did and how they all fit together. (Much easier said than done)</li></ul>
    <li>Looked for a Front-End Template</li>
        <ul><li>Changed pieces of code to see what it did on the front-end</li></ul>
    <li>Compared how Reactjs achieves the same thing</li>
        <ul><li>Took my customized front-end template and converted it into ReactJS</li></ul>
    <li>Briefly planned file structure</li>
        <ul><li>From looking at some of the bigger and more sophisticated open-source projects on github, I knew I wanted many simple components that generally serve one purpose. (Just looked neat and organized like that)</li></ul>
    <li>Started on the pre-game page</li>
        <ul><li>I planned to have two pages (one for pre-game and one for the actual game), so I started thinking about what I needed on the pre-game page</li></ul>
    <li>Incorporate states</li>
        <ul><li>Having trouble on sharing variables in separate components in the pre-game page made me realize this is what state is for</li></ul>
        <ul><li>I initially tried using class components and constantly passing down props</li></ul>
        <ul><li>Eventually, I learned about hooks (specifically, useContext and useEffect)</li></ul>
        <ul><li>And eventually made everything into functional components with hooks</li></ul>
    <li>Worked on the game page</li>
        <ul><li>For guidance, I looked at different blackjack games written in js and how they wrote their render components</li></ul>
        <ul><li>This helped me get an idea of what functions and states I would need for each component</li></ul>
    <li>Organized files</li>
        <ul><li>Continued splitting components as much as possible to make them easier to identify in debugging</li></ul>
</ol>
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Problems I Faced -->
## Code Explanation

### Outside Layers
In the outermost layer, the whole app is essentially wrapped in a global context provider so that any child components can access the global state without having to manually pass them down each time. The next layer inside is the start page (which, more or so, serves as a convenient container for the header and two “pages” of bases)

### Pre-Game Base
At the surface, the pre-game base takes 3 functional components to handle updating current balance, placing bets, and displaying an instructional message. The only sigificant component it has is in placeBet.js. When you place a bet, it goes through some conditionals to make sure you have enough in your balance and to make sure that the bet is an integer. In addition, if the global deck has less than 10 cards, it'll create a new deck by calling generateDeck(). Finally, it'll call dealCards() to deal one card to the dealer and two to the player.

### Game Base
The game base essentially displays 3 functional components like the pre-game base, but since all the game logic is handled here, the game base components go a little deeper than pre-game’s. One of the two main components that the game utilizes is from cardDisplay.js. This file primarily handles retrieving the current cards of both players and rendering the cards with templates from the createCards.js file.

### Game Buttons
The other main game component is in the gameButtons.js file. This file essentially renders a start new game button or hit and stand buttons based on the game state.

For the hit button, it first goes through some sanity checks. Then it calls getRandomCard() and adds the returned card to the global player cards array. It then calls getCount() to update the count based on the cards in the players hand. And if the player’s count is over 21, it subtracts the bet from the balance, resets the player’s hand, and ends the game. If not, the player is able to hit or stand with their new hand.

If the player stands, the dealer will keep calling dealerDraw() and update its hand and count until the dealer’s count is greater than the player’s count. If the dealer’s count is greater than 21, the game state is updated to reflect the correct changes. If neither player nor dealer bust, it calls getWinner() and whoever has the higher count is deemed the winner. If not, it’s a push and the balance remains unchanged.  
***NOTE:*** If a player stands with a count less than 11, “dealer.count < 12” ensures that the dealer will always “draw” at least one card (equivalent to the dealer flipping their second card in real-life).


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- What I Learned -->
## What I Learned

### Importance of Pre-Planning
As I got more knowledgeable during the course of this project, I became more aware of the inefficiencies of my project. Before I was even able to just get a working app, I kept changing the architecture of my project. And when I’m just trying to learn about how things work in general, changing the foundation and logic I started my project with just lead to more confusion and inconsistencies (even if they did make it more efficient and organized). Even though this was a project I did myself, it looks like it was as if multiple people were forced to make a project together with the added challenge of not being able to communicate with each other.

### More Pseudocode and Comments
Pseudocode would have saved me a lot of time because I would think of a feature or component to add, and before really thinking about what exactly I would need in this function, I would be too eager to start coding and lead myself down the wrong path. To help visualize, it’s like if I were lost in the woods and even though I know I have a compass in my bag, I just start walking in a random direction without even bothering to look for it just because I’m that excited about walking.  
Commenting would’ve helped jog my memory on what each component does because every time I opened up my project to work on it, it would to take a couple minutes of just staring at my code for the lightbulb in my brain to click on and remember what I’m looking at and what I needed to work on. And now that I'm currently working on this, it also would have helped out tremendously with writing this documentation because it’s been a while since I last worked on this. I had to really dig deep in my memory to try and remember what my thought process was during that time.

### Earlier Version Control
I was aware of the importance of version control even before this project, but when it came to actually try and set up git, I was confused, and quite frankly, intimidated. During this project, I almost ran out of disk space because I created at least 6 copies of this project because I kept thinking of different ways to design this project.

### Avoid Deep Nesting
This kind of goes hand in hand with pre-planning, but now that I know a little more about standard design patterns, I want to try and plan what type of structure I would need based on the outline of my project.

### Separate CSS Files
Unlike my previous lesson, I need to try and separate my CSS files because I found navigating my single CSS file quite tedious and confusing. I plan on only keeping global styles like fonts and general HTML tags in the main CSS file and place the other CSS files in the directories that they're used.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
