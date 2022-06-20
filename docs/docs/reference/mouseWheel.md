# mouseWheel

## Description

The function [mouseWheel](mouseWheel) is executed every time a vertical mouse wheel event is detected either triggered by an actual mouse wheel or by a touchpad.

The `delta` property returns the amount the mouse wheel has scrolled. The values can be positive or negative depending on the scroll direction (on macOS with "natural" scrolling enabled, the signs are inverted).

## Syntax

```c
mouseWheel(delta)
```

## Parameters

| Parameter | Description                             |
| --------- | --------------------------------------- |
| delta     | the amount the mouse wheel has scrolled |
