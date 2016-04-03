class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

	helper_method :current_user, :logged_in?

	def current_user
		@current_user ||= User.find_by(session_token: session[:session_token])
	end

	def logged_in?
		!!current_user
	end

	def log_in!(user)
		session[:session_token] = user.reset_session_token!
	end

	def log_out!
		current_user.reset_session_token! if logged_in?
		session[:session_token] = nil
	end

	private

	def ensure_logged_in
		unless logged_in?
			render text: "Log in before continuing", status 401
		end
	end

	def ensure_logged_out
		redirect_to api_questions_url if logged_in?
	end

end
