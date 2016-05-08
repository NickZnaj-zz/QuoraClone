class OmniauthController < ApplicationController

  def facebook
    user = User.find_or_create_by_auth_hash(auth_hash)
    log_in!(user)
      if request.env["HTTP_HOST"] == "localhost:3000"
        redirect_to "http://localhost:3000/#/main"
      else
        redirect_to "http://shmora.herokuapp.com/#/main"
      end
  end

  def google_oauth2
    user = User.find_or_create_by_auth_hash(auth_hash)
    log_in!(user)
    if request.env["HTTP_HOST"] == "localhost:3000"
      redirect_to "http://localhost:3000/#/main"
    else
      redirect_to "http://shmora.herokuapp.com/#/main"
    end
  end

  private
  def auth_hash
    request.env['omniauth.auth']
  end

end
