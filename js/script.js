function task1(e) {
    e.preventDefault();
    let old = +document.getElementById("myName").value;
    switch (true) {
        case old == 0:
            document.getElementById("oldResault").value = 'Вы еще не родились';
            break;
        case old <= 2:
            document.getElementById("oldResault").value = 'Вы ребенок';
            break;
        case old >= 3 && old <= 11:
            document.getElementById("oldResault").value = 'Вы тинейджер';
            break;
        case old >= 12 && old <= 18:
            document.getElementById("oldResault").value = 'Вы подросток';
            break;
        case old >= 19 && old <= 59:
            document.getElementById("oldResault").value = 'Вы взрослый';
            break;
        case old <= 99 && old >= 60:
            document.getElementById("oldResault").value = 'Вы пенсионер';
            break;
        case old >= 100:
            document.getElementById("oldResault").value = 'Вы счастливчик';
            break;
    }
}

function task2(e) {
    e.preventDefault();
    let number = +document.getElementById("number").value;
    switch (number) {
        case 1:
            document.getElementById("text").value = '!';
            break;
        case 2:
            document.getElementById("text").value = '@';
            break;
        case 3:
            document.getElementById("text").value = '#';
            break;
        case 4:
            document.getElementById("text").value = '$';
            break;
        case 5:
            document.getElementById("text").value = '%';
            break;
        case 6:
            document.getElementById("text").value = '^';
            break;
        case 7:
            document.getElementById("text").value = '&';
            break;
        case 8:
            document.getElementById("text").value = '*';
            break;
        case 9:
            document.getElementById("text").value = '(';
            break;
        case 0:
            document.getElementById("text").value = ')';
            break;
        default:
            document.getElementById("text").value = 'wrong number';
    }

}

function task3(e) {
    e.preventDefault();
    let xxx = +document.getElementById("xxx").value;
    const a = xxx % 100;
    const c = a % 10;
    const b = (xxx - a) / 100;
    const d = (a - c) / 10;
    if (c == b || b == d || c == d) {
        document.getElementById("xxxresault").value = 'числа одинаковые';
    }
    else {
        document.getElementById("xxxresault").value = 'числа разные';
    }
}

function task4(e) {
    e.preventDefault();
    let year = document.getElementById("year").value;
    if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
        document.getElementById("yearResult").value = 'Год Высокосный';
    }
    else {
        document.getElementById("yearResult").value = 'Год Не высокосный';
    }
}

function task5(e) {
    e.preventDefault();
    let xxxxx = document.getElementById("xxxxx").value;
    const a = (xxxxx - (xxxxx % 10000)) / 10000;
    const b = ((xxxxx - (xxxxx % 1000)) / 1000) % 10;
    const c = ((xxxxx % 100) - (xxxxx % 10)) / 10;
    const d = xxxxx % 10;
    if (a == d && b == c) {
        document.getElementById("xxxxxResault").value = 'Палиндром';
    }
    else {
        document.getElementById("xxxxxResault").value = 'НЕ палиндром';
    }
}

function task6(e) {
    e.preventDefault();
    let summa = +document.getElementById("summa").value;
    let valet = document.getElementById("valet").value;
    const EUR = 0.92;
    const UAN = 7.07;
    const AZN = 1.7;
    if (valet == 'EUR') {
        document.getElementById("kursResault").value = `${summa * EUR} EUR`;
    }
    else if (valet == 'UAN') {
        document.getElementById("kursResault").value = `${summa * UAN} UAN`;
    }
    else if (valet == 'AZN') {
        document.getElementById("kursResault").value = `${summa * AZN} AZN`;
    }
    else {
        document.getElementById("kursResault").value = 'Неверная валюта';
    }

}

function task7(e) {
    e.preventDefault();
    let sumBuy = document.getElementById("sumBuy").value;
    const dis3 = sumBuy - (sumBuy * 0.03);
    const dis5 = sumBuy - (sumBuy * 0.05);
    const dis7 = sumBuy - (sumBuy * 0.07);
    if (sumBuy >= 200 && sumBuy <= 299) {
        document.getElementById("sumDiscount").value = `${dis3} скидка 3%`;
    }
    else if (sumBuy >= 300 && sumBuy <= 499) {
        document.getElementById("sumDiscount").value = `${dis5} скидка 5%`;
    }
    else if (sumBuy >= 500) {
        document.getElementById("sumDiscount").value = `${dis7} скидка 7%`;
    }
    else {
        document.getElementById("sumDiscount").value = `Даем скидку от 200`;
    }
}

function task8(e) {
    e.preventDefault();
    let circleLenght = document.getElementById("circleLenght").value;
    let perimetr = document.getElementById("perimetr").value;
    const p = 3.14;
    let circleD = circleLenght / p;
    let squareSide = perimetr / 4;
    if (circleD <= squareSide) {
        document.getElementById("sizeResault").value = 'Круг влезет';
    }
    else {
        document.getElementById("sizeResault").value = 'Круг не влезет';
    }
}

function task9(e) {
    e.preventDefault();
    let q1 = document.getElementById("q1").value;
    let q2 = document.getElementById("q2").value;
    let q3 = document.getElementById("q3").value;
    let a1;
    let a2;
    let a3;
    if (q1 == 2) {
        a1 = 2;
    }
    else {
        a1 = 0;
    }
    if (q2 == 3) {
        a2 = 2;
    }
    else {
        a2 = 0;
    }
    if (q3 == 1) {
        a3 = 2;
    }
    else {
        a3 = 0;
    }
    document.getElementById("qResault").value = (a1 + a2 + a3);
}

function task10(e) {
    e.preventDefault();
    let y = +document.getElementById("y").value;
    let m = +document.getElementById("m").value;
    let d = +document.getElementById("d").value;
    if ((y % 400 == 0 || y % 4 == 0 && y % 100 != 0) && m == 2 && d == 29) {
        d = 1;
        m++;
    }
    else if (!(y % 400 == 0 || y % 4 == 0 && y % 100 != 0) && m == 2 && d == 28) {
        d = 1;
        m++;
    }
    else if (d == 30 && (m == 4 || m == 6 || m == 9 || m == 11)) {
        d = 1;
        m++;
    }
    else if (d == 31 && (m !== 12)) {
        d = 1;
        m++;
    }
    else if (m == 12 && d == 31) {
        y++;
        m = 1;
        d = 1;
    }
    else {
        d++;
    }

    document.getElementById("resultDate").value = `${d}/${m}/${y}`;
}

