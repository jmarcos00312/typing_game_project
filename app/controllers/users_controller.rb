class UsersController < ApplicationController
  # before_action :set_user, only: %i[ show update destroy ]

  # GET /users
  def index
    render json: User.order('score ASC')
  end

  # GET /users/1
  def show
    render json: User.find(params[:id])
  end

  # POST /users
  def create
    user = User.create!(user_params)
    render json: user
  end

  # DELETE /users/1
  def destroy
    user = User.find(params[:id])
    user.destroy
  end

  private

  # Only allow a list of trusted parameters through.
  def user_params
    params.permit(:name, :score)
  end
end
