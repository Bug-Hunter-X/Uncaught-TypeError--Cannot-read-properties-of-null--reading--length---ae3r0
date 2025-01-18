# Uncaught TypeError: Cannot read properties of null (reading 'length')
This repository demonstrates a common JavaScript error and its solution. The error occurs when trying to access the 'length' property of a null or undefined object.

## Bug
The `foo` function attempts to get the length of the input `x`. If `x` is null, it will throw a `TypeError`. 

## Solution
The solution involves adding a check to see if `x` is null or undefined before accessing its length.