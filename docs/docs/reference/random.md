# random

## Description

Return a random floating-point number.

Takes either 0, 1 or 2 arguments.

If no argument is given, returns a random number from 0 up to (but not including) 1.

If one argument is given, returns a random number from 0 up to (but not including) the argument.

If two arguments are given, returns a random number from the first argument up to (but not including) the second argument.

## Syntax

```c
random([min], [max])
```

## Parameters

| Parameter | Description                            |
| --------- | -------------------------------------- |
| min       | the lower bound (inclusive) (Optional) |
| max       | the upper bound (exclusive) (Optional) |

## Returns

the random number