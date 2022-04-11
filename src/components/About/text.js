class TextPair {
    constructor(title, paragraphs) {
        this.title = title;
        this.paragraphs = paragraphs;
    }
}

const intro = new TextPair(
    "Hey there!",
    [
        "I'm a self-taught, full-stack developer based out of Austin, TX that started learning to code in March 2020.",
    ]
);

const codingStory = new TextPair(
    "Why I started coding",
    [
        `
        I WAS BORED OF VLOOKUPS. I'm joking, but this isn't far from the truth. My journey with programming started from watching a few online tutorials on Excel VBA to automate some
        manual processes at work while under lockdown. It was not much longer after that I found myself fully obsessed with learning how to automate everything.
        `,

        `
        After impressing my coworkers with my computer wizardry, I decided to move onto Python to *really* learn programming (and maybe get a job?). 
        However, after about a year of reading many books/tutorials on Python and playing around with a couple Raspberry Pis - 
        I felt I needed a more rigorous path in place if I really wanted to transition from Supply Chain Management to Software Development.
        `,

        `
        In July 2021 I found The Odin Project - an online course that is completely maintained by a community of self-taught developers and is totally free.
        Most of the projects you'll find here at the moment are from this course, and I intend to keep adding more as they are completed. 
        `,
    ]
)

const hobbies = new TextPair(
    "Outside of coding...",
    [
        "I go outside and do stuff! I am an amateur mountain biker, occasional backpacker, singer and guitarist at open-mics, self-proclaimed master chef, and self-aware coffee snob.",
    ]
);

const outro = new TextPair(
    'Stay awhile!',
    [
        'Feel free to reach out if you have any feedback/questions on my projects, or if you would like to talk jobs (!)',
    ]
)

const sections = [
    intro,
    codingStory,
    hobbies,
    outro,
]

export {
    sections,
}
