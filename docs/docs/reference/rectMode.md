# rectMode

## Description

Modifies the location from which rectangles are drawn by changing the way in which parameters given to [rect](rect) are interpreted.

The default mode is `CORNER`, which interprets the first two parameters as the upper-left corner of the shape, while the third and fourth parameters are its width and height.

`rectMode(CORNERS)` interprets the first two parameters as the location of one of the corners, and the third and fourth parameters as the location of the diagonally opposite corner. Note, the rectangle is drawn between the coordinates, so it is not necessary that the first corner be the upper left corner.

`rectMode(CENTER)` interprets the first two parameters as the shape's center point, while the third and fourth parameters are its width and height.

`rectMode(RADIUS)` also uses the first two parameters as the shape's center point, but uses the third and fourth parameters to specify half of the shape's width and height respectively.

## Syntax

```c
rectMode(mode)
```

## Parameters

| Parameter | Description                               |
| --------- | ----------------------------------------- |
| mode      | either CORNER, CORNERS, CENTER, or RADIUS |
