Vue.component('patternCard', {
  props: {
    name: String,
    image: String,
    groupsInfo: Object,
    groupId: Number
  },
  data(){
    return{

    }
  },
  template: '' +
    '<div class="pattern-card">' +
    '   <img class="pattern-card__image" :src="image" :alt="name">' +
    '   <div class="pattern-card__name">{{ name }}</div>' +
    '   <div class="pattern-card__groups">' +
    '      <div class="active_group" data-groupId="0" data-group=""></div>' +
    '      <div class="passive_group"></div>' +
    '      <div class="archive_group"></div>' +
    '   </div>' +
    '</div>'
})
