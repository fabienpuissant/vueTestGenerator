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
		value: ["toto", "titi"],
		type: "array", //optinnal
		minLength: 1, //optionnal
		maxLength: 10, //optional
	},
	{
		name: "dataNumber",
		value: 0
		type: "number", //optionnal
		minValue: 0, //optionnal
		maxValue: 7, //optionnal	
	},
	{
		name: "dataString",
		value: "abc" ,
		type: "string", //optionnal
		minLength: 0, //optionnal
		maxLength: 3, //optionnal
	},
	{
		name: "dataObject",
		type: "object" //optionnal
	}
]
```
### propsInfos

This object follows the same pattern, you can provide another key **required** true or false which is true by default.

### functions

This array will describe the functions of the component. You will be able to easily test different input parameters and expect differents output. Each function described is an obkect containing the keys :
	- **name** : the name of the function to test\
	- **possibleValues** optionnal : array of different values of data or props which will be used inside the function. Each value is an object containing the name of the value (declared in the propsInfos or dataInfos) and the values. The values is an array of value that the data will take. For example, if values has length 8, the function will be called and tested 8 times whith the 8 values provided.\
	- **params** optionnal : Array of params that will be passed to the fonction. For example, if the params key equal [[1, 2, "test'], [2, 3, "ok"]], the function will be called and tested two times with the params (1, 2, "test") and with (2, 3, "ok").\
	- **returnValues** optionnal : values that the function will return in the same order than params\
	- **emits** optionnal : will describe the emit that the function can make. Each emit require  a tag which is the first parameter of $emit. You must provide values which is an array and his length must be equal to the number of time that the function will be tested. If there is nothing in the second parameter of $emit or if the function must not emit because of a condition, you can pass the value **null**. \
**returnValues**, **params**,  **values**, **emits**, property in possibleValues and valuesChanged must have the same length because the function will be tested according to the number of these arrays. But each of these objects can be used independently. You can provide only returnValues, params, possibleValues or valuesChanged. And you also can combine them as you want. Check the example or the specHelpers in the code to make it clearer.

If you want to test a watcher, you have to not pass the name of the function and pass in possibleValues the value that will trigger the watcher. Then you can use the same logic than functions with multiple possible values to test with valuesChanged and emits associated. Check the example below.

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
		name:  "changeTitle",
		params : [["test", [1,2,3], 10], ["ok", [4,5,6], 20]],
		functionType:  "method",
		valuesChanged: [
			{
				name:  "title",
				values: ["test", "ok"]
			},
			{
				name:  "list",
				values: [[1,2,3], [4,5,6]]
			},
			{
				name:  "testData",
				values: [10, 20]
			}
		],
		returnValues: ["ok", "ok"],
		emits: [
			{
				tag:  "function",
				values: ["testEmit", "testEmit"]
			}
		]
	},
	{
		name:  "test",
		functionType: "method"
		returnValues: ["testing"]
	},
	{
        functionType: "watcher",
        possibleValues:[
            {
                name:"testData",
                values: [6, 2, 5]
            }
        ],
        valuesChanged: [
            {
                name: "title",
                values: [
                    "Title 6",
                    "Title 2",
                    "Title 5"
                ]
            }
        ],
        emits: [
            {
                tag: "titleChanged",
                values: [6,2,5]
            } 
        ]
    }
]
```

### Generate the spec file

Once you have created the spec helper file, you can use plop to generate the spec using the command **plop test**.  Enter the name of the component to test (which is the same than the spec file name you have created ). After it ask the relative path of the component. If the component is in the root of the component folder, type nothing. Else, if the component is in a subfolder enter it. Example, the component is in component/tableView/table/componentName.vue. When it ask name of the component to test : componentName. And relative path : tableView/table/. Then the spec.js file is created in **tests/unit**. After that you can start the tests using the command **yarn test:unit**

