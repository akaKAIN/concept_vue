Vue.component('patternCard', {
  props: {
    id: String,
    name: String,
    image: String,
    groupId: String
  },
  data(){
    return{
      buttons: [
        {group: 0, text: 'Хочу сшить', class: 'active'},
        {group: 1, text: 'Сшито', class: 'passive'},
        {group: 2, text: 'Архив', class: 'archive'},
      ]
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
