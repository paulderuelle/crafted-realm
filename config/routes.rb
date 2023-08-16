Rails.application.routes.draw do
  root 'pages#home'

  namespace :api do
    post 'send-email', to: 'email#send_email'
  end
end
