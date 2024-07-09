const message1 = ['You\'ve got this!', 'Believe in yourself!', 'Keep pushing!'];
const message2 = ['Today\'s the day.', 'Today is a canvas, and you are the artist.', 'You\'re a future leader.'];
const message3 = ['Start now!', 'Create something amazing.', 'Remember, each page turned is another step towards your goals.'];

const messageGenerator = () => {
    let randIndex1 = Math.floor(Math.random() * message1.length);
    let randIndex2 = Math.floor(Math.random() * message2.length);
    let randIndex3 = Math.floor(Math.random() * message3.length);

    return message1[randIndex1] + ' ' + message2[randIndex2] + ' ' + message3[randIndex3];
}

console.log(messageGenerator());
