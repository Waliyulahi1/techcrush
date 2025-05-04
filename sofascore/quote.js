const quotes = [
    // Tech Quotes
    "Life is binary ZERO and ONE. - Emperor W",
    "Technology is best when it brings people together. - Matt Mullenweg",
    "The science of today is the technology of tomorrow. - Edward Teller",
    "Any sufficiently advanced technology is indistinguishable from magic. - Arthur C. Clarke",
    "Programming isn't about what you know; it's about what you can figure out. - Chris Pine",
    
    // Life Quotes
    "Probability of failure is ½ (half) and probability of success is also ½ (half), but probability of DEATH is 1. - Emperor W",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",

    // Religious Quotes (Islamic & Christian)
    "The best among you are those who have the best manners and character. - Prophet Muhammad (Sahih Bukhari)",
    "Verily, with hardship comes ease. - Quran 94:6",
    "For we walk by faith, not by sight. - 2 Corinthians 5:7",
    "The Lord is my shepherd; I shall not want. - Psalm 23:1",
    "Do not lose hope, nor be sad. - Quran 3:139",
    "I can do all things through Christ who strengthens me. - Philippians 4:13",
    "And whoever puts their trust in Allah, He will be sufficient for them. - Quran 65:3",
    "Love one another. As I have loved you, so you must love one another. - John 13:34",
    
    // Traditional Quotes
    "A person is a person because of other people. - African Proverb",
    "Do not plant your seed in the land you have not plowed. - African Proverb",
    "The wise never doubt, the ignorant never know. - Chinese Proverb",
    "A journey of a thousand miles begins with a single step. - Lao Tzu",


    
];

function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}