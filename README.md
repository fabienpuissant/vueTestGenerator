# Plop vue test generator

Here is the documentation to generate tests units through plop test generator. 


# When and how to use it

This module will permit generate tests units for an existing Vue file are while you are programming it, following TDD (test driven development) method.

## Functionment

To generate the test, you will have to describe the component you want to test in an extern js file which will be called the spec helper file. For instance, if you want to test the component StepButton.vue. You will have to create the StepButtonSpecHelper.js which will describe your component and will be used to generate the tests 

## The Spec File

In this files, three arrays have to be exported. One describing the data named **dataInfos**, another describing the props **propsInfos** and the last describing the functions (computed, methods) of the component named **functions**

### dataInfos

For the data the array will contains the data that the component have.
Example : 
```
export const dataInfos = [
	{
		name: "dataArray",
		type: "array",
		value: ["toto", "titi"],
		minLength: 1, //optionnal
		maxLength: 10, //optional
	},
	{
		name: "dataNumber",
		type: "number",
		minValue: 0, //optionnal
		maxValue: 7, //optionnal
		value: 0
	},
	{
		name: "dataString",
		type: "string",
		value: "abc" ,
		minLength: 0, //optionnal
		maxLength: 3, //optionnal
	},
	{
		name: "dataObject",
		
		

```
