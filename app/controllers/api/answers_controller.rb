class Api::AnswersController < ApplicationController

  def index
    if params.has_key?(:question_id)
      @answers = Answer.where(question_id: params[:question_id]).includes(:user, :votes, :question)
    else
      @answers = Answer.all
    end
    render :index
  end

  def create
    @answer = Answer.new(answer_params)
		@answer.user_id = current_user.id
    if @answer.save
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def show
    @answer = Answer.includes(:user, :votes, :question).find(params[:id])
		render :show
  end

  def destroy
    @answer = Answer.find(params[:id])
    @answer.destroy
    render :index
  end

  def edit
    @answer = Answer.find(params[:id])
  end

  def update
    @answer = Answer.find(params[:id])
    if @answer.update(answer_params)
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end


  private

  def answer_params
    params.require(:answer).permit(:body, :question_id, :image)
  end

end
