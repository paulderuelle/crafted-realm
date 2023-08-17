Rails.application.routes.draw do
  root 'pages#home'

  # resources :contact, only: [:new, :create]
end
