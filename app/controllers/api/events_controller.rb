class Api::EventsController < ApplicationController
  def index
    if params[:search] && params[:city_id]
      keyword = "#{params[:search]}%"
      category_id = Category.where("name LIKE ?", keyword).map{ |el| el.id }
      event_id = EventType.where("category_id IN (?)", category_id).map{ |el| el.event_id }
      @events = Event.where("city_id = ? AND id IN (?)", params[:city_id], event_id)
    elsif params[:city_id]
      @events = Event.where("city_id = ?", params[:city_id])
      # debug /ger
    elsif params[:search]
      if params[:search] == ""
        @events = []
      else
        keyword = "#{params[:search]}%"
        category_id = Category.where("name LIKE ?", keyword).map{ |el| el.id }
        event_id = EventType.where("category_id IN (?)", category_id).map{ |el| el.event_id }
        @events = Event.where("id IN (?)", event_id)
      end
    else
      @events = Event.all
    end
    render :index
  end

  def show
    @event = Event.find(params[:id])
    render :show
  end

  def create
    category = params[:event][:category]
    @event = Event.new(event_params)
    category_id = Category.where("name = ?", category).first.id
    if @event.save
      EventType.create(category_id: category_id, event_id: @event.id)
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = Event.find(params[:id])
    if @event.update(event_params)
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    event = Event.find(params[:id])
    @city = event.city
    render "api/cities/show"
  end

  private
  def event_params
    params.require(:event).permit(
    :city_id, :name, :location, :description, :start_time,
    :end_time, :date, :level, :attendees_num, :host_id
    )
  end
end
