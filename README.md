# Personal ReactJS boilerplate

This is my personal React.js boilerplate.

## Intro

JavaScript environment should be easy to set up, just like 2000-2010 when you just open notepad and start coding.

I started this little project after investing a lot of time trying to find the "perfect" react starter kit. Each one I find on Github is either outdated (in which case I am too lazy to refactor its code and update it 😜) or it's an over-engineered/complicated boilerplate that has tons of things I don't need. When I just need to save some time of initializing webpack, babel and react.

This is by no mean a perfect boilerplate, it's just a personal bunch of files that I stitched together in a way that makes sense in my head but if anyone finds this useful that's super great. :)

# What's in here?

1. Propulsion system
2. Oxidizer
3. Adiabatic expansion kit
4. An over-complicated net thrust equation

Just kidding there's React, Babel, Webpack, and Express (for a local server instead of webpack's, just because).

## Code

The proect's structure consists of two main folders:

1. `src/app`: the code directory.
2. `src/public`: the build directory.

The React and modules code resides in `src/app/`. Although the style of the components is in `src/public/style/`.

Content of `app` dir (according to my head) consists of:

1. `components`: ReactJS components like Headers, Navigation bars, etc..
2. `pages`: Whole ReactJS pages built out of the previously mentioned components.
3. `util`: ES6 modules coded especially to deal with repetition of code in a project.

## Try it out

To try the demo in this nodejs app:

1. Clone/Download this repo `git clone https://github.com/anefzaoui/personal-react-boilerplate`
2. Install the dependencies with `npm install` from within the directory
3. Make sure you have webpack installed globally, if not run `npm install -g webpack`
4. Run `npm start` which will run webpack, bundle the code altogether along with development version of react and run a local server.
5. Go to `http://localhost:3000`.

If you want the code to be minified and use production version of React instead of `npm start` you should run `npm run start:prod`.

## Screenshots

Wha?

## FAQ

### Where's bootstrap?

There is no doubt that bootstrap makes it way easier to quickly build UIs and animations. But the absence of bootstrap comes from a personal belief that if we're not going to use a hefty amount of the bootstrap within our code, it shouldn't be added because it doesn't make sense to weighten (is this even a word?) up an app with unnecessary code if we're going to use it only once or twice.

So because we aim for SPAs to be as light as possible, bootstrap wasn't added. However if you're reading this for some reason feel free to add it if that's what floats your boat.

### Will I maintain this?

As long as I'm working with React yes 🙂

### What could be done better/ What can we add to make it better

- Testing suite.

- Debug mode for logs to be excluded from the bundled file once we decide to build for production.

### Why React (just for fun 🙂)?

[![What you really really want?](https://img.youtube.com/vi/Ze4ep7YMAn8/0.jpg)](https://www.youtube.com/watch?v=Ze4ep7YMAn8)

For reference, people in the video are Twitter's @eveporcello @peggyrayzis @okbel @samerbuna @mxstbr @_jayphelps @ken_wheeler @iam_preethi
