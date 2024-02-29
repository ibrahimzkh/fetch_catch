fetch("https://reqres.in/api/users")
  .then((response) => response.jon())
  .then((data) => {
    const tableGeneral = document.querySelector(".table");
    for (let i = 0; i < data.data.length; i++) {
      const tr = document.createElement("tr");

      const tdone = document.createElement("td");
      tdone.classList.add(".dopa");
      tdone.textContent = data.data[i].first_name;

      const tdtwo = document.createElement("td");
      tdtwo.classList.add(".dopa");
      tdtwo.textContent = data.data[i].last_name;

      const tdthree = document.createElement("td");
      const mail = document.createElement("a");
      mail.href = data.data[i].email;
      tdthree.classList.add(".dopa");
      mail.textContent = data.data[i].email;
      tdthree.append(mail);

      const tdfor = document.createElement("td");
      tdfor.classList.add(".image");
      const imgTdfor = document.createElement("img");
      tdfor.append(imgTdfor);
      imgTdfor.src = data.data[i].avatar;

      const tdfive = document.createElement("td");
      tdfive.classList.add(".del");
      tdfive.classList = "tdred";
      const buttonTdfive = document.createElement("button");
      buttonTdfive.textContent = "Удалить";
      tdfive.append(buttonTdfive);

      const buttonGen = document.querySelector(".del");

      tableGeneral.append(tr);
      tr.append(tdone, tdtwo, tdthree, tdfor, tdfive);

      buttonTdfive.addEventListener("click", () => {
        tr.remove();
      });
    }
  }).catch(() => {
    const table = document.querySelector('.table')
    table.style.display = 'none'
    const error = document.createElement('div').textContent = 'Error'
    document.querySelector('.container').append(error)
  })
