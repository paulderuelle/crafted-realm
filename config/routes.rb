Rails.application.routes.draw do
  root 'pages#home'

  namespace :api do
    post 'send-email', to: 'contact#send_email'
  end
end
