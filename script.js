// workign on left aside lmid
const mid = document.getElementById('lmid').firstElementChild;
console.log(mid);
const mid2 = document.getElementById('lmid').lastElementChild;
console.log(mid2);

mid.addEventListener('click', () => {
   const style = document.createElement('style');
    style.textContent = `
        #lmid ul li:nth-child(odd) {
            transform: translateX(-70px);
            transition-delay: 100ms;}
            
        #lmid ul li:nth-child(even) {
            transform: translateX(30px);
            transition-delay: 100ms;
        }
        #left  li img{
            display: block;
        }
`;
    document.head.appendChild(style);
})

//working on right container
const nav = document.getElementById('navbar');
const optn = nav.children;
const rhead = document.getElementById('rhead');
const rmid = document.getElementById('box');

console.log(optn);

for (let i = 0; i < optn.length; i++) {
    optn[i].addEventListener('click', () => {
        // Reset styles for all options
        for (let j = 0; j < optn.length; j++) {
            optn[j].style.transform = '';
            optn[j].style.marginLeft = '';
            if (optn[j].firstElementChild) {
                optn[j].firstElementChild.style.fontSize = '';
            }
            if (optn[j].lastElementChild) {
                optn[j].lastElementChild.style.fontSize = '';
            }
        }

        if (i == 0) {
            optn[i].style.transform = 'rotateY(45deg)';
            optn[i].style.marginLeft = '130px';
            if (optn[i].firstElementChild) {
                optn[i].firstElementChild.style.fontSize = '35px';
            }
            if (optn[i + 1] && optn[i + 1].lastElementChild) {
                optn[i + 1].lastElementChild.style.fontSize = '15px';
                optn[i+1].style.marginRight = '20px';
            }
            rhead.style.background = 'radial-gradient(circle, rgb(251 216 74), rgb(255, 255, 255) 100%)';
            rmid.style.background = 'radial-gradient(circle, rgb(251 216 74), rgb(255, 255, 255) 100%)';
        } else {
            optn[i].style.transform = 'rotateY(45deg)';
            optn[i].style.marginRight = '120px';
            if (optn[i].firstElementChild) {
                optn[i].firstElementChild.style.fontSize = '35px';
            }
            if (optn[i - 1] && optn[i - 1].lastElementChild) {
                optn[i - 1].lastElementChild.style.fontSize = '15px';
            }
            rhead.style.background = 'radial-gradient(circle, rgb(255 157 56), rgb(255 255 255) 100%)';
            rmid.style.background = 'radial-gradient(circle, rgb(255 157 56), rgb(255 255 255) 100%)';
        }
    });
}

fetch("https://type.fit/api/quotes")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    const randomIndex = Math.floor(Math.random() * data.length);
    const quote = data[randomIndex];
    const author = quote.author ? quote.author : "Unknown";
    document.getElementById('quote').innerText = `"${quote.text}" - ${author}`;
})
.catch(function(error) {
    console.error('Error fetching quote:', error);
    document.getElementById('quote').innerText = 'Failed to load quote.';
});