class ContactController < ApplicationController
  def submit_form
    fullname = params[:fullname]
    email = params[:email]
    message = params[:message]

    ContactMailer.send_email(name, email, message).deliver_now
  end
end
