Rails.application.routes.draw do

    resources :users, only: %i[index test]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
    get '/users', to: 'users#index'
    get '/tests', to: 'users#test'
    get '/users/:id', to: 'users#show'
  

get '/hello', to: 'application#hello_world'





    get '*path',
        to: 'fallback#index',
        constraints: ->(req) { !req.xhr? && req.format.html? }
end
