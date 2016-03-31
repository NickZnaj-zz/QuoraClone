class Api::AnswersController < ApplicationController

  def index
    @answers = Answer.all
    render :index
  end

  def create
    @answer = Answer.new(answer_params)

    if @answer.save
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def show
    @answer = Answer.find(params[:id])
  end

  def destroy
    @answer = Answer.find(params[:id])
    @answer.destroy
    render :show
  end

  def edit
    @answer = Answer.find(params[:id])
  end

  def update
    @answer = Answer.find(params[:id])
    if @answer.update_attributes(answer_params)
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
      render :edit
    end
  end


  private

  def answer_params
    params.require(:answer).permit(:body, :user_id, :question_id)
  end

end
