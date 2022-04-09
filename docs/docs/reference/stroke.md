# stroke

## Description

Sets the color used to draw lines and borders around shapes. This color is either specified in terms of the RGB or HSB color depending on the current [colorMode](colorMode). The default color space is RGB, with each value in the range from 0 to 255. The alpha range by default is also 0 to 255.

## Syntax

```c
stroke(v1, v2, v3, [alpha])
```

```c
stroke(gray, [alpha])
```

## Parameters

| Parameter | Description                                                                             |
| --------- | --------------------------------------------------------------------------------------- |
| v1        | red or hue value (depending on the current color mode)                                  |
| v2        | green or saturation value (depending on the current color mode)                         |
| v3        | blue or brightness value (depending on the current color mode)                          |
| alpha     | opacity of the background relative to current color range (default is 0-255) (Optional) |
| gray      | specifies a value between white and black                                               |
