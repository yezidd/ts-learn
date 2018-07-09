enum Choose {
    Wife = 1,
    Mother = 2
}

function question(choose: Choose): void {
    console.log("你老婆和你妈妈同时掉进水里面，你先救谁?");
    console.log("-你的答案是-", choose);
}

question(Choose.Mother);