class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.last_name :string
      t.email :string
      t.password_digest :string
      t.role :string

      t.timestamps null: false
    end
  end
end
