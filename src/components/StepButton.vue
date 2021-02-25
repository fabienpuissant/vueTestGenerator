<template>
  <div :class="{ classContainer, classStepButton }">
    <!-- <SilicoButton
      v-if="value > 0"
      text="Etape précédente"
      class="ButtonAddVehicle-Back"     
      @onClick="Stepping($event,'Back')"
    />
    <SilicoButton
      v-if="value < 7"
      text="Etape suivante"
      class="ButtonAddVehicle-Forward"
      :validationGroup="validationGroupName"      
      @onClick="Stepping($event,'Next')"
    />
    <SilicoButton
      v-if="value === 7"
      text="Enregistrer"
      class="ButtonAddVehicle-Validation"
      :validationGroup="validationGroupName"      
      @onClick="Stepping($event,'Validation')"
    /> -->
  </div>
</template>
<script>
// import SilicoButton from "@/components/dms/SilicoComponents/Core/SilicoButton.vue";

export default {
  name: "StepButton",
  components: {
    // SilicoButton,
  },
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
      list: ["toto", "tutu"]
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
    Stepping(e, value) {
      let res = "";
      switch (value) {
        case "Next":
            if(typeof e.validationGroup === "undefined"){
              this.$emit("input", this.value + 1);
            }else {
              res = e.validationGroup.validate().isValid;
            }
            if (res){
              /** Si nous sommes à l'étape des Tiers, avant de passer à la suite, nous devons verifier que les tiers saisie par l'utilisateur ne sont pas déjà existant. */
              this.$emit("input", this.value + 1);              
            }
          break;        
        case "Back":
          this.$emit("input", this.value - 1);
          break;
        case "Validation":
            res = e.validationGroup.validate().isValid;
            if (res){
              this.$emit("Validation");
            }
          break;
        default:
          break;
      }
    },
  },
};
</script>
<style lang="scss" >
@import "@/assets/scss/variables.scss";

.classStepButton {
  display: flex;
  flex-wrap: wrap;
}

.classContainer {
  text-align: right;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
}

.ButtonAddVehicle-Validation{
      width: 600px;


        .dx-button-text{
        font-family: "robotobold" !important;
        font-size: 26px !important;
        }

       &:hover{
        background:#505d6a;

    
      }

      .dx-button-content{
            display: flex;
    justify-content: center;

          &:before{
            content:'';
            width: 35px;
            height: 35px;
            margin-right: 13px;
            display:inline-block;
            background-color:#75D887;
            -webkit-mask:url('~@/assets/vectors/deposit/icon-save3.svg');
            mask:url('~@/assets/vectors/deposit/icon-save3.svg');
            mask-repeat:no-repeat;
          }
      }
}

.ButtonAddVehicle-Forward {
  width: 600px;
  margin-left:auto;
}



.ButtonAddVehicle-Forward.dx-state-hover {
  border: 0 !important;
}

.ButtonAddVehicle-Back.dx-state-hover {
  color: #929aa2 !important;
  border-color: #929aa2 !important;
  background: transparent !important;

  .dx-button-content {
    left: -5px;
    transition: 0.2s ease;
  }
}

.ButtonAddVehicle-Back {
  background: transparent !important;
  border: 1px solid $greydark !important;
  color: $greydark;
  width: 280px;
}

.ButtonAddVehicle {
  color: white;
  &-Back {
    background-color: red;
  }
  &-Forward {
    background-color: blue;
  }
  &-Validation {
    background-color: purple;
  }
}

.Button-step {
  color: white;
  &-0 {
    background-color: red;
  }
  &-1 {
    background-color: green;
  }
  &-2 {
    background-color: aqua;
  }
  &-3 {
    background-color: blueviolet;
  }
  &-4 {
    background-color: orangered;
  }
  &-5 {
    background-color: pink;
  }
  &-6 {
    background-color: yellowgreen;
  }
  &-7 {
    background-color: black;
  }
}

@media screen and (max-width: 1200px) {

  .classContainer {
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .ButtonAddVehicle-Forward {
      width: 100%;
    }
    .ButtonAddVehicle-Back {
      width: 100%;
      padding: 6px 50px;
      margin-bottom: 13px;
    }
  }

  .ButtonAddVehicle-Validation{
      width: 100%;

   
  }

  

}
</style>