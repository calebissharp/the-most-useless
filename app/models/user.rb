class User < ApplicationRecord
  has_secure_password
  def admin?
    self.role == 'admin'
  end
end
