# ellipseMode

## Description

Modifies the location from which ellipses are drawn by changing the way in which parameters given to [ellipse](ellipse) are interpreted.

The default mode is `CENTER`, in which the first two parameters are interpreted as the shape's center point's x and y coordinates respectively, while the third and fourth parameters are its width and height.

`ellipseMode(RADIUS)` also uses the first two parameters as the shape's center point's x and y coordinates, but uses the third and fourth parameters to specify half of the shapes's width and height.

`ellipseMode(CORNER)` interprets the first two parameters as the upper-left corner of the shape, while the third and fourth parameters are its width and height.

`ellipseMode(CORNERS)` interprets the first two parameters as the location of one corner of the ellipse's bounding box, and the third and fourth parameters as the location of the opposite corner.

## Syntax

```c
ellipseMode(mode)
```

## Parameters

| Parameter | Description                               |
| --------- | ----------------------------------------- |
| mode      | either CENTER, RADIUS, CORNER, or CORNERS |
