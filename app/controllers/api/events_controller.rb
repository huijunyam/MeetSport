class Api::EventsController < ApplicationController
  def index
    @events = Event.where("city_id = ?", params[:city_id])
    render :index
  end

  def show
    @event = Event.where("city_id = ? AND id = ?", params[:city_id], params[:id])
    @event = Event.find(params[:id])
    render :show
  end

  def create
    @event = Event.new(event_params)
    if @event.save
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
    :city_id, :name, :location, :category, :description, :start_time,
    :end_time, :date, :level, :attendees_num, :host_id
    )
  end
end
