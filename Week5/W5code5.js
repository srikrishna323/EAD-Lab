function Employee(name, basicSalary, hra = 2000, ta = 1000) {
    this.name = name;
    this.basicSalary = basicSalary;
    this.hra = hra;
    this.ta = ta;
    this.calculateNetSalary = function () {
        let gross = this.basicSalary + this.hra + this.ta;
        let tax = gross * 0.10;
        let net = gross - tax;
        return {
            gross: gross,
            tax: tax,
            net: net
        };
    };
}
function calculate() {
    let name = document.getElementById("name").value;
    let basic = parseFloat(document.getElementById("basic").value);
    let hra = document.getElementById("hra").value;
    let ta = document.getElementById("ta").value;
    hra = hra ? parseFloat(hra) : 2000;
    ta = ta ? parseFloat(ta) : 1000;
    let emp = new Employee(name, basic, hra, ta);
    let result = emp.calculateNetSalary();
    document.getElementById("gross").innerText =
        "Gross Salary: ₹" + result.gross;
    document.getElementById("tax").innerText =
        "Tax (10%): ₹" + result.tax;
    document.getElementById("net").innerText =
        "Net Salary: ₹" + result.net;
}