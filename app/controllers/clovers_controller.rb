require "net/https"
require "uri"

class CloversController < ApplicationController
  def auth
    # grab params
    # check see if user exists
    # post to clover
    # grab token
    # create user
    # send json back to FE

    merchant_id = params[:merchant_id]
    app_id = params[:client_id]
    code = params[:code]
    app_secret = ENV["APP_SECRET"]

    user = User.find_by(merchant_id: merchant_id)

    auth_url = "https://sandbox.dev.clover.com/oauth/token?client_id=#{app_id}
    &client_secret=#{app_secret}&code=#{code}"

    uri = URI.parse(auth_url)
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE

    request = Net::HTTP::Get.new(uri.request_uri)

    response = http.request(request)
    puts response.body
    puts response.code

    render json: response, status: 400
  end

  def webhook
    verif = clover_params[:verificationCode]
    puts verif
  end

  private
  def clover_params
    params.permit(:verificationCode)
  end
end