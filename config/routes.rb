Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :cities, only: [:index, :destroy, :show] do
      resources :memberships, only: [:create]
      resources :events, only: [:create, :index, :update, :show, :destroy] do
        resources :attendees, only: [:create]
      end
    end
    resources :memberships, only: [:destroy]
    resources :attendees, only: [:destroy]
  end
end
