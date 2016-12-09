var sum = 0;
for (var i = 1; i <= 100; i++) {
    sum += i;
    if (i == 5) {
        break;
    }
    console.log("Sum = " + sum);
}
console.log("END :" + sum);

document.getElementById('message').innerHTML = sum;
