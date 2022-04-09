# push

## Description

The [push](push) function saves the current drawing style settings and transformations, while [pop](pop) restores these settings. Note that these functions are always used together. They allow you to change the style and transformation settings and later return to what you had. When a new state is started with [push](push), it builds on the current style and transform information. The [push](push) and [pop](pop) functions can be embedded to provide more control.

[push](push) stores information related to the current transformation state and style settings controlled by the following functions: [fill](fill), [noFill](noFill), [noStroke](noStroke), [stroke](stroke), [strokeWeight](strokeWeight), [rectMode](rectMode), [ellipseMode](ellipseMode), [colorMode](colorMode), [applyMatrix](applyMatrix), [resetMatrix](resetMatrix), [rotate](rotate), [scale](scale), [translate](translate).

## Syntax

```c
push()
```
