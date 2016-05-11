class User < ActiveRecord::Base
	include PgSearch
	multisearchable :against => :username

	attr_reader :password

  after_initialize :ensure_session_token!

	has_attached_file :image, default_url: "default_profile_pic.png"
	validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

	validates :username, :email, presence: true
	validates :username, length: {minimum: 3}
	validates :email, length: {minimum: 3}

	has_many :questions
	has_many :answers
	has_many :votes
	has_and_belongs_to_many :topics


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.valid_password?(password) ? user : nil
  end

	def self.find_or_create_by_auth_hash(auth_hash)
    provider = auth_hash[:provider]

		if provider == "google_oauth2"
			uid = auth_hash[:uid][0..-4]

			user = User.find_by(provider: provider, uid: uid)
	    return user if user

	    User.create(
	      provider: provider,
				uid: uid.to_i,
	      username: auth_hash[:info][:name],
				email: uid + "@google.com"
	    )

		elsif provider == "facebook"

	    email = auth_hash[:extra][:raw_info][:email]

	    user = User.find_by(provider: provider, email: email)
	    return user if user

	    User.create(
	      provider: provider,
				email: auth_hash[:extra][:raw_info][:email],
	      username: auth_hash[:extra][:raw_info][:name]
	    )
		end
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
    self.session_token ||= self.class.random_code
  end
end
