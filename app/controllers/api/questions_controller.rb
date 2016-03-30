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

  def show
    @question = Question.find(params[:id])
  end

  def destroy
    @question = Question.find(params[:id])
    @question.destroy
    render :show
  end


  private

  def question_params
    params.require(:question).permit(:title)
  end
end
