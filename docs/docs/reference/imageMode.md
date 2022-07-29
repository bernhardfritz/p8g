# imageMode

## Description

Modifies the location from which images are drawn by changing the way in which parameters given to [image](image) are interpreted.

The default mode is `CORNER`, which interprets the second and third parameters as the upper-left corner of the image, while the fourth and fifth parameters are its width and height.

`imageMode(CORNERS)` interprets the second and third parameters as the location of one of the corners, and the fourth and fifth parameters as the location of the diagonally opposite corner. Note, the image is drawn between the coordinates, so it is not necessary that the first corner be the upper left corner.

`imageMode(CENTER)` interprets the second and third parameters as the images's center point, while the fourth and fifth parameters are its width and height.

`imageMode(RADIUS)` also uses the second and third parameters as the images's center point, but uses the fourth and fifth parameters to specify half of the images's width and height respectively.

## Syntax

```c
imageMode(mode)
```

## Parameters

| Parameter | Description                               |
| --------- | ----------------------------------------- |
| mode      | either CORNER, CORNERS, CENTER, or RADIUS |
