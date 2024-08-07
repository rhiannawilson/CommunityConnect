const usernames = [
"BeatBop",
  "TuneZest",
  "RiffMix",
  "ChordCue",
  "JazzyVibe",
  "NotePulse",
  "SongSync",
  "MelodyGo",
  "RhythmFX",
  "HarmonicX",
  "BassWave",
  "EchoBeat",
  "ChordFix",
  "VibeEcho",
  "GrooveHQ",
 ];
  
  
  const emailStarters = [
"ZeldaStorm34",
"JasperEcho91",
"LunaQuill77",
"OrionFlare62",
"MiraVortex45",
"RyderNova88",
"DylanFrost23",
"VeraShade56",
"KaiHorizon79",
"FayeWhisper12",
"EzraRift33",
"NinaSpark20",
"RavenLoom67",
"TaraGlimmer94",
"MaxWave41",
"IvyShade85",
"LeoAbyss53",
"AriaGale28",
"JunoStar14",
"TheoFrost72",
"ZaraEcho39",
"RexBlaze58",
"LyraStorm46",
"EdenFlicker33",
"JaxMist11"
  ];
    
  const emailDomains = [
"@icloud.com",
"@test.com",
"@aol.com",
"@yahoo.com",
"@gmx.com",
"@dispostable.com",
"@fastmail.com",
"@protonmail.com",
"@mail.com",
"@live.com",
"@secretmail.com",
"@yandex.com",
"@trashmail.com",
"@example.com",
"@spam.com",
"@outlook.com",
"@tempmail.com",
"@anonymousmail.com",
"@fake.com",
"@email.com",
"@rocketmail.com",
"@tutanota.com",
"@hotmail.com",
"@privatemail.com"
  ];
  
  const randomThoughts = [
"The worlds oldest known musical instrument is a flute made from bird bone, found in Germany and dated to be over 40,000 years old.",
"The 'Star Spangled Banner' was originally a poem, and it became the national anthem of the United States in 1931.",
"The Beatles used more than 200 different instruments throughout their career, including unconventional ones like the sitar and the harmonium.",
"Mozart composed over 600 pieces of music, including symphonies, operas, and chamber music, by the age of 35.",
"Beethoven continued to compose music even after he became completely deaf, including some of his most famous works.",
"The longest piece of music ever composed is ‘As Slow As Possible’ by John Cage, with a performance lasting 639 years, currently underway in Halberstadt, Germany.",
"Vinyl records were first introduced in 1948, and they were a major advancement from earlier shellac records.",
"The most expensive musical instrument ever sold was a Stradivarius violin, which went for over $15 million at auction.",
"The average human can distinguish between about 10,000 different smells, but only a fraction of those can be associated with music.",
"In a typical symphony orchestra, there are over 100 musicians playing a variety of instruments, from strings to brass to percussion.",
"The piano has 88 keys, which includes 52 white keys and 36 black keys.",
"Music has been shown to have various therapeutic benefits, including reducing stress, improving mood, and enhancing cognitive function.",
"The 'Guinness World Record for the largest choir' involved over 15,000 participants performing together in South Africa in 2015.",
"The shortest song ever recorded is 'You Suffer' by Napalm Death, which lasts just 1.316 seconds.",
"A metronome is a device used to measure beats per minute (BPM) in music, helping musicians keep a consistent tempo.",
"The most expensive music video ever made was Michael Jackson’s 'Scream,' with a production cost of around $7 million.",
"Jimi Hendrix was known for his iconic guitar playing, including using feedback and distortion to create unique sounds.",
"The 'Halo Effect' in music refers to how a particularly memorable or emotional song can enhance the listener's perception of an artist's entire catalog.",
"The longest-running musical on Broadway is 'The Phantom of the Opera,' which has been performing since 1986.",
"The largest musical instrument in the world is the Great Stalacpipe Organ, located in Luray Caverns, Virginia, which uses the natural formations of the cave to create sound.",
  ];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomEmail = () =>
    `${getRandomArrItem(emailStarters)}${getRandomArrItem(emailDomains)}`;
  
  // Function to generate random assignments that we can add to student object.
  const getRandomUsername = () => 
    `${getRandomArrItem(usernames)}`;
  
  const getRandomThought = () =>
    `${getRandomArrItem(randomThoughts)}`;
  
  // Export the functions for use in seed.js
  module.exports = { getRandomEmail, getRandomUsername, getRandomThought };