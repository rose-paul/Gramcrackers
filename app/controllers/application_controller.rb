class ApplicationController < ActionController::Base
  # skip_before_action :verify_authenticity_token
  helper_method :current_user, :logged_in?
  before_action :underscore_params!

  def current_user 
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_login
    redirect_to new_session_url unless logged_in?
  end

  def require_logout 
    redirect_to user_url(current_user) if logged_in?
  end

  def login!(user)
    session[:session_token] = user.session_token
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

  def underscore_params!(val = params)
   underscore_hash = -> (hash) do
     hash.transform_keys!(&:underscore)
     hash.each do |key, value|
     if value.is_a?(ActionController::Parameters)
       underscore_hash.call(value)
     elsif value.is_a?(Array)
       value.each do |item|
         next unless item.is_a?(ActionController::Parameters)
           underscore_hash.call(item)
         end
       end
     end
    end
   underscore_hash.call(params)
 end
end
