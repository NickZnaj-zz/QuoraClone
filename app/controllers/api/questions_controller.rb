class Api::QuestionsController < ApplicationController
  def index
    @questions = Question.all
    render :index
  end

  def create
    @question = Question.new(question_params)

    if @question.save
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

end
