# colorMode

## Description

[colorMode](colorMode) changes the way color data is interpreted. By default, the parameters for [fill](fill), [stroke](stroke) and [background](background) are defined by values between 0 and 255 using the RGB color model. This is equivalent to setting `colorMode(RGB)`. Setting `colorMode(HSB)` lets you use the HSB system instead. You can also use HSL.

## Syntax

```c
colorMode(mode)
```

## Parameters

| Parameter | Description                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------------- |
| mode      | either `RGB`, `HSB` or `HSL`, corresponding to Red/Green/Blue and Hue/Saturation/Brightness (or Lightness) |
