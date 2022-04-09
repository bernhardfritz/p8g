# scale

## Description

Increases or decreases the size of a shape by expanding or contracting vertices. Objects always scale from their relative origin to the coordinate system. Scale values are specified as decimal percentages. For example, scaling by 2 increases the dimension of a shape by 200%.

Transformations apply to everything that happens after and subsequent calls to the function multiply the effect. For example, scaling by 2 and then scaling by 1.5 is the same as scaling by 3. All transformations are reset when `draw` begins again.

Technically, [scale](scale) multiplies the current transformation matrix by a scaling matrix. This function can be further controlled by the [push](push) and [pop](pop).

## Syntax

```c
scale(s, [y])
```

## Parameters

| Parameter | Description                                                                                                  |
| --------- | ------------------------------------------------------------------------------------------------------------ |
| s         | percent to scale the object, or percentage to scale the object in the x-axis if multiple arguments are given |
| y         | percent to scale the object in the y-axis (Optional)                                                         |
