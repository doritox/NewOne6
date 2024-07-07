const lottery = () => {
  const younum = document.getElementById("younum");
  const lot = document.getElementById("lottery");
  const lotr = document.querySelector(".lotr");
  let count = 5;
  let timeout;
  let pro = Number(
    prompt(`Enter Your Think Number,You Have ${count} Attench `)
  );
  younum.textContent = `Your Number : ${pro}`;

  for (let i = 0; i <= 5; i++) {
    while (pro < 1 || pro > 3) {
      pro = Number(
        prompt(`Enter Your Think Number,You Have ${count} Attench `)
      );
    }
    let rand = Math.floor(Math.random() * (4 - 1) + 1);
    const time = setInterval(function () {
      if (pro == rand) {
        lot.innerHTML += `<span style="color: green;"> Bingo The number lotter is ${rand}</span> <br>`;
      } else {
        lot.innerHTML += `<span style="color: red;">worng The number lotter is ${rand}</span> <br>`;
      }
      clearInterval(time);
    }, 1000);
  }
};
lottery();
