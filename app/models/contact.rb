class Contact
  include ActiveModel::Model

  attr_accessor :fullname, :email, :message

  validates :fullname, presence: true
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :message, presence: true

  def persisted?
    false
  end

  def initialize(attributes = {})
    attributes.each do |name, value|
      send("#{name}=", value)
    end
  end

  # def send_email
  #   ContactMailer.send_email(fullname, email, message).deliver_now
  # end
end
