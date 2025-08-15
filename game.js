// 玩家资源
let gold = 0;
let materials = 50;
let energy = 50;

// 建筑
let buildings = { "小屋": { level: 1, income: 1 } };

// 宠物
let pets = [];

// 军队
let soldiers = [];

// 点击金币
document.getElementById("gold-btn").addEventListener("click", () => {
    gold += 1 + buildings["小屋"].level + pets.length + soldiers.length;
    updateDisplay();
});

// 升级建筑
function upgradeBuilding(name) {
    let cost = buildings[name].level * 10;
    if (gold >= cost) {
        gold -= cost;
        buildings[name].level += 1;
        buildings[name].income += 1;
        updateDisplay();
        alert(name + "升级成功！");
    } else {
        alert("金币不足！");
    }
}

// 招募宠物
function recruitPet(name) {
    pets.push({ name: name, level: 1, speed: 1 });
    updateDisplay();
    alert("招募宠物 " + name + " 成功！");
}

// 招募士兵
function recruitSoldier(name) {
    soldiers.push({ name: name, level: 1, income: 1 });
    updateDisplay();
    alert("招募士兵 " + name + " 成功！");
}

// 更新显示
function updateDisplay() {
    document.getElementById("gold").innerText = gold;
    document.getElementById("materials").innerText = materials;
    document.getElementById("energy").innerText = energy;
    document.getElementById("houseLevel").innerText = buildings["小屋"].level;
    document.getElementById("petCount").innerText = pets.length;
    document.getElementById("soldierCount").innerText = soldiers.length;
}

// 挂机循环，每秒增加金币
setInterval(() => {
    for (let b in buildings) { gold += buildings[b].income; }
    pets.forEach(p => { gold += p.speed; });
    soldiers.forEach(s => { gold += s.income; });
    updateDisplay();
}, 1000);