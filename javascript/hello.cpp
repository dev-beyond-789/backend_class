// #include<stdio.h>
// #include<math.h>
// int main()
// {
//     float a,b,c,d,x,x1,x2;
//     printf("Enter a,b and c");
//     scanf("%f%f%f",&a,&b,&c);
//     d=b*b-4*a*c;
//     if (d>0)
//     {
//         d = sqrt(d);
//         x1 = (-b-d)/(2*a);
//         x2 = (-b+d)/(2*a);
//         printf("x1=%f \t x2=%f",x1,x2);
//     }
//     else if (d=0)
//     {
//         x = -b/(2*a);
//         printf("%f",x);
//     }
//     else
//     {
//         printf("The roots are imaginary");
//     }
//     return 0;
// }

// swap numbers 

// #include <stdio.h>

// int main() {
//     int a, b;

//     printf("Enter first number: ");
//     scanf("%d", &a);

//     printf("Enter second number: ");
//     scanf("%d", &b);

//     // Swap without using another variable
//     a = a + b;
//     b = a - b;
//     a = a - b;

//     printf("After swapping:\n");
//     printf("First number = %d\n", a);
//     printf("Second number = %d\n", b);

//     return 0;
// }


#include <stdio.h>

int main() {
    int n, i, prime = 1;

    printf("Enter a number: ");
    scanf("%d", &n);

    if (n <= 1) {
        printf("Neither prime nor composite");
    }
    else {
        for (i = 2; i < n; i++) {
            if (n % i == 0) {
                prime = 0;
                break;
            }
        }

        if (prime == 1) {
            printf("Prime number");
        }
        else {
            printf("Composite number");
        }
    }

    return 0;
}