class User < ActiveRecord::Base
	attr_reader :password

  after_initialize :ensure_session_token!

	has_many :questions
	has_many :answers
	has_and_belongs_to_many :topics


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.valid_password?(password) ? user : nil
  end

  def self.random_code
    code = SecureRandom::urlsafe_base64;
    while exists?(session_token: code)
      code = SecureRandom::urlsafe_base64
    end
    code
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token!
    self.update(session_token: self.class.random_code)
    self.session_token
  end

  private

  def ensure_session_token!
    self.session_token = self.class.random_code
  end
end
