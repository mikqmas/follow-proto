class UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        FollowUpMailer.sample_email(@user).deliver

        # format.html { redirect_to @user, notice: 'User was successfully create.'}
        format.json { render :show, status: :created, location: @user }
      else
        # format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  private
  def user_params
    params.permit(:username, :merchant_id, :token, :email)
  end
end
