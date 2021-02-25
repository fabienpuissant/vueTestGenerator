
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
    },
    {
        name: "title",
        type: "string",
        minLength: 2,
        maxLength: 10,
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
    }
]