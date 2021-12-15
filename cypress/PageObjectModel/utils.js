export class Utils {
  bodyElement() {
    return cy.get('body');
  }

  formatMoney(number, decPlaces = 2, decSep = '.', thouSep = ',') {
    decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
    decSep = typeof decSep === "undefined" ? "." : decSep;
    thouSep = typeof thouSep === "undefined" ? "," : thouSep;
    var sign = number < 0 ? "-" : "";
    var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
    var j = (j = i.length) > 3 ? j % 3 : 0;
  
    return sign +
        (j ? i.substring(0, j) + thouSep : "") +
        i.substring(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
        (decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : "");
  }
  
  
  totalPrice(price, qty) {
    let pri = parseFloat(price.substring(1).trim());
    return this.formatMoney(pri * qty);
  }

  
}