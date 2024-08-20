const btn = document.querySelector('.btn');
const advice = document.querySelector(".advice");
const id1 = document.querySelector(".id");

btn.addEventListener("click", async function () {
  try {
    let slip__id = Math.floor(Math.random() * 250 + 1) 
    console.log(slip__id)
    const res = await fetch(`https://api.adviceslip.com/advice/${slip__id}`);
    const data = await res.json();
    advice.textContent = data.slip.advice;
    id1.textContent = slip__id;
  } catch (err) {
    console.error(err);
  }
});

