class Api::ContactController < ApplicationController
  def send_email
    fullname = params[:fullname]
    email = params[:email]
    message = params[:message]

    if fullname.blank? || email.blank? || message.blank?
      render json: { error: 'Missing required data' }, status: :unprocessable_entity
      return
    end

    Rails.logger.info("Fullname: #{fullname}")
    Rails.logger.info("Email: #{email}")
    Rails.logger.info("Message: #{message}")

    ContactMailer.send_email(fullname, email, message).deliver_now
    render json: { message: 'Email sent successfully' }
  end
end
