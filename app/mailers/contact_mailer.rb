class ContactMailer < ApplicationMailer
  include SendGrid
  def send_email(fullname, email, message)
    @fullname = fullname
    @email = email
    @message = message
    mail(to: 'p.deruelle.mail@gmail.com', subject: '[CraftedRealm]')
  end
end
