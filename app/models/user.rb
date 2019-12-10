class User < ApplicationRecord
  validates :username, :email, :first_name, :last_name, :gender, :birthday, :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :username, :email, uniqueness: true
  after_initialize :ensure_session_token
  attr_reader :password

  has_many :posts,
    foreign_key: :user_id,
    class_name: :Post

  has_one_attached :photo

  has_many :comments

  has_many :likes

  has_many :follows

  has_many :follower_people, ##joins to set up has_many followers through/source.
    foreign_key: :following_id,
    class_name: :Follow

  has_many :followers, ## those who follow them.
    through: :follower_people,
    source: :follower

  has_many :follows_people, ##joins to set up has_many follows. 
    foreign_key: :user_id,
    class_name: :Follow

  has_many :followings,
    through: :follows_people,
    source: :following

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil 
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.update!(session_token: self.class.generate_session_token)
    self.session_token
  end

  def find_following(user)
    hash = {}
      user.follows.each do |following|
        hash[following.following_id] = following.id;
      end
    return hash
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
