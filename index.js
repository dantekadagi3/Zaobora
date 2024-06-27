/*changing the inner text in the about section*/
const texts = [
    {
        title: 'Hist<span class="green--color">ory</span>',
        information: `
            Zaobora was began in the early 70's by young Indian farmers in Pakistan.<br>
            It first began as a community where farmers would go and discuss the 
            diseases attacking their crops and how to prevent them in order to boost their harvest.
        `
    },
    {
        title: 'Gro<span class="green--color">wth</span>',
        information: `
            Due to the growth in the population of the people in the region, the area got congested 
            and the groups dispersed to different zones. It became difficult for them to communicate, 
            leading to the development of the platform in 1990.
        `
    },
    {
        title: 'Devel<span class="green--color">opment</span>',
        information: `
            In the early 2000s, Zaobora started integrating modern technologies. 
            It launched an online platform to facilitate better communication and resource sharing among farmers.
        `
    }
];

let currentIndex = 0;

setInterval(function() {
    // Update the title and information based on the current index
    document.getElementById('title').innerHTML = texts[currentIndex].title;
    document.getElementById('information').innerHTML = texts[currentIndex].information;
    
    // Move to the next index, or loop back to the first one
    currentIndex = (currentIndex + 1) % texts.length;
}, 3000); // 15000 milliseconds = 15 seconds