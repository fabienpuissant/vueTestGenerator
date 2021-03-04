<template>
  <div :class="{ classContainer, classStepButton }">

  </div>
</template>
<script>

export default {
  name: "StepButton",
  props: {
    classContainer: {
      type: String,
      default: "",
    },
    value: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      list: ["toto", "tutu"],
      title: "Title",
      testData: 3
    }
  },
  computed: {
    classStepButton() {
      let classBar = {
        "Button-step": true,
      };
      classBar["Button-step-" + this.value] = true;
      return classBar;
    },
    validationGroupName(){
      let groupName = "";
      switch (this.value) {
        case 0: // type
          groupName = "AddTypeVehicle"
          break;
        case 1: // tiers
          groupName = "AddTiers"
          break;
        case 2: // general
          groupName = "AddGeneral"
          break;
        case 3:// pack
          groupName = ""
          break;
        case 4: // carac config bonus
          groupName = "InfoCaracConfigBonus"
          break;
        case 5: // photos
          groupName = ""
          break;
        case 6: // gestion prix
          groupName = "GestionAchat"
          break;
        case 7: // Récapitulatif
          groupName = ""
          break;
      
        default:
          break;
      }
      return groupName;
    }
  },
  methods: {
    changeTitle(newTitle, newList) {
      this.title = newTitle
      this.list = newList
      this.testData = this.testData + 1
      this.$emit("function", "testEmit")
      return "ok"
    },
    test(){
      return "testing"
    },
    testEmitting(){
      this.$emit("testing", "ok")
    }
  },
};
</script>
