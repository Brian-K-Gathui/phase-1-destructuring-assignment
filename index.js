// Solution for declaring five animal sounds
const animalSounds = ['cow', 'horse', 'sheep', 'pig', 'chicken'];
const [moo, neigh, baa, oink, cluck] = animalSounds;

// Solution for declaring four traditional animal names
const animalNames = ['cow', 'sheep', 'pig', 'chicken'];
const [bessie, dolly, babe, little] = animalNames;

// Solution for declaring three traditional animal colors
const animalColors = ['cow', 'sheep', 'pig'];
const [blackAndWhite, black, pink] = animalColors;

// Solution for declaring seven traditional rainbow color variables using color names
const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

// Solution for declaring six rainbow color variables using initials
const [r, o, y, g, b, , v] = rainbowColors;

// Solution for declaring Indigo using indg
const [, , , , , indg] = rainbowColors;

// Solution for destructuring the muppet object
const muppet = {
  name: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};
const { name: muppetName, color, song, job, partner } = muppet;

// Solution for assigning songs 2 and 4, and Kermit's job and partner
const muppetSongs = {
  song1: 'Rainbow Connection',
  song2: 'Moving Right Along',
  song3: 'Never Before, Never Again',
  song4: 'I Hope That Something Better Comes Along'
};
const kermit = {
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};
const { song2, song4 } = muppetSongs;
const { job: nestedJob, partner: nestedPartner } = kermit;
