# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  name            :string           not null
#  profile_img     :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  attr_reader :password
  validates :username, :email, :password_digest, :session_token, :name, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: :true
  validate :validates_image_path
  validates_format_of :email,:with => /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
  after_initialize :ensure_session_token

  has_many :memberships,
    primary_key: :id,
    foreign_key: :member_id,
    class_name: :Membership

  has_many :cities,
    through: :memberships,
    source: :city

  has_many :events,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :Event

  has_many :attendings,
    primary_key: :id,
    foreign_key: :attendee_id,
    class_name: :Attendee

  has_many :event_attendees,
    through: :attendings,
    source: :event

  def validates_image_path
    if !(profile_img.downcase.include?(".png") || profile_img.downcase.include?(".jpeg") ||
        profile_img.downcase.include?(".jpg") || profile_img.downcase.include?(".gif"))
        errors.add(:profile_img, "Image format need to be either png, gif or jpg")
    end
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    ensure_session_token_uniqueness
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = User.generate_session_token
    end
  end
end
