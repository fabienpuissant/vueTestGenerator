
//Gerer le cas required et les contraintes qu'on peut imposer à une valeur

export const propsInfos = [
    {
        name: "classContainer",
        type: "string",
        value: "",
        required: true
    },
    {
        name: "value",
        type: "number",
        value: 0,
        minValue: 0,
        maxValue: 7,
        required: true
    }
]


export const dataInfos = [
    {
        name: "list",
        type: "array",
        maxLength: 2,
        minLength: 1,
        value: ["toto", "tutu"]
    },
    {
        name: "title",
        type: "string",
        minLength: 2,
        maxLength: 10,
        value: "title"
    },
    {
        name: "testData",
        type: "number",
        value: 3
    }
]

export const functions = [
    {
        name: "validationGroupName",
        possibleValues: [
            {
                name: "value",
                values: [0,1,2,3,4,5,6,7]
            }
        ],
        functionType: "computed",
        returnValues: ["AddTypeVehicle", "AddTiers", "AddGeneral", "", "InfoCaracConfigBonus", "", "GestionAchat", ""]
    },
    {
        name: "classStepButton",
        possibleValues: [
            {
                name: "value",
                values: [0,1,2,3,4,5,6,7]
            }
        ],
        functionType: "computed",
        returnValues: [
            {"Button-step" : true, "Button-step-0": true},
            {"Button-step" : true, "Button-step-1": true},
            {"Button-step" : true, "Button-step-2": true},
            {"Button-step" : true, "Button-step-3": true},
            {"Button-step" : true, "Button-step-4": true},
            {"Button-step" : true, "Button-step-5": true},
            {"Button-step" : true, "Button-step-6": true},
            {"Button-step" : true, "Button-step-7": true},
        ]
    },

    {
        name: "changeTitle",
        params : [["test", [1,2,3]], ["ok", [4,5,6]]],
        possibleValues:[
            {
                name:"testData",
                values: [10, 20]
            }
        ],
        functionType: "method",
        valuesChanged: [
            {
                name: "title",
                values: ["test", "ok"]
            },
            {
                name: "list",
                values: [[1,2,3], [4,5,6]]
            },
            {
                name: "testData",
                values: [11, 21]
            }
        ],
        returnValues: ["ok", "ok"]
    },

    {
        name: "test",
        returnValues: ["testing"]
    }
    

]