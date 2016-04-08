class Api::UsersController < ApplicationController
	def new
	  @user = User.new
	end

	def show
		@user = User.includes(:topics, :questions, :answers, :votes).find(params[:id])
		render :show
	end


	###################### update flash messages ######################
  def create
    @user = User.new(user_params)

    if @user.save
      flash[:success] = "Created account successfuly! Welcome #{@user.username}!"
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      flash[:success] = "Updated successfully"
      render :show
    else
      flash.now[:errors] = @user.errors.full_messsages
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :password, topic_ids: [])
  end
end
