# heysweet.github.io

<img width="980" alt="image" src="https://github.com/heysweet/heysweet.github.io/assets/1190438/d14f4527-109f-4e4e-a436-48339bac2ef1">

This website is a portfolio and blog site that I built using React, TypeScript, NextJS, and Tailwind CSS.

It is hosted on GitHub Pages and uses GitHub Actions for CI/CD.

The site is designed to be easy to maintain and update, with a focus on performance and accessibility,
and meant to showcase my work and projects.

## Design Notes

I chose to setup a challenge for myself by designing the website using only 2 colors. I do technically use a few more than 2 colors to create effects like the [chromatic aberration](https://en.wikipedia.org/wiki/Chromatic_aberration) on hover, but all UI elements are either ON or OFF.

This lead to interesting exploration around checkboards, dithering, and other means of achieving gradiation with only 2 colors, particularly around things like hover/focus/active states.

For the large images, I'm just throwing them into [GIMP and using the mode feature](https://docs.gimp.org/en/gimp-tutorial-quickie-change-mode.html) with 1-bit palette.

For the smaller icons, I actually have CSS transformation logic which can transform
the iconography from black to green.

In earlier iterations, I had a much strong flicker effect, but decided to tone
it down to ensure maximal usability, while still achieving a retro feel with
scanlines and a less frequent and less dramatic flicker effect.
