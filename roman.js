function convertToRoman(num) {
  const roman = [
    [
      { r: "I", n: 1 },
      { r: "II", n: 2 },
      { r: "III", n: 3 },
      { r: "IV", n: 4 },
      { r: "V", n: 5 },
      { r: "VI", n: 6 },
      { r: "VII", n: 7 },
      { r: "VIII", n: 8 },
      { r: "IX", n: 9 }
    ],
    [
      { r: "X", n: 10 },
      { r: "XX", n: 20 },
      { r: "XXX", n: 30 },
      { r: "XL", n: 40 },
      { r: "L", n: 50 },
      { r: "LX", n: 60 },
      { r: "LXX", n: 70 },
      { r: "LXXX", n: 80 },
      { r: "XC", n: 90 }
    ],
    [
      { r: "C", n: 100 },
      { r: "CC", n: 200 },
      { r: "CCC", n: 300 },
      { r: "CD", n: 400 },
      { r: "D", n: 500 },
      { r: "DC", n: 600 },
      { r: "DCC", n: 700 },
      { r: "DCCC", n: 800 },
      { r: "CM", n: 900 }
    ],
    [
      { r: "M", n: 1000 },
      { r: "MM", n: 2000 },
      { r: "MMM", n: 3000 }
    ]
  ];

  const mod1 = num % 10;
  const mod2 = num - mod1;
  const mod3 = num - (mod2 % 1000) - mod1;
  let mod5 = (num - (mod2 % 100) - mod2 - mod1) * -1;
  const mod4 = mod2 - mod3;
  const mod6 = mod4 - mod5;

  console.log(mod1);
  console.log(mod3);
  console.log(mod6);
  console.log(mod5);

  if (mod5 === -0) mod5 = 0;

  const roman1 = roman[0].find(n => mod1 === n.n) || "";
  const roman2 = roman[1].find(n => mod5 === n.n) || "";
  const roman3 = roman[2].find(n => mod6 === n.n) || "";
  const roman4 = roman[3].find(n => mod3 === n.n) || "";

  num = `${roman4.r || ""}${roman3.r || ""}${roman2.r || ""}${roman1.r || ""}`;

  return num;
}

console.log(convertToRoman(3000));
