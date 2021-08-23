const messages = ["It’s just a bad day not a bad life.", "The best of healers is good cheer.", "Life is better when you’re laughing.", "Stars can’t shine without darkness.", "Cheer up, tomorrow is another chance.", "They can’t hurt you unless you let them.", "Tough times don’t last, tough people do.", "It’s hard to beat a person who never gives up.", "Cheer up, buttercup. Storms don’t last forever.", "I’ve never met a strong person with an easy past."];

const returnMess = () => {
    let i = Math.floor(Math.random()*messages.length);
    console.log(messages[i]);
}

returnMess();