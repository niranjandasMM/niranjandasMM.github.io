let matrixA = [[22, 34], [88,99]];
let matrixB = [[50, 5], [60, 70], [123, 104]];

let matrixMultiply = (j, k) => k.map((ke) => ke.map((kee, i) => j.map((je, ji) => je[i] * ke[ji]).reduce((p, c) => p + c, 0)));

let mats = renderMatrix(matrixA) + renderMatrix(matrixB);

document.querySelector('math').innerHTML = mats + '<mo>=</mo>' + renderMatrix(matrixMultiply(matrixA, matrixB));

function tp(m) {
  return m.reduce((a, e) => {
    e.forEach((ce, ci) => {
      if(!a[ci]) {
        a[ci] = []; 
      }
      a[ci].push(ce);
    })
    return a;
  }, []);
}

function renderMatrix(m) {
  m = tp(m);
  let v = m.reduce((a, e) => {
    let r = e.reduce((ra, re) => ra += `<mtd><mn>${re}</mn></mtd>`, "");
    return a += `<mtr>${r}</mtr>`
  },"");
  return `<mfenced open='[' close=']'><mtable>${v}</mtable></mfenced>`;
}