class Gladiator {
  constructor(name, weapon){
    let weaponType = weapon
    if(weaponType === "Spear" || weaponType === "Club" || weaponType === "Trident"){
    this.name = name;
    this.weapon = weapon;
  }else{
    alert("Please choose a weapon: Spear, Club or Trident")
        }
      }
    }

let fighter1 = new Gladiator("Eric", "Trident")
let fighter2 = new Gladiator("Mark", "Spear")
