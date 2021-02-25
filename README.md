# Plop vue test generator

Here is the documentation to generate tests units through plop test generator. 


# When and how to use it

This module will permit generate tests units for an existing Vue file are while you are programming it, following TDD (test driven development) method.

## Functionment

To generate the test, you will have to describe the component you want to test in an extern js file which will be called the spec helper file. For instance, if you want to test the component StepButton.vue. You will have to create the StepButtonSpecHelper.js which will describe your component and will be used to generate the tests 

## The Spec File

In this files, three arrays have to be exported. One describing the data named **dataInfos**, another describing the props **propsInfos** and the last describing the functions (computed, methods) of the component named **functions**. All the spec helpers have to be in the folder **tests/specHelpers**

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
		type: "object"
	}
```
### propsInfos

This object follows the same pattern, you can provide another key **required** true or false which is true by default.

### functions

This array will describe the functions of the component. You will be able to easily test different input parameters and expect differents output

```
export  const  functions = [
	{
		name:  "validationGroupName",
		possibleValues: [
			{
				name:  "value",
				values: [0,1,2,3,4,5,6,7]
			}
		],
		functionType:  "computed",
		returnValues: ["AddTypeVehicle", "AddTiers", "AddGeneral", "",
					   "InfoCaracConfigBonus", "", "GestionAchat", ""]
	},
	{
		name: "classStepButton",
		possibleValues: [
			{
				name:  "value",
				values: [0,1,2,3,4,5,6,7]
			}
		],
		functionType:  "computed",
		returnValues: [
			{"Button-step" :  true, "Button-step-0":  true},
			{"Button-step" :  true, "Button-step-1":  true},
			{"Button-step" :  true, "Button-step-2":  true},
			{"Button-step" :  true, "Button-step-3":  true},
			{"Button-step" :  true, "Button-step-4":  true},
			{"Button-step" :  true, "Button-step-5":  true},
			{"Button-step" :  true, "Button-step-6":  true},
			{"Button-step" :  true, "Button-step-7":  true},
		]
	}
]
```

### Generate the spec file

Once you have created the spec helper file, you can use plop to generate the spec using the command **plop test**.  Enter the name of the component to test (which is the same than the spec file name you have created ) to generate the spec. Then the spec.js file is created in **tests/unit**. After that you can start the tests using the command **yarn test:unit**

