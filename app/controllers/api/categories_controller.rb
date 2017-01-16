class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render :index
  end

  def show
    @category = Category.where("name = ?", params[:category])
    render :show
  end

  private
  def category_params
    params.require(:category).permit(:name)
  end
end
