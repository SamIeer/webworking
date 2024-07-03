// workign on left aside lmid
const mid = document.getElementById('lmid').firstElementChild;
console.log(mid);
const mid2 = document.getElementById('lmid').lastElementChild;
console.log(mid2);

mid.addEventListener('click', () => {
   const chilren = mid2.children;
   const style = document.createElement('style');
    style.textContent = `
        #lmid ul li:nth-child(odd) {
            transform: translateX(-88px);
            opacity: 100%;
            font-size:24px;
            display: block;
        }
        #lmid ul li:nth-child(even) {
            transform: translateX(39px);
            opacity: 100%;
            font-size:24px;
            display: block;
        }
    `;
    document.head.appendChild(style);
})