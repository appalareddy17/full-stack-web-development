class Entity {
  constructor(name) {
    this.name = name;
  }
  identify() {
    console.log(`[Entity] Identity confirmed: ${this.name}`);
  }
}

class Robot extends Entity {
  bootUp() {
    console.log(`[Robot] ${this.name} is now online.`);
  }
}

class Android extends Robot {
  processData() {
    console.log(`[Android] ${this.name} is processing neural data.`);
  }
}

// Mixin Component 1
const CanFly = {
  fly() {
    console.log(`[Flight Protocol] ${this.name} is soaring in the air.`);
  }
};

const CanCompute = {
  calculate() {
    console.log(`[Compute Protocol] ${this.name} solved the quantum algorithm.`);
  }
};


class Drone extends Robot {
  scout() {
    console.log(`[Drone] ${this.name} is scanning the perimeter.`);
  }
}

Object.assign(Drone.prototype, CanFly, CanCompute);

console.log("--- 1 & 3. Testing Single & Hierarchical Inheritance ---");
const basicBot = new Robot("Bot-X1");
basicBot.identify(); // Inherited from Entity
basicBot.bootUp();   // Own method

console.log("\n--- 2. Testing Multilevel Inheritance ---");
const dataBot = new Android("Data-9000");
dataBot.identify();   // Inherited from Grandparent (Entity)
dataBot.bootUp();     // Inherited from Parent (Robot)
dataBot.processData(); // Own method

console.log("\n--- 4 & 5. Testing Multiple & Hybrid Inheritance ---");
const skyDrone = new Drone("SkyHawk");
skyDrone.identify();  // Inherited via Multilevel chain (Entity)
skyDrone.bootUp();    // Inherited via Multilevel chain (Robot)
skyDrone.scout();     // Own method
skyDrone.fly();       // Acquired from CanFly Mixin
skyDrone.calculate(); // Acquired from CanCompute Mixin
