import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import IconExternalLink from '@theme/IconExternalLink';

# applyMatrix

## Description

Multiplies the current matrix by the one specified through the parameters. This is a powerful operation that can perform the equivalent of translate, scale, shear and rotate all at once. You can learn more about transformation matrices on [Wikipedia<IconExternalLink />](https://en.wikipedia.org/wiki/Transformation_matrix).

The parameters correspond to a transformation matrix in the form of:

<ThemedImage
  alt="Docusaurus themed image"
  sources={{
    light: useBaseUrl('/img/apply-matrix-light.svg'),
    dark: useBaseUrl('/img/apply-matrix-dark.svg'),
  }}
/>

## Syntax

```c
applyMatrix(a, b, c, d, e, f)
```

## Parameters

| Parameter | Description                                          |
| --------- | ---------------------------------------------------- |
| a         | numbers which define the 2×3 matrix to be multiplied |
| b         | numbers which define the 2×3 matrix to be multiplied |
| c         | numbers which define the 2×3 matrix to be multiplied |
| d         | numbers which define the 2×3 matrix to be multiplied |
| e         | numbers which define the 2×3 matrix to be multiplied |
| f         | numbers which define the 2×3 matrix to be multiplied |
