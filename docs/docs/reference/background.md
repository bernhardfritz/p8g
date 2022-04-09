# background

## Description

The [background](background) function sets the color used for the background. The default background is transparent. This function is used to clear the display window at the beginning of each frame.

## Syntax

```c
background(v1, v2, v3, [alpha])
```

```c
background(gray, [alpha])
```

## Parameters

| Parameter | Description                                                                             |
| --------- | --------------------------------------------------------------------------------------- |
| v1        | red or hue value (depending on the current color mode)                                  |
| v2        | green or saturation value (depending on the current color mode)                         |
| v3        | blue or brightness value (depending on the current color mode)                          |
| alpha     | opacity of the background relative to current color range (default is 0-255) (Optional) |
| gray      | specifies a value between white and black                                               |
