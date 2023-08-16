class Api::ContactController < ApplicationController
  def send_email
    fullname = params[:fullname]
    email = params[:email]
    message = params[:message]

    ContactMailer.send_email(fullname, email, message).deliver_now
    render json: { message: 'Email sent successfully' }
  end
end
