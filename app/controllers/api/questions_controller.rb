class Api::QuestionsController < ApplicationController
  def index
    @questions = Question.all
    render :index
  end
end
