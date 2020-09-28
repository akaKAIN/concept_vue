import {buttons} from "../mixins/ObjectBtnGroups"

Vue.component('patternCard', {
  props: {
    id: String,
    name: String,
    image: String,
    groupId: String
  },
  data(){
    return{
      buttons: buttons
    }
  },
  template: '' +
    '<div class="pattern-card">' +
    '   <img class="pattern-card__image" :src="image" :alt="name">' +
    '   <div class="pattern-card__name text-center">{{ name }}</div>' +
    '   <div class="pattern-card__groups">' +
    '      <template v-for="button in buttons">' +
    '         <button v-if="groupId != button.group" class="group__btn" :class="button.class"' +
    '                 data-new-group="button.group"' +
    '                 data-old-group="groupId">{{ button.text }}' +
    '         </button>' +
    '      </template>' +
    '   </div>' +
    '</div>'
})
