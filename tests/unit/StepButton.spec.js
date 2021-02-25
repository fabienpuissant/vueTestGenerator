import { shallowMount } from '@vue/test-utils'
import Component from '@/components/StepButton.vue'
import {dataInfos, propsInfos, functions} from '../specHelpers/StepButtonSpecHelper.js'

const formatDataForFactory = (dataInfos, propsInfos) => {
  const data = {}
  dataInfos.forEach(element => {
    data[element.name] = element.value
  })

  const props = {}
  propsInfos.forEach(element => {
    props[element.name] = element.value
  })
  return [data, props]
}

const [data, props] = formatDataForFactory(dataInfos, propsInfos)

const factory = (data, props) => {
  return shallowMount(Component, {
      data: data,
      propsData: props
  });
};

const wrapper = factory(data, props)

const validateData = (data) => {

      if(typeof data.required !== "undefined"){
        if(data.required === true){
          //Variable defined
          expect(wrapper.vm[data.name]).toBeDefined()

          //Type validation
          if(data.type === "array"){
            expect(Array.isArray(wrapper.vm[data.name])).toBeTruthy()
          } else {
            expect(typeof wrapper.vm[data.name]).toEqual(data.type)
          }

          //Value validation
          if(typeof data.maxValue !== "undefined"){
            expect(wrapper.vm[data.name]).toBeLessThanOrEqual(data.maxValue)
          }
          if(typeof data.minValue !== "undefined"){
            expect(wrapper.vm[data.name]).toBeGreaterThanOrEqual(data.minValue)
          }

          //Length validation
          if(typeof data.maxLength !== "undefined"){
            expect(wrapper.vm[data.name].length).toBeLessThanOrEqual(data.maxLength)
          }
          if(typeof data.minLength !== "undefined"){
            expect(wrapper.vm[data.name].length).toBeGreaterThanOrEqual(data.minLength)
          }
        }
      }
      

}


describe("StepButton" , () => {
  it("Should exists", () => {
      expect(wrapper.exists()).toBeTruthy()
  })

  //Data validation
  dataInfos.forEach(data => {
    it("Should have a valid " + data.name + " data", () => {
      validateData(data)
    })
  })

  //Props validation
  propsInfos.forEach(prop => {
    it("Should have a valid " + prop.name + " prop", () => {
      validateData(prop)
    })
  })

  //Function Validations
  functions.forEach(fonction => {

    it("Should have a " + fonction.functionType + " " + fonction.name + " function valid", () => {
      for(let resultIndex = 0; resultIndex < fonction.returnValues.length; resultIndex++){
          //For each result, we need to change the wrapper according to the parameters and the values given
          let newData = [...dataInfos];
          let newProps = [...propsInfos]
          fonction.possibleValues.forEach(newValue => {
              [newData, newProps] = replaceDataForFactory(newValue, resultIndex)
          })
          let newWrapper = factory(newData, newProps);
          expect(newWrapper.vm[fonction.name]).toEqual(fonction.returnValues[resultIndex])
          }
        })
      })
})



const replaceDataForFactory = (newValue, resultIndex) => {
  let newData = [...dataInfos]
  let dataFound = newData.find(el => {return el.name === newValue.name})
  if(typeof dataFound !== "undefined"){
    dataFound.value = newValue.values[resultIndex]
  }

  let newProps = [...propsInfos]
  dataFound = newProps.find(el => {return el.name === newValue.name})
  if(typeof dataFound !== "undefined"){
    dataFound.value = newValue.values[resultIndex]
  }
  [newData, newProps] = formatDataForFactory(newData, newProps)
  return [newData, newProps]
}