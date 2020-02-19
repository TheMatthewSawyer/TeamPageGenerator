const Employee = require("./Employee.js");

class Manager extends Employee {
    
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    
    getOfficeNumber() { return this.officeNumber; }
    
    getRole() { return "Manager"; }

    getHTML() {
        return `
        <div class="col-md-4" style="margin-top: 25px; width: 100%;">
            <div class="card border-success">
                <i class="material-icons card-img-top text-center" style='font-size: 13vw; background: linear-gradient(0deg, rgba(9,131,0,1) 0%, rgba(9,131,0,1) 50%, rgba(18,255,0,1) 100%);'>supervisor_account</i>
                <div class="card-body">
                    <h5 class="card-title" style="text-align: center;">${this.name}</h5>
                    <p class="card-text">Email: ${this.email}</p>
                    <p class="card-text">Office Number: ${this.officeNumber}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">User ID: ${this.id}</small>
                </div>
            </div>
        </div>
        `;
    }
}

module.exports = Manager;