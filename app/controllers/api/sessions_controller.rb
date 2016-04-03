class Api::SessionsController < ApplicationController

	def show
		if logged_in?
			render json: current_user
		else
			render json: { message: "Not Logged in" }, status: 401
		end
	end

	def create
		user = User.find_by_credentials(
			params[:username],
			params[:password]
		)

		if user && user.valid_password?(params[:password])
			log_in!(user)
			render json: author
		else
			render json: { message: "Invalid Login Credentials" }, status: 401
		end
	end

	def destroy
		log_out!
		render json: {}
	end
end
