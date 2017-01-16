class Api::EventTypesController < ApplicationController
  def create
    @event_type = EventType.new(event_type_params)
    if @event_type.save
      @event = @event_type.event
      render "api/events/show"
    else
      render json: @event_type.errors.full_messages, status: 422
    end
  end

  def destroy
    event_type = EventType.find(params[:id])
    event_type.destroy
    render "api/cities/show"
  end

end
