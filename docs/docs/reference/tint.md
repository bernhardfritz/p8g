# tint

## Description

Sets the fill value for displaying images. Images can be tinted to specified colors or made transparent by including an alpha value.

To apply transparency to an image without affecting its color, use white as the tint color and specify an alpha value. For instance, `tint(255, 128)` will make an image 50% transparent.

## Syntax

```c
tint(v1, v2, v3, [alpha])
```

```c
tint(gray, [alpha])
```

```c
tint(values)
```

## Parameters

| Parameter | Description                                                                             |
| --------- | --------------------------------------------------------------------------------------- |
| v1        | red or hue value (depending on the current color mode)                                  |
| v2        | green or saturation value (depending on the current color mode)                         |
| v3        | blue or brightness value (depending on the current color mode)                          |
| alpha     | opacity of the background relative to current color range (default is 0-255) (Optional) |
| gray      | specifies a value between white and black                                               |
| values    | an array containing the components of the color                                         |
