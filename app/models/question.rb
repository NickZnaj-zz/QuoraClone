class Question < ActiveRecord::Base
  validates :title, :body, presence: true

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def index
  end

  def destroy
  end
end
