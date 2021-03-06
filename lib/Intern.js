const Employee = require("./Employee.js");

class Intern extends Employee {
    
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    
    getSchool() { return this.school; }
    
    getRole() { return "Intern"; }

    getHTML() {
        return `
        <div class="col-md-4" style="margin-top: 25px;">
            <div class="card border-warning">
            <i class="material-icons card-img-top text-center" style='font-size: 13vw; background: linear-gradient(0deg, rgba(119,129,0,1) 0%, rgba(119,129,0,1) 50%, rgba(235,255,0,1) 100%);'>school</i>
                <div class="card-body">
                    <h5 class="card-title" style="text-align: center;">${this.name}</h5>
                    <p class="card-text">Email: ${this.email}</p>
                    <p class="card-text">School: ${this.school}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">User ID: ${this.id}</small>
                </div>
            </div>
        </div>
        `;
    }
}

module.exports = Intern;