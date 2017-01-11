Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :cities, only: [:index, :destroy]
    resources :cities, only: [:show] do
      resources :memberships, only: [:create, :destroy]
    end
  end
end
