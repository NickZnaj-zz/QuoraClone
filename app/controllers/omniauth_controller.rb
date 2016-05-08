class OmniauthController < ApplicationController

  def facebook
    user = User.find_or_create_by_auth_hash(auth_hash)
    log_in!(user)
    byebug
    redirect_to "http://localhost:3000/#/main"
  end

  private
  def auth_hash
    request.env['omniauth.auth']
  end

end
