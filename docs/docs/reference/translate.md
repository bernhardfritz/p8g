# translate

## Description

Specifies an amount to displace objects within the display window. The `x` parameter specifies left/right translation, the `y` parameter specifies up/down translation.

Transformations are cumulative and apply to everything that happens after and subsequent calls to the function accumulates the effect. For example, translating x by 50 and then translating x by 20 is the same as translating x by 70. All transformations are reset when `draw` begins again.

Technically, [translate](translate) multiplies the current transformation matrix by a translation matrix. This function can be further controlled by the [push](push) and [pop](pop).

## Syntax

```c
translate(x, y)
```

## Parameters

| Parameter | Description            |
| --------- | ---------------------- |
| x         | left/right translation |
| y         | up/down translation    |
