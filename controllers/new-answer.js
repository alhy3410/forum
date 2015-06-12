Forum.NewAnswerController = Ember.Controller.extend({
  needs: ['question'],
  actions: {
    save: function() {
      var newAnswer = this.store.createRecord('answer', {
        author: this.get('author'),
        answer: this.get('answer')
      });
      newAnswer.save();

      var question = this.get('controllers.question.model');
      question.get('answers').pushObject(newAnswer);
      question.save();

      this.transitionToRoute('question', question.id);
    }
  }
});
