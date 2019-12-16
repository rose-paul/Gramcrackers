Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'
   
   namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show, :update]
    get 'search/:username', :to => 'users#search'
    resource :session, only: [:create, :destroy]
    resources :follows, only: [:index, :create, :destroy]
    resources :feeds, only: [:index]
    resources :posts, only: [:show, :create, :index, :destroy, :update] do 
      resources :comments, only: [:show, :create, :index, :destroy]
      resources :likes, only: [:create, :show, :index, :destroy]
    end
  end
end

