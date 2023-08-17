class ContactMailer < ApplicationMailer

  def contact_form(contact)
    @contact = contact
    @to = "p.deruelle.mail@gmail.com"

    mail(to: @to, subject: "[CR_Contact]") do |format|
      format.html
    end
  end

end
