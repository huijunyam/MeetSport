class Api::CitiesController < ApplicationController
  def index
    @cities = City.all
    render :index
  end

  def show
    @city = City.find(params[:id])
    render :show
  end

  def destroy
    @city = City.find(params[:id])
    @city.destroy
    render json: {};
  end
end
