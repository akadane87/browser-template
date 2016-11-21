# Game Project Scope Study

## Required Readings

-   [Game Project](https://github.com/ga-wdi-boston/game-project)
-   [Game API](https://github.com/ga-wdi-boston/game-project-api)
-   [What is a User Story](https://www.mountaingoatsoftware.com/agile/user-stories)

## Deliverables

After reading the `game-project` prompt and the `game-project-api` documentation
please do the following and be prepared to share and discuss during our next
class.

Submit detailed answers to the following in this file via a pull request:

-   A wireframe of what your game project will look like.
-   The data structure you plan to use.
-   How you will take the markup of the game board and represent it in JS
-   How you plan to approach this project.
-   4-8 user stories for your game project.
-   How you plan to keep your code modular.
-   What creative spin will you add to your project?
-   How will you use version control to backup / track your project?
-   Do you plan to attempt any of the bonuses?

You may want to submit pictures for your wireframes and/or user stories.
[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
has instructions to link to a picture you've uploaded to a service like [Imgur]
(http://imgur.com/).

// Wire Frame //
<img src="http://i.imgur.com/Pq84IrX.jpg" alt="My Wire Frames" height="860px" width="700px">

// Data Structure //
A single array

// Game Board Markup //
let gameBoard = [a1, a2, a3,
                 b1, b2, b3,
                 c1, c2 ,c3];

// Project Plan Steps //
1. Build basic html structure
2. Get game board functional + reset
3. Menu with register new-user and user-sign-in functional
4. Test
5. If time allows add style


// User Stories //
As a <type of user>, I want <some goal> so that <some reason>.
1.) As a PLAYER, I want TO REGISTER AS NEW USER OR SIGN IN AS REOCCURING USER so that YOU CAN PLAY OTHER PEOPLE
2.) As a PLAYER I want to BE ABLE TO RESET MY PASSWORD so that IF FORGET IT I CAN STILL SIGN BACK IN
3.) As a PLAYER I want TO SELECT GAME BOARD SQAURES EITHER X OR O so that I CAN WIN OR LOSE A GAME
4.) As a PLAYER I want to SELECT THE RESET BUTTON so that I CAN RESET THE BOARD
5.) As a PLAYER I want to NAVIGATE THE GAME SEAMLESSLY so that I DONT GET FRUSTRATED AND SMASH MY PHONE

// How to Keep Code Modular //
A detailed check list of request and functions needs to be assembled. Then in my code I will be able to clearly mark off my code into chucks coorisiposning with my check list.

// Creative Spin //
With the exception of a pop up registration page my whole game will be on one very tall page. I will design only in a mobile width to hopefully save some time. If I have some time to stylize at the end, I would like to do some floating clouds with CSS animations for the top page where the tite will be and some paralax trees and hill at the bottom of the page where the tic tac toe baord will be located.

// Version Control //
I plan to make a commit at every small goal/checked task on my to do list. If something works or I feel as tho I have made progress...then I make a commit.

// Attempted Bonus //
Hell no! I am already worried about getting the basics functional. I would like to be able to have users compete on seperate devices but I dont even know what that would look like. If I thought I had time or if it was doable, then Yes I would go for it but not holding my breath.
