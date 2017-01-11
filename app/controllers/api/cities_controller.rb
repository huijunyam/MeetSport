class Api::CitiesController < ApplicationController
  def index
    @cities = City.all
    @cities = cities.includes(:members)
    render :index
  end

  def show
    @city = City.find(params[:id])
    render :show
  end

  def destroy
    @city = City.find(params[:id])
    @city.destroy
    render "api/cities/index"
  end
end
