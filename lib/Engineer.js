const Employee = require("./Employee.js");

class Engineer extends Employee {
    
    constructor (name="None", id="None", email="None", github="None") {
        super(name, id, email);
        this.github = github;
    }
    
    getGithub() { return this.github; }
    
    getRole() { return "Engineer"; }

    getHTML() {
        return `
        <div class="col-md-4" style="margin-top: 25px;">
            <div class="card border-info">
            <i class="material-icons card-img-top text-center" style='font-size: 13vw; background: linear-gradient(0deg, rgba(0,73,131,1) 0%, rgba(0,73,131,1) 50%, rgba(0,142,255,1) 100%);'>person</i>
                <div class="card-body">
                    <h5 class="card-title" style="text-align: center;">${this.name}</h5>
                    <p class="card-text">Email: ${this.email}</p>
                    <p class="card-text">Github: ${this.github}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">User ID: ${this.id}</small>
                </div>
            </div>
        </div>
        `;
    }
}

module.exports = Engineer;