The Leonard Maltin Game Trainer
===============================

This is a mock of The Leonard Maltin Game from [Doug Benson's podcast](http://douglovesmovies.com/).

[You can play the latest version here](http://slatron.github.io/movie-game/app/)

Rules
=====

Choose a category and year on the first page. You will be shown a clue that is either the tagline of the film or the first portion of the film's review. You will also see the numner of names in the cast, maximum of ten.

Of the names shown, bid how many names you think you can name the movie in. You will see the names on the next page, from the BOTTOM of the cals list up. Type in your guess as the movie title.

When making a guess, you must name the full title of the movie. For example, it is National Lampoon's Animal House, not Animal House. And it is Speed 2: Cruise Control, not simply Speed 2.

To best understand the game, listen to [Doug Loves Movies](http://douglovesmovies.com/).

Installation
============

To install locally, clone this repository and cd in:

```
$ git clone git@github.com:slatron/movie-game.git
$ cd movie-game
```

Run npm to install dependencies:

```
$ npm install
```

Run gulp to build app and run local server:

```
$ gulp
```

Then, go to `localhost:2710` in a browser.
