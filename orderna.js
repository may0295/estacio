const tabela = document.getElementById("tabela").tBodies[0];
const linhas = [...tabela.rows]; 
let ordemOriginal = null;
let ordenado = 0;

function ordenarPorNome() {
    if (ordemOriginal===null) {
    ordemOriginal = linhas.slice();
    }

  if (ordenado===0) {

    linhas.sort((a, b) => {
      const nomeA = a.cells[1].textContent.toLowerCase();
      const nomeB = b.cells[1].textContent.toLowerCase();
      return nomeA.localeCompare(nomeB);
      ordenado = 1;
    });
    ordenado = 1;
     } else if (ordenado === 1) {
        linhas.sort((a, b) => {
      const nomeA = a.cells[1].textContent.toLowerCase();
      const nomeB = b.cells[1].textContent.toLowerCase();
      return nomeB.localeCompare(nomeA);
      });
      ordenado = 2;
     
     } else if (ordenado === 2) {
    resetar()
}

  linhas.forEach(linha => tabela.appendChild(linha));
}


function ordenarPorCategoria() {
    if (!ordemOriginal) {
    ordemOriginal = linhas.slice();
    }
    
    if (ordenado===0) {
    linhas.sort((a, b) => {
      const catA = a.cells[2].textContent.toLowerCase();
      const catB = b.cells[2].textContent.toLowerCase();
      return catA.localeCompare(catB);
    });
    ordenado = 1;
   } else if (ordenado === 1) {
        linhas.sort((a, b) => {
      const catA = a.cells[2].textContent.toLowerCase();
      const catB = b.cells[2].textContent.toLowerCase();
      return catB.localeCompare(catA);
      });
      ordenado = 2;
     
     } else if (ordenado === 2) {
    resetar()
    
}

  linhas.forEach(linha => tabela.appendChild(linha));
}


function ordenarPorPreco() {
    if (!ordemOriginal) {
    ordemOriginal = linhas.slice();
    }
    if (ordenado===0) {
    linhas.sort((a, b) => {

      const precoA = parseFloat(a.cells[5].textContent.replace("R$", "").replace(",", ".").trim());
      const precoB = parseFloat(b.cells[5].textContent.replace("R$", "").replace(",", ".").trim());
      return precoA - precoB;
    });
    ordenado = 1;
  } else if (ordenado===1) {
    linhas.sort((a, b) => {
      const precoA = parseFloat(a.cells[5].textContent.replace("R$", "").replace(",", ".").trim());
      const precoB = parseFloat(b.cells[5].textContent.replace("R$", "").replace(",", ".").trim());
      return precoB - precoA; 
      
    });
    ordenado = 2;


     } else if (ordenado === 2) {
    resetar()
    
}

  linhas.forEach(linha => tabela.appendChild(linha));
}

function ordenarPorQuantidade() {
  if (!ordemOriginal) {
    ordemOriginal = linhas.slice();
  }

  if (ordenado === 0) {
    linhas.sort((a, b) => {
      const quantA = parseInt(a.cells[6].textContent.trim(), 10);
      const quantB = parseInt(b.cells[6].textContent.trim(), 10);
      return quantA - quantB;
    });
    ordenado = 1;
  } else if (ordenado === 1) {
    linhas.sort((a, b) => {
      const quantA = parseInt(a.cells[6].textContent.trim(), 10);
      const quantB = parseInt(b.cells[6].textContent.trim(), 10);
      return quantB - quantA;
    });
    ordenado = 2;
  } else if (ordenado === 2) {
    resetar();
  }

  linhas.forEach(linha => tabela.appendChild(linha));
}



function resetar() {
linhas.length = 0; 
    ordemOriginal.forEach(linha => linhas.push(linha));
    ordenado = 0;
}












  