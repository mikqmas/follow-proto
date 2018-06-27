Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      scope :clover do
        get "/auth", to: "clovers#auth"
        post "/webhook", to: "clovers#webhook"
      end

      # User
      post "/users", to: "users#create"
    end
  end
end
