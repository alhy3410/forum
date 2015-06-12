Forum.QuestionController = Ember.ObjectController.extend({
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.get('model').save();
      this.set('isEditing', false);
    },
    delete: function() {
      this.get('model').destroyRecord();
      this.transitionToRoute('questions');
    }
  }
});
