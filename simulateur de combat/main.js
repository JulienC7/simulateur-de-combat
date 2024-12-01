class Guerrier {
    constructor(name, hp, attack, MinSuccess) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.success = MinSuccess;
    }
    GetAttack(target) {
        let MinSuccess = Math.random()
        if (this.success > MinSuccess) {
            console.log(this.name, "attaque", target.name);
            target.hp -= this.attack;
            console.log(target.name, "est maintenant à", target.hp, 'point de vie');
        }
        else (console.log(this.name, 'a raté son coup'))
    }
}
let Pierre = new Guerrier("Pierre", 150, 15, 0.70,);
let Jonathan = new Guerrier("Jonathan", 200, 15, 0.60);

Pierre.GetAttack(Jonathan);

function fight(Guerrier1, Guerrier2) {
    while (Guerrier1.hp > 0 || Guerrier2.hp > 0) {
        Guerrier1.GetAttack(Guerrier2);
        if (Guerrier1.hp <= 0) { return (Guerrier1.name); }
        Guerrier2.GetAttack(Guerrier1);
        if (Guerrier2.hp <= 0) { return (Guerrier2.name); }
    }
}
console.log(fight(Pierre, Jonathan), "a échoué, c'en est fini pour lui");