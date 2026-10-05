#include<stdio.h>
#include<math.h>
int main()
{
    float a,b,c,d,x,x1,x2;
    printf("Enter a,b and c");
    scanf("%f%f%f",&a,&b,&c);
    d=b*b-4*a*c;
    if (d>0)
    {
        d = sqrt(d);
        x1 = (-b-d)/(2*a);
        x2 = (-b+d)/(2*a);
        printf("x1=%f \t x2=%f",x1,x2);
    }
    else if (d=0)
    {
        x = -b/(2*a);
        printf("%f",x);
    }
    else
    {
        printf("The roots are imaginary");
    }
    return 0;
}