let a = 10,
        b = 3,
        c = 15;

        const d = '5',
        e = 'my name',
        f = 'Ashraf';

        console.group('addition');
        console.log(a + b);
        console.log(a + c);
        console.log(e + '' + f);
        console.log(a + d);
        console.log(e + '' + 'batman');

        console.group('multiplication');
        console.log(a*3);
        console.log(a*b);

        console.group('Incrementing');
        console.log(a + 1);
        console.log(a++);
        console.log(c += a);
        console.groupEnd();