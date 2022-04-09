# rotate

## Description

Rotates a shape by the amount specified by the angle parameter. Angles have to be entered in radians.

Objects are always rotated around their relative position to the origin and positive numbers rotate objects in a clockwise direction. Transformations apply to everything that happens after and subsequent calls to the function accumulates the effect. For example, rotating by π / 2 and then rotating by π / 2 again is the same as rotating by π. All transformations are reset when `draw` begins again.

Technically, [rotate](rotate) multiplies the current transformation matrix by a rotation matrix. This function can be further controlled by the [push](push) and [pop](pop).

## Syntax

```c
rotate(angle)
```

## Parameters

| Parameter | Description                                 |
| --------- | ------------------------------------------- |
| angle     | the angle of rotation, specified in radians |
