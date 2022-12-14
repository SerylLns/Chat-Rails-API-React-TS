Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create] do
        get "info", to: 'users#info'
      end
      post "/login", to: 'auth#create'
      get "/profile", to: 'users#profile'
      resources :chatrooms, except: [:destroy] do
        resources :messages, except: [:destroy]
      end
    end
  end
end
