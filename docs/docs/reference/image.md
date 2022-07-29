# image

## Description

Draws an image.

This function can be used with different numbers of parameters. The simplest use requires only three parameters: `img`, `x`, and `y` — where (x, y) is the position of the image. Two more parameters can optionally be added to specify the width and height of the image.

This function can also be used with all eight parameters. To differentiate between all these parameters, p8g uses the language of "destination rectangle" (which corresponds to `dx`, `dy`, etc.) and "source image" (which corresponds to `sx`, `sy`, etc.) below. Specifying the "source image" dimensions can be useful when you want to display a subsection of the source image instead of the whole thing. Here's a diagram to explain further:

![image](/img/drawImage.png)

## Syntax

```c
image(img, x, y, [w], [h])
```

```c
image(img, dx, dy, dw, dh, sx, sy, [sw], [sh])
```

## Parameters

| Parameter | Description                                                                                        |
| --------- | -------------------------------------------------------------------------------------------------- |
| img       | [Image](image_): the image to display                                                                               |
| x         | the x-coordinate of the top-left corner of the image                                               |
| y         | the y-coordinate of the top-left corner of the image                                               |
| w         | the width to draw the image (Optional)                                                             |
| h         | the height to draw the image (Optional)                                                            |
| dx        | the x-coordinate of the destination rectangle in which to draw the source image                    |
| dy        | the y-coordinate of the destination rectangle in which to draw the source image                    |
| dw        | the width of the destination rectangle                                                             |
| dh        | the height of the destination rectangle                                                            |
| sx        | the x-coordinate of the subsection of the source image to draw into the destination rectangle      |
| sy        | the y-coordinate of the subsection of the source image to draw into the destination rectangle      |
| sw        | the width of the subsection of the source image to draw into the destination rectangle (Optional)  |
| sh        | the height of the subsection of the source image to draw into the destination rectangle (Optional) |
